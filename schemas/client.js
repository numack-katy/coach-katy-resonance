export default {
  name: 'client',
  title: 'Clients',
  type: 'document',
  icon: () => '👤',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      description: 'Temporary password (will be hashed). Client should change on first login.',
      hidden: true // Hide in studio after creation
    },
    {
      name: 'passwordHash',
      title: 'Password Hash',
      type: 'string',
      description: 'Generate using: node scripts/hash-password.js "YourPassword123"',
      validation: Rule => Rule.required()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Paused', value: 'paused' },
          { title: 'Completed', value: 'completed' },
          { title: 'Pending', value: 'pending' }
        ]
      },
      initialValue: 'pending'
    },
    {
      name: 'intakeCompleted',
      title: 'Intake Form Completed',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'contractSigned',
      title: 'Contract Signed',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'contractUrl',
      title: 'HelloSign Contract URL',
      type: 'url'
    },
    {
      name: 'stripeCustomerId',
      title: 'Stripe Customer ID',
      type: 'string',
      hidden: true
    },
    {
      name: 'pricingTier',
      title: 'Pricing Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Supported ($50)', value: 'supported' },
          { title: 'Middle ($75)', value: 'middle' },
          { title: 'Full Price ($100)', value: 'full' }
        ]
      }
    },
    {
      name: 'packageType',
      title: 'Package Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Session', value: 'single' },
          { title: '4 Sessions', value: '4pack' },
          { title: '6 Sessions', value: '6pack' },
          { title: '8 Sessions', value: '8pack' }
        ]
      }
    },
    {
      name: 'sessionsRemaining',
      title: 'Sessions Remaining',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string'
    },
    {
      name: 'emergencyContact',
      title: 'Emergency Contact',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'relationship', title: 'Relationship', type: 'string' }
      ]
    },
    {
      name: 'notes',
      title: 'Private Coach Notes',
      type: 'text',
      description: 'Only visible to coach'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'lastLogin',
      title: 'Last Portal Login',
      type: 'datetime',
      readOnly: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status'
    },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${subtitle} • ${status || 'pending'}`
      }
    }
  }
}
