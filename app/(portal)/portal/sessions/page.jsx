import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getClient, getClientSessions } from '@/lib/sanity'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import DashboardHeader from '@/components/portal/DashboardHeader'

export const metadata = {
  title: 'Sessions - Client Portal',
  description: 'Your coaching sessions'
}

export default async function SessionsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/portal/login')
  }

  const [clientData, sessions] = await Promise.all([
    getClient(session.user.id),
    getClientSessions(session.user.id)
  ])

  // Separate sessions by status
  const upcomingSessions = sessions.filter(s => s.status === 'scheduled' && new Date(s.scheduledDate) > new Date())
  const pastSessions = sessions.filter(s => s.status === 'completed')
  const cancelledSessions = sessions.filter(s => s.status === 'cancelled' || s.status === 'noshow')

  const getStatusBadge = (status) => {
    const badges = {
      scheduled: { text: 'Scheduled', color: '#77599f' },
      completed: { text: 'Completed', color: '#4ade80' },
      cancelled: { text: 'Cancelled', color: '#ef4444' },
      noshow: { text: 'No Show', color: '#f59e0b' },
      rescheduled: { text: 'Rescheduled', color: '#a0a0a0' }
    }
    return badges[status] || badges.scheduled
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
                    Your Sessions
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
                  View your coaching session history and upcoming appointments.
                </p>
              </div>
              <div className="col-lg-4 text-right">
                <div style={{
                  backgroundColor: 'rgba(119, 89, 159, 0.1)',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid rgba(119, 89, 159, 0.3)'
                }}>
                  <p className="mb-5" style={{ color: '#a0a0a0', fontSize: '14px' }}>Sessions Remaining</p>
                  <p className="mb-0" style={{ color: '#77599f', fontSize: '32px', fontWeight: 'bold' }}>
                    {clientData.sessionsRemaining || 0}
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming Sessions */}
            {upcomingSessions.length > 0 && (
              <div className="mb-70">
                <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                  Upcoming Sessions
                </h2>

                <div className="row">
                  {upcomingSessions.map((session) => (
                    <div key={session._id} className="col-lg-6 mb-40">
                      <div style={{
                        backgroundColor: 'rgba(249, 245, 240, 0.05)',
                        padding: '30px',
                        borderRadius: '8px',
                        border: '1px solid rgba(249, 245, 240, 0.1)'
                      }}>
                        <div className="d-flex justify-content-between align-items-start mb-20">
                          <div>
                            <span style={{
                              display: 'inline-block',
                              padding: '4px 12px',
                              borderRadius: '12px',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              backgroundColor: `${getStatusBadge(session.status).color}20`,
                              color: getStatusBadge(session.status).color,
                              marginBottom: '10px'
                            }}>
                              {getStatusBadge(session.status).text}
                            </span>
                            <h3 className="services-2-title font-alt mb-10" style={{ fontSize: '24px' }}>
                              Session {session.sessionNumber || 'TBD'}
                            </h3>
                          </div>
                        </div>

                        <div style={{ color: '#f9f5f0', marginBottom: '20px' }}>
                          <p className="mb-5" style={{ fontSize: '18px' }}>
                            📅 {new Date(session.scheduledDate).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p className="mb-5" style={{ color: '#a0a0a0' }}>
                            🕐 {new Date(session.scheduledDate).toLocaleTimeString('en-US', {
                              hour: 'numeric',
                              minute: '2-digit',
                              timeZoneName: 'short'
                            })}
                          </p>
                          <p className="mb-0" style={{ color: '#a0a0a0' }}>
                            ⏱️ {session.duration} minutes
                          </p>
                        </div>

                        {session.agenda && (
                          <div style={{ color: '#f9f5f0', marginBottom: '20px' }}>
                            <strong>Agenda:</strong>
                            <p className="mb-0 mt-10" style={{ color: '#a0a0a0' }}>{session.agenda}</p>
                          </div>
                        )}

                        {session.meetingLink && (
                          <a
                            href={session.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-mod btn-color btn-round btn-full"
                          >
                            Join Session
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Past Sessions */}
            {pastSessions.length > 0 && (
              <div className="mb-70">
                <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '28px' }}>
                  Past Sessions
                </h2>

                <div className="row">
                  {pastSessions.map((session) => (
                    <div key={session._id} className="col-12 mb-30">
                      <div style={{
                        backgroundColor: 'rgba(249, 245, 240, 0.03)',
                        padding: '25px',
                        borderRadius: '8px',
                        border: '1px solid rgba(249, 245, 240, 0.05)'
                      }}>
                        <div className="row">
                          <div className="col-md-3">
                            <span style={{
                              display: 'inline-block',
                              padding: '4px 12px',
                              borderRadius: '12px',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              backgroundColor: `${getStatusBadge(session.status).color}20`,
                              color: getStatusBadge(session.status).color,
                              marginBottom: '10px'
                            }}>
                              {getStatusBadge(session.status).text}
                            </span>
                            <h4 style={{ color: '#f9f5f0', fontSize: '18px', marginBottom: '5px' }}>
                              Session {session.sessionNumber || 'TBD'}
                            </h4>
                            <p style={{ color: '#a0a0a0', fontSize: '14px', marginBottom: 0 }}>
                              {new Date(session.scheduledDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </p>
                          </div>

                          <div className="col-md-9">
                            {session.actionItems && session.actionItems.length > 0 && (
                              <div style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#f9f5f0', fontSize: '14px' }}>Action Items:</strong>
                                <ul style={{ marginTop: '8px', paddingLeft: '20px', marginBottom: 0, color: '#a0a0a0' }}>
                                  {session.actionItems.map((item, idx) => (
                                    <li key={idx} style={{ fontSize: '14px', marginBottom: '5px' }}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {session.resources && session.resources.length > 0 && (
                              <div>
                                <strong style={{ color: '#f9f5f0', fontSize: '14px' }}>Resources:</strong>
                                <div style={{ marginTop: '8px' }}>
                                  {session.resources.map((resource, idx) => (
                                    <span key={idx} style={{
                                      display: 'inline-block',
                                      marginRight: '10px',
                                      marginBottom: '5px',
                                      padding: '4px 10px',
                                      backgroundColor: 'rgba(119, 89, 159, 0.1)',
                                      borderRadius: '4px',
                                      fontSize: '12px',
                                      color: '#77599f'
                                    }}>
                                      {resource.title}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {upcomingSessions.length === 0 && pastSessions.length === 0 && (
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
                    <h3 className="services-2-title font-alt mb-20">No Sessions Yet</h3>
                    <p style={{ color: '#a0a0a0', marginBottom: 0 }}>
                      Your coach will schedule your first session soon. You'll receive an email notification.
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
