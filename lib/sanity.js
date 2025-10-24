import { createClient } from '@sanity/client'
import { toHTML } from '@portabletext/to-html'

// Read-only client (can use CDN)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fvz83dyc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Write client (requires token, no CDN)
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fvz83dyc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

// Helpful query functions
export async function getAllPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      body,
      mainImage {
        asset->{
          url,
          altText
        },
        alt
      }
    }
  `)
}

export async function getPost(slug) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      body,
      mainImage {
        asset->{
          url,
          altText
        },
        alt
      }
    }
  `, { slug })
}

// ============================================
// PORTAL QUERIES
// ============================================

// Get client by email (for login)
export async function getClientByEmail(email) {
  return await client.fetch(`
    *[_type == "client" && email == $email][0] {
      _id,
      name,
      email,
      passwordHash,
      status,
      intakeCompleted,
      contractSigned,
      sessionsRemaining,
      lastLogin
    }
  `, { email })
}

// Get client with full details
export async function getClient(clientId) {
  return await client.fetch(`
    *[_id == $clientId][0] {
      _id,
      name,
      email,
      phone,
      status,
      pronouns,
      intakeCompleted,
      contractSigned,
      contractUrl,
      pricingTier,
      packageType,
      sessionsRemaining,
      startDate,
      "upcomingSessions": *[_type == "session" && references($clientId) && status == "scheduled" && scheduledDate > now()] | order(scheduledDate asc) {
        _id,
        scheduledDate,
        duration,
        meetingLink,
        sessionNumber,
        agenda
      },
      "pastSessions": *[_type == "session" && references($clientId) && status == "completed"] | order(scheduledDate desc) [0...5] {
        _id,
        scheduledDate,
        sessionNumber,
        actionItems
      },
      "resources": *[_type == "resource" && (accessLevel == "all" || (accessLevel == "specific" && $clientId in specificClients[]._ref))] | order(order asc) {
        _id,
        title,
        description,
        resourceType,
        category,
        file {
          asset->{
            url
          }
        },
        externalUrl,
        coverImage {
          asset->{
            url
          }
        }
      }
    }
  `, { clientId })
}

// Get all clients (for coach admin)
export async function getAllClients() {
  return await client.fetch(`
    *[_type == "client"] | order(name asc) {
      _id,
      name,
      email,
      status,
      intakeCompleted,
      contractSigned,
      sessionsRemaining,
      startDate,
      lastLogin
    }
  `)
}

// Get client's upcoming sessions
export async function getClientSessions(clientId) {
  return await client.fetch(`
    *[_type == "session" && references($clientId)] | order(scheduledDate desc) {
      _id,
      scheduledDate,
      duration,
      status,
      meetingLink,
      sessionNumber,
      agenda,
      actionItems,
      resources[]->{
        title,
        resourceType,
        file {
          asset->{
            url
          }
        },
        externalUrl
      }
    }
  `, { clientId })
}

// Get client's intake form
export async function getClientIntake(clientId) {
  return await client.fetch(`
    *[_type == "intakeForm" && references($clientId)][0] {
      _id,
      submittedAt,
      preferredName,
      pronouns,
      diagnosis,
      currentChallenges,
      shortTermGoals,
      longTermGoals,
      accommodations,
      communicationPreference
    }
  `, { clientId })
}

// Get resources for client
export async function getClientResources(clientId) {
  return await client.fetch(`
    *[_type == "resource" &&
      published == true &&
      (accessLevel == "all" ||
       (accessLevel == "active" && *[_type == "client" && _id == $clientId && status == "active"][0]) ||
       (accessLevel == "specific" && $clientId in specificClients[]._ref)
      )
    ] | order(order asc) {
      _id,
      title,
      slug,
      description,
      resourceType,
      category,
      file {
        asset->{
          url,
          originalFilename,
          size
        }
      },
      externalUrl,
      coverImage {
        asset->{
          url
        }
      }
    }
  `, { clientId })
}

// Update client last login
export async function updateClientLastLogin(clientId) {
  return await writeClient
    .patch(clientId)
    .set({ lastLogin: new Date().toISOString() })
    .commit()
}

// Submit intake form
export async function submitIntakeForm(clientId, formData) {
  return await writeClient.create({
    _type: 'intakeForm',
    client: {
      _type: 'reference',
      _ref: clientId
    },
    submittedAt: new Date().toISOString(),
    ...formData
  })
}

// Update client intake status
export async function markIntakeComplete(clientId) {
  return await writeClient
    .patch(clientId)
    .set({ intakeCompleted: true })
    .commit()
}

const SAFE_PROTOCOL_REGEX = /^(https?:|mailto:|tel:)/i

function sanitizeHref(href) {
  if (!href) return null

  const trimmed = href.trim()
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
    return trimmed
  }

  if (SAFE_PROTOCOL_REGEX.test(trimmed)) {
    return trimmed
  }

  try {
    const url = new URL(trimmed)
    if (SAFE_PROTOCOL_REGEX.test(url.protocol + '')) {
      return trimmed
    }
  } catch (error) {
    return null
  }

  return null
}

function escapeHtmlAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function renderPortableText(body) {
  if (!body) return '';

  try {
    return toHTML(body, {
      components: {
        block: {
          normal: ({children}) => `<p class="mb-4 text-lg leading-relaxed" style="color: #f9f5f0;">${children}</p>`,
          h1: ({children}) => `<h1 class="section-title-large font-alt uppercase mb-60 mb-md-50 mb-sm-30">${children}</h1>`,
          h2: ({children}) => `<h2 class="section-title font-alt uppercase mb-40" style="font-size: 32px;">${children}</h2>`,
          h3: ({children}) => `<h3 class="services-2-title font-alt mb-30">${children}</h3>`,
          blockquote: ({children}) => `<blockquote class="mb-40 pl-40" style="border-left: 4px solid #77599f; color: #f9f5f0; font-style: italic;">${children}</blockquote>`,
        },
        marks: {
          strong: ({children}) => `<strong style="font-weight: 600;">${children}</strong>`,
          em: ({children}) => `<em style="font-style: italic;">${children}</em>`,
          link: ({children, value}) => {
            const safeHref = sanitizeHref(value?.href)
            if (!safeHref) {
              return `<span style="color: #77599f;">${children}</span>`
            }

            const escapedHref = escapeHtmlAttribute(safeHref)
            const isExternal = /^https?:/i.test(safeHref)
            const targetAttr = isExternal ? ' target="_blank"' : ''
            const relAttr = isExternal ? ' rel="noopener noreferrer"' : ''

            return `<a href="${escapedHref}" class="link-hover-anim" style="color: #77599f;"${targetAttr}${relAttr}>${children}</a>`
          },
        },
        list: {
          bullet: ({children}) => `<ul class="section-features font-alt clearlist uppercase mb-40" style="color: #f9f5f0;">${children}</ul>`,
          number: ({children}) => `<ol class="list-decimal ml-6 mb-40" style="color: #f9f5f0;">${children}</ol>`,
        },
        listItem: {
          bullet: ({children}) => `<li class="mb-10">${children}</li>`,
          number: ({children}) => `<li class="mb-10">${children}</li>`,
        },
      }
    });
  } catch (error) {
    console.error('Error rendering portable text:', error);
    return '';
  }
}
