'use client'

import Image from 'next/image'

export default function UpcomingSessions({ upcomingSessions, pastSessions, sessionsRemaining }) {
  return (
    <div>
      <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '32px' }}>
        Your Sessions
      </h2>

      {/* Upcoming Sessions */}
      {upcomingSessions && upcomingSessions.length > 0 ? (
        <div className="mb-60">
          <h3 className="services-2-title font-alt mb-30">Upcoming</h3>
          <div className="row">
            {upcomingSessions.map((session) => (
              <div key={session._id} className="col-12 mb-30">
                <div style={{
                  backgroundColor: 'rgba(249, 245, 240, 0.05)',
                  padding: '30px',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 245, 240, 0.1)'
                }}>
                  <div className="d-flex justify-content-between align-items-start mb-20">
                    <div>
                      <h4 className="services-2-title font-alt mb-10" style={{ fontSize: '20px' }}>
                        Session {session.sessionNumber || 'TBD'}
                      </h4>
                      <p className="mb-0" style={{ color: '#f9f5f0', fontSize: '18px' }}>
                        {new Date(session.scheduledDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p style={{ color: '#a0a0a0' }}>
                        {new Date(session.scheduledDate).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                          timeZoneName: 'short'
                        })} • {session.duration} minutes
                      </p>
                    </div>
                    {session.meetingLink && (
                      <a
                        href={session.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-mod btn-color btn-small btn-round"
                      >
                        Join Session
                      </a>
                    )}
                  </div>

                  {session.agenda && (
                    <div style={{ color: '#f9f5f0' }}>
                      <strong>Agenda:</strong>
                      <p className="mb-0 mt-10">{session.agenda}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-60">
          <div style={{
            backgroundColor: 'rgba(249, 245, 240, 0.05)',
            padding: '40px',
            borderRadius: '8px',
            border: '1px solid rgba(249, 245, 240, 0.1)',
            textAlign: 'center'
          }}>
            <Image
              src="/assets/images/demo-brutalist/shape-2.svg"
              alt=""
              width={50}
              height={50}
              style={{ marginBottom: '20px', opacity: 0.5 }}
            />
            <h3 className="services-2-title font-alt mb-20">No Upcoming Sessions</h3>
            <p style={{ color: '#a0a0a0', marginBottom: 0 }}>
              {sessionsRemaining > 0
                ? "You have sessions remaining. Contact your coach to schedule!"
                : "All sessions complete. Contact your coach to continue."}
            </p>
          </div>
        </div>
      )}

      {/* Past Sessions */}
      {pastSessions && pastSessions.length > 0 && (
        <div>
          <h3 className="services-2-title font-alt mb-30">Recent Sessions</h3>
          <div className="row">
            {pastSessions.map((session) => (
              <div key={session._id} className="col-12 mb-20">
                <div style={{
                  backgroundColor: 'rgba(249, 245, 240, 0.03)',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 245, 240, 0.05)'
                }}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="mb-5" style={{ color: '#f9f5f0', fontSize: '16px' }}>
                        Session {session.sessionNumber || 'TBD'}
                      </h5>
                      <p className="mb-0" style={{ color: '#a0a0a0', fontSize: '14px' }}>
                        {new Date(session.scheduledDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  {session.actionItems && session.actionItems.length > 0 && (
                    <div className="mt-15" style={{ color: '#f9f5f0', fontSize: '14px' }}>
                      <strong>Action Items:</strong>
                      <ul style={{ marginTop: '8px', paddingLeft: '20px', marginBottom: 0 }}>
                        {session.actionItems.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
