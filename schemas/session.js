export default {
  name: 'session',
  title: 'Coaching Sessions',
  type: 'document',
  icon: () => '📅',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'scheduledDate',
      title: 'Scheduled Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
      initialValue: 60
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'No-Show', value: 'noshow' },
          { title: 'Rescheduled', value: 'rescheduled' }
        ]
      },
      initialValue: 'scheduled'
    },
    {
      name: 'meetingLink',
      title: 'Google Meet Link',
      type: 'url'
    },
    {
      name: 'sessionNumber',
      title: 'Session Number',
      type: 'number',
      description: 'Which session in their package (e.g., 1 of 6)'
    },
    {
      name: 'agenda',
      title: 'Session Agenda/Goals',
      type: 'text',
      description: 'What the client wants to work on'
    },
    {
      name: 'coachNotes',
      title: 'Coach Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Private notes for coach only'
    },
    {
      name: 'actionItems',
      title: 'Action Items for Client',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tasks/homework between sessions'
    },
    {
      name: 'resources',
      title: 'Resources Shared',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'resource' }] }]
    },
    {
      name: 'clientFeedback',
      title: 'Client Session Feedback',
      type: 'text',
      description: 'Optional feedback from client after session'
    },
    {
      name: 'recordingUrl',
      title: 'Recording URL',
      type: 'url',
      description: 'If sessions are recorded'
    }
  ],
  preview: {
    select: {
      client: 'client.name',
      date: 'scheduledDate',
      status: 'status'
    },
    prepare({ client, date, status }) {
      return {
        title: client || 'Unknown Client',
        subtitle: `${new Date(date).toLocaleDateString()} • ${status}`
      }
    }
  },
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'scheduledDate', direction: 'desc' }]
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'scheduledDate', direction: 'asc' }]
    }
  ]
}
