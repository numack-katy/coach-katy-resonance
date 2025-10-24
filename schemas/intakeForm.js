export default {
  name: 'intakeForm',
  title: 'Intake Form Responses',
  type: 'document',
  icon: () => '📋',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'submittedAt',
      title: 'Submitted Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'reviewed',
      title: 'Reviewed by Coach',
      type: 'boolean',
      initialValue: false
    },
    // Personal Info
    {
      name: 'preferredName',
      title: 'Preferred Name',
      type: 'string'
    },
    {
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string'
    },
    {
      name: 'birthdate',
      title: 'Date of Birth',
      type: 'date'
    },
    {
      name: 'location',
      title: 'Location (City, State)',
      type: 'string'
    },
    {
      name: 'timezone',
      title: 'Timezone',
      type: 'string'
    },
    // Neurodivergent Background
    {
      name: 'diagnosis',
      title: 'Diagnosis/Self-Identification',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Autistic (diagnosed)', value: 'autistic-dx' },
          { title: 'Autistic (self-identified)', value: 'autistic-self' },
          { title: 'ADHD (diagnosed)', value: 'adhd-dx' },
          { title: 'ADHD (self-identified)', value: 'adhd-self' },
          { title: 'Both Autistic & ADHD', value: 'audhd' },
          { title: 'Exploring/Unsure', value: 'exploring' },
          { title: 'Other neurodivergence', value: 'other' }
        ]
      }
    },
    {
      name: 'diagnosisAge',
      title: 'Age at Diagnosis (if applicable)',
      type: 'string'
    },
    {
      name: 'otherConditions',
      title: 'Other Relevant Conditions',
      type: 'text',
      description: 'Anxiety, depression, trauma, etc. - helps me understand your full picture'
    },
    // Current Situation
    {
      name: 'currentChallenges',
      title: 'Current Biggest Challenges',
      type: 'text',
      description: 'What\'s bringing you to coaching right now?',
      validation: Rule => Rule.required()
    },
    {
      name: 'previousTherapy',
      title: 'Previous Therapy/Coaching Experience',
      type: 'text',
      description: 'What worked? What didn\'t?'
    },
    {
      name: 'supportSystem',
      title: 'Current Support System',
      type: 'text',
      description: 'Family, friends, community, other professionals'
    },
    // Goals
    {
      name: 'shortTermGoals',
      title: 'Short-Term Goals (Next 3 months)',
      type: 'text'
    },
    {
      name: 'longTermGoals',
      title: 'Long-Term Goals',
      type: 'text'
    },
    {
      name: 'idealOutcome',
      title: 'Ideal Outcome from Coaching',
      type: 'text',
      description: 'If coaching goes perfectly, what will be different?'
    },
    // Practical Considerations
    {
      name: 'accommodations',
      title: 'Accommodations Needed',
      type: 'text',
      description: 'Camera off/on, chat preferred, fidget time, etc.'
    },
    {
      name: 'communicationPreference',
      title: 'Communication Preference',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Email', value: 'email' },
          { title: 'Text/SMS', value: 'text' },
          { title: 'Between sessions check-ins', value: 'checkins' },
          { title: 'Prefer minimal contact between sessions', value: 'minimal' }
        ]
      }
    },
    {
      name: 'crisisSupport',
      title: 'Do you have crisis support in place?',
      type: 'string',
      options: {
        list: [
          { title: 'Yes, I have a therapist/crisis plan', value: 'yes' },
          { title: 'No, but stable', value: 'stable' },
          { title: 'Need referrals', value: 'need-referrals' }
        ]
      },
      description: 'Coaching is not crisis support - this helps me know your safety net'
    },
    // Additional Info
    {
      name: 'anythingElse',
      title: 'Anything Else I Should Know?',
      type: 'text'
    },
    {
      name: 'questionsForCoach',
      title: 'Questions for Me',
      type: 'text'
    },
    // Coach Response
    {
      name: 'coachNotes',
      title: 'Coach Private Notes',
      type: 'text',
      description: 'Your thoughts after reviewing'
    }
  ],
  preview: {
    select: {
      client: 'client.name',
      date: 'submittedAt',
      reviewed: 'reviewed'
    },
    prepare({ client, date, reviewed }) {
      return {
        title: client || 'Unknown Client',
        subtitle: `Submitted ${new Date(date).toLocaleDateString()}${reviewed ? ' ✓' : ' (new)'}`
      }
    }
  }
}
