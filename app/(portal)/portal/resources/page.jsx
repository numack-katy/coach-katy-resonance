import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getClientResources } from '@/lib/sanity'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import DashboardHeader from '@/components/portal/DashboardHeader'
import { getClient } from '@/lib/sanity'

export const metadata = {
  title: 'Resources - Client Portal',
  description: 'Your coaching resources and materials'
}

export default async function ResourcesPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/portal/login')
  }

  const [clientData, resources] = await Promise.all([
    getClient(session.user.id),
    getClientResources(session.user.id)
  ])

  // Group resources by category
  const resourcesByCategory = resources.reduce((acc, resource) => {
    const category = resource.category || 'other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(resource)
    return acc
  }, {})

  const categoryLabels = {
    'getting-started': 'Getting Started',
    'self-awareness': 'Self-Awareness',
    'energy': 'Energy Management',
    'communication': 'Communication',
    'boundaries': 'Boundaries',
    'burnout': 'Burnout Prevention',
    'tools': 'Tools & Templates',
    'other': 'Other Resources'
  }

  const getResourceIcon = (type) => {
    switch (type) {
      case 'pdf':
        return '📄'
      case 'worksheet':
        return '📝'
      case 'video':
        return '🎥'
      case 'link':
        return '🔗'
      case 'template':
        return '📋'
      default:
        return '📚'
    }
  }

  return (
    <div className="theme-brutalist">
      <div className="page" id="top">
        <DashboardHeader clientData={clientData} />

      <main id="main">
        <section className="page-section bg-dark-1 light-content" style={{ paddingTop: '140px', minHeight: '100vh' }}>
          <div className="container">
            {/* Header */}
            <div className="row mb-60 mb-sm-40">
              <div className="col-lg-8">
                <h1 className="hs-title-2 font-alt uppercase mb-20">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    Resources
                  </span>
                  <span className="section-title-image">
                    <Image
                      src="/assets/images/demo-brutalist/shape-2.svg"
                      alt=""
                      width={35}
                      height={35}
                    />
                  </span>
                </h1>
                <p className="section-descr mb-0" style={{ color: '#f9f5f0' }}>
                  Tools, worksheets, and materials for your sessions.
                </p>
              </div>
            </div>

            {/* Resources by Category */}
            {Object.keys(resourcesByCategory).length > 0 ? (
              Object.entries(resourcesByCategory).map(([category, categoryResources]) => (
                <div key={category} className="mb-70">
                  <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                    {categoryLabels[category] || category}
                  </h2>

                  <div className="row">
                    {categoryResources.map((resource) => {
                      const resourceUrl = resource.externalUrl || resource.file?.asset?.url
                      const isExternal = !!resource.externalUrl

                      return (
                        <div key={resource._id} className="col-md-6 col-lg-4 mb-40">
                          <div style={{
                            backgroundColor: 'rgba(249, 245, 240, 0.05)',
                            padding: '30px',
                            borderRadius: '8px',
                            border: '1px solid rgba(249, 245, 240, 0.1)',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            {/* Cover Image or Icon */}
                            {resource.coverImage?.asset?.url ? (
                              <div style={{ marginBottom: '20px', borderRadius: '4px', overflow: 'hidden' }}>
                                <Image
                                  src={resource.coverImage.asset.url}
                                  alt={resource.title}
                                  width={400}
                                  height={200}
                                  style={{ width: '100%', height: 'auto' }}
                                />
                              </div>
                            ) : (
                              <div style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>
                                {getResourceIcon(resource.resourceType)}
                              </div>
                            )}

                            {/* Content */}
                            <div style={{ flexGrow: 1 }}>
                              <h3 className="services-2-title font-alt mb-15" style={{ fontSize: '20px' }}>
                                {resource.title}
                              </h3>

                              {resource.description && (
                                <p style={{ color: '#a0a0a0', marginBottom: '20px', fontSize: '14px' }}>
                                  {resource.description}
                                </p>
                              )}

                              <p style={{ color: '#77599f', fontSize: '12px', textTransform: 'uppercase', marginBottom: '20px' }}>
                                {resource.resourceType}
                              </p>
                            </div>

                            {/* Action Button */}
                            {resourceUrl && (
                              <a
                                href={resourceUrl}
                                target={isExternal ? '_blank' : '_self'}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                download={!isExternal}
                                className="btn btn-mod btn-border btn-round btn-full"
                              >
                                {isExternal ? 'View Resource' : 'Download'}
                              </a>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="row">
                <div className="col-12">
                  <div style={{
                    backgroundColor: 'rgba(249, 245, 240, 0.05)',
                    padding: '60px 30px',
                    borderRadius: '8px',
                    border: '1px solid rgba(249, 245, 240, 0.1)',
                    textAlign: 'center'
                  }}>
                    <Image
                      src="/assets/images/demo-brutalist/shape-2.svg"
                      alt=""
                      width={60}
                      height={60}
                      style={{ marginBottom: '30px', opacity: 0.5 }}
                    />
                    <h3 className="services-2-title font-alt mb-20">No Resources Yet</h3>
                    <p style={{ color: '#a0a0a0', marginBottom: 0 }}>
                      Your coach will add resources here as you work together.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-1 bg-dark-2 light-content">
        <div className="container">
          <div className="footer-text text-center">
            © {new Date().getFullYear()} Coach Katy. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
