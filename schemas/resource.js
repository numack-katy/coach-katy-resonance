export default {
  name: 'resource',
  title: 'Client Resources',
  type: 'document',
  icon: () => '📚',
  fields: [
    {
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: '📄 PDF Document', value: 'pdf' },
          { title: '📝 Worksheet', value: 'worksheet' },
          { title: '🎥 Video', value: 'video' },
          { title: '🔗 External Link', value: 'link' },
          { title: '📊 Template', value: 'template' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'file',
      title: 'Upload File',
      type: 'file',
      description: 'Upload PDF, DOC, or other file',
      options: {
        accept: '.pdf,.doc,.docx,.xlsx,.zip'
      }
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'For videos, links, or external resources',
      hidden: ({ document }) => document?.resourceType !== 'video' && document?.resourceType !== 'link'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Getting Started', value: 'getting-started' },
          { title: 'Self-Awareness', value: 'self-awareness' },
          { title: 'Energy Management', value: 'energy' },
          { title: 'Communication', value: 'communication' },
          { title: 'Boundaries', value: 'boundaries' },
          { title: 'Burnout Prevention', value: 'burnout' },
          { title: 'Tools & Techniques', value: 'tools' },
          { title: 'Other', value: 'other' }
        ]
      }
    },
    {
      name: 'accessLevel',
      title: 'Who Can Access',
      type: 'string',
      options: {
        list: [
          { title: 'All Clients', value: 'all' },
          { title: 'Active Clients Only', value: 'active' },
          { title: 'Specific Clients', value: 'specific' }
        ]
      },
      initialValue: 'all'
    },
    {
      name: 'specificClients',
      title: 'Specific Clients',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'client' }] }],
      hidden: ({ document }) => document?.accessLevel !== 'specific'
    },
    {
      name: 'coverImage',
      title: 'Cover Image (Optional)',
      type: 'image'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      type: 'resourceType',
      published: 'published'
    },
    prepare({ title, category, type, published }) {
      return {
        title,
        subtitle: `${type || 'resource'} • ${category || 'uncategorized'}${published ? '' : ' (draft)'}`
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ]
}
