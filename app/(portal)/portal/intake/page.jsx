'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import DashboardHeader from '@/components/portal/DashboardHeader'

export default function IntakePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    // Personal Info
    preferredName: '',
    pronouns: '',
    birthdate: '',
    location: '',
    timezone: '',

    // Neurodivergent Background
    diagnosis: [],
    diagnosisAge: '',
    otherConditions: '',

    // Current Situation
    currentChallenges: '',
    previousTherapy: '',
    supportSystem: '',

    // Goals
    shortTermGoals: '',
    longTermGoals: '',
    idealOutcome: '',

    // Practical Considerations
    accommodations: '',
    communicationPreference: [],
    crisisSupport: '',

    // Additional Info
    anythingElse: '',
    questionsForCoach: ''
  })

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/portal/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit intake form')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/portal/dashboard')
      }, 2000)
    } catch (err) {
      setError(err.message || 'An error occurred while submitting the form')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    router.push('/portal/login')
    return null
  }

  if (success) {
    return (
      <div className="theme-brutalist">
        <div className="page" id="top">
          <DashboardHeader clientData={{ name: session.user.name, intakeCompleted: false }} />
        <main id="main">
          <section className="page-section bg-dark-1 light-content" style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
                  <h2 className="section-title font-alt uppercase mb-20">Thank You!</h2>
                  <p style={{ color: '#f9f5f0', marginBottom: '30px' }}>
                    Your intake form has been submitted successfully. Redirecting to dashboard...
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        </div>
      </div>
    )
  }

  return (
    <div className="theme-brutalist">
      <div className="page" id="top">
        <DashboardHeader clientData={{ name: session.user.name, intakeCompleted: false }} />

      <main id="main">
        <section className="page-section bg-dark-1 light-content" style={{ paddingTop: '140px', minHeight: '100vh' }}>
          <div className="container">
            {/* Header */}
            <div className="row mb-60 mb-sm-40">
              <div className="col-lg-8">
                <h1 className="hs-title-2 font-alt uppercase mb-20">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    Intake Form
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
                  Help me understand your goals, challenges, and what brings you to coaching.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                {error && (
                  <div className="alert alert-danger mb-40" style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#fca5a5',
                    padding: '15px 20px',
                    borderRadius: '4px'
                  }}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Personal Info Section */}
                  <div className="mb-60">
                    <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                      Personal Information
                    </h2>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="preferredName" style={{ color: '#f9f5f0' }}>Preferred Name</label>
                          <input
                            type="text"
                            id="preferredName"
                            name="preferredName"
                            className="input-lg round form-control"
                            value={formData.preferredName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="pronouns" style={{ color: '#f9f5f0' }}>Pronouns</label>
                          <input
                            type="text"
                            id="pronouns"
                            name="pronouns"
                            className="input-lg round form-control"
                            placeholder="e.g., she/her, they/them, he/him"
                            value={formData.pronouns}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="birthdate" style={{ color: '#f9f5f0' }}>Date of Birth</label>
                          <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            className="input-lg round form-control"
                            value={formData.birthdate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="location" style={{ color: '#f9f5f0' }}>Location (City, State)</label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            className="input-lg round form-control"
                            value={formData.location}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="timezone" style={{ color: '#f9f5f0' }}>Timezone</label>
                          <input
                            type="text"
                            id="timezone"
                            name="timezone"
                            className="input-lg round form-control"
                            placeholder="e.g., EST, PST, CST"
                            value={formData.timezone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Neurodivergent Background */}
                  <div className="mb-60">
                    <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                      Neurodivergent Background
                    </h2>

                    <div className="form-group">
                      <label style={{ color: '#f9f5f0', display: 'block', marginBottom: '15px' }}>
                        Diagnosis/Self-Identification (select all that apply)
                      </label>
                      {[
                        { label: 'Autistic (diagnosed)', value: 'autistic-dx' },
                        { label: 'Autistic (self-identified)', value: 'autistic-self' },
                        { label: 'ADHD (diagnosed)', value: 'adhd-dx' },
                        { label: 'ADHD (self-identified)', value: 'adhd-self' },
                        { label: 'Both Autistic & ADHD', value: 'audhd' },
                        { label: 'Exploring/Unsure', value: 'exploring' },
                        { label: 'Other neurodivergence', value: 'other' }
                      ].map(option => (
                        <div key={option.value} style={{ marginBottom: '10px' }}>
                          <label style={{ color: '#f9f5f0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <input
                              type="checkbox"
                              checked={formData.diagnosis.includes(option.value)}
                              onChange={() => handleCheckboxChange('diagnosis', option.value)}
                              style={{ marginRight: '10px', width: '18px', height: '18px' }}
                            />
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="diagnosisAge" style={{ color: '#f9f5f0' }}>Age at Diagnosis (if applicable)</label>
                          <input
                            type="text"
                            id="diagnosisAge"
                            name="diagnosisAge"
                            className="input-lg round form-control"
                            value={formData.diagnosisAge}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="otherConditions" style={{ color: '#f9f5f0' }}>
                        Other Relevant Conditions
                        <span style={{ color: '#a0a0a0', fontSize: '14px', display: 'block', marginTop: '5px' }}>
                          Anxiety, depression, trauma, etc. - helps me understand your full picture
                        </span>
                      </label>
                      <textarea
                        id="otherConditions"
                        name="otherConditions"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.otherConditions}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Current Situation */}
                  <div className="mb-60">
                    <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                      Current Situation
                    </h2>

                    <div className="form-group">
                      <label htmlFor="currentChallenges" style={{ color: '#f9f5f0' }}>
                        Current Biggest Challenges *
                        <span style={{ color: '#a0a0a0', fontSize: '14px', display: 'block', marginTop: '5px' }}>
                          What's bringing you to coaching right now?
                        </span>
                      </label>
                      <textarea
                        id="currentChallenges"
                        name="currentChallenges"
                        className="input-lg round form-control"
                        rows="5"
                        value={formData.currentChallenges}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="previousTherapy" style={{ color: '#f9f5f0' }}>
                        Previous Therapy/Coaching Experience
                        <span style={{ color: '#a0a0a0', fontSize: '14px', display: 'block', marginTop: '5px' }}>
                          What worked? What didn't?
                        </span>
                      </label>
                      <textarea
                        id="previousTherapy"
                        name="previousTherapy"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.previousTherapy}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="supportSystem" style={{ color: '#f9f5f0' }}>
                        Current Support System
                        <span style={{ color: '#a0a0a0', fontSize: '14px', display: 'block', marginTop: '5px' }}>
                          Family, friends, community, other professionals
                        </span>
                      </label>
                      <textarea
                        id="supportSystem"
                        name="supportSystem"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.supportSystem}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="mb-60">
                    <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                      Goals
                    </h2>

                    <div className="form-group">
                      <label htmlFor="shortTermGoals" style={{ color: '#f9f5f0' }}>
                        Short-Term Goals (Next 3 months)
                      </label>
                      <textarea
                        id="shortTermGoals"
                        name="shortTermGoals"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.shortTermGoals}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="longTermGoals" style={{ color: '#f9f5f0' }}>
                        Long-Term Goals
                      </label>
                      <textarea
                        id="longTermGoals"
                        name="longTermGoals"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.longTermGoals}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="idealOutcome" style={{ color: '#f9f5f0' }}>
                        Ideal Outcome from Coaching
                        <span style={{ color: '#a0a0a0', fontSize: '14px', display: 'block', marginTop: '5px' }}>
                          If coaching goes perfectly, what will be different?
                        </span>
                      </label>
                      <textarea
                        id="idealOutcome"
                        name="idealOutcome"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.idealOutcome}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Practical Considerations */}
                  <div className="mb-60">
                    <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                      Practical Considerations
                    </h2>

                    <div className="form-group">
                      <label htmlFor="accommodations" style={{ color: '#f9f5f0' }}>
                        Accommodations Needed
                        <span style={{ color: '#a0a0a0', fontSize: '14px', display: 'block', marginTop: '5px' }}>
                          Camera off/on, chat preferred, fidget time, etc.
                        </span>
                      </label>
                      <textarea
                        id="accommodations"
                        name="accommodations"
                        className="input-lg round form-control"
                        rows="3"
                        value={formData.accommodations}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ color: '#f9f5f0', display: 'block', marginBottom: '15px' }}>
                        Communication Preference (select all that apply)
                      </label>
                      {[
                        { label: 'Email', value: 'email' },
                        { label: 'Text/SMS', value: 'text' },
                        { label: 'Between sessions check-ins', value: 'checkins' },
                        { label: 'Prefer minimal contact between sessions', value: 'minimal' }
                      ].map(option => (
                        <div key={option.value} style={{ marginBottom: '10px' }}>
                          <label style={{ color: '#f9f5f0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <input
                              type="checkbox"
                              checked={formData.communicationPreference.includes(option.value)}
                              onChange={() => handleCheckboxChange('communicationPreference', option.value)}
                              style={{ marginRight: '10px', width: '18px', height: '18px' }}
                            />
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="form-group">
                      <label htmlFor="crisisSupport" style={{ color: '#f9f5f0' }}>
                        Do you have crisis support in place?
                        <span style={{ color: '#a0a0a0', fontSize: '14px', display: 'block', marginTop: '5px' }}>
                          Coaching is not crisis support - this helps me know your safety net
                        </span>
                      </label>
                      <select
                        id="crisisSupport"
                        name="crisisSupport"
                        className="input-lg round form-control"
                        value={formData.crisisSupport}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes, I have a therapist/crisis plan</option>
                        <option value="stable">No, but stable</option>
                        <option value="need-referrals">Need referrals</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mb-60">
                    <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                      Additional Information
                    </h2>

                    <div className="form-group">
                      <label htmlFor="anythingElse" style={{ color: '#f9f5f0' }}>
                        Anything Else I Should Know?
                      </label>
                      <textarea
                        id="anythingElse"
                        name="anythingElse"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.anythingElse}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="questionsForCoach" style={{ color: '#f9f5f0' }}>
                        Questions for Me
                      </label>
                      <textarea
                        id="questionsForCoach"
                        name="questionsForCoach"
                        className="input-lg round form-control"
                        rows="4"
                        value={formData.questionsForCoach}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-full"
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Submit Intake Form'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
