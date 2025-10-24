'use client'

import Link from 'next/link'

export default function QuickActions({ intakeCompleted, contractSigned, contractUrl }) {
  const actions = []

  // Add intake form action if not completed
  if (!intakeCompleted) {
    actions.push({
      title: 'Complete Intake Form',
      description: 'Help your coach understand your goals and needs',
      href: '/portal/intake',
      icon: '📋',
      color: '#77599f'
    })
  }

  // Add contract action if not signed
  if (!contractSigned && contractUrl) {
    actions.push({
      title: 'Sign Coaching Agreement',
      description: 'Review and sign your coaching contract',
      href: contractUrl,
      icon: '✍️',
      color: '#77599f',
      external: true
    })
  }

  // Always show these
  actions.push(
    {
      title: 'View Sessions',
      description: 'See your coaching session history and schedule',
      href: '/portal/sessions',
      icon: '📅',
      color: '#f9f5f0'
    },
    {
      title: 'Browse Resources',
      description: 'Access tools, worksheets, and materials',
      href: '/portal/resources',
      icon: '📚',
      color: '#f9f5f0'
    }
  )

  return (
    <div>
      <h2 className="section-title font-alt uppercase mb-40" style={{ fontSize: '32px' }}>
        Quick Actions
      </h2>
      <div className="row g-4">
        {actions.map((action, index) => (
          <div key={index} className="col-sm-6 col-lg-6 col-xl-3 mb-30">
            {action.external ? (
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  backgroundColor: 'rgba(249, 245, 240, 0.05)',
                  padding: '30px',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 245, 240, 0.1)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}
                className="quick-action-card"
              >
                <div style={{ fontSize: '32px', marginBottom: '15px' }}>{action.icon}</div>
                <h3 className="services-2-title font-alt mb-15" style={{ fontSize: '18px', color: '#f9f5f0' }}>
                  {action.title}
                </h3>
                <p style={{ color: '#a0a0a0', marginBottom: 0, fontSize: '14px' }}>
                  {action.description}
                </p>
              </a>
            ) : (
              <Link
                href={action.href}
                style={{
                  display: 'block',
                  backgroundColor: 'rgba(249, 245, 240, 0.05)',
                  padding: '30px',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 245, 240, 0.1)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}
                className="quick-action-card"
              >
                <div style={{ fontSize: '32px', marginBottom: '15px' }}>{action.icon}</div>
                <h3 className="services-2-title font-alt mb-15" style={{ fontSize: '18px', color: '#f9f5f0' }}>
                  {action.title}
                </h3>
                <p style={{ color: '#a0a0a0', marginBottom: 0, fontSize: '14px' }}>
                  {action.description}
                </p>
              </Link>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .quick-action-card:hover {
          background-color: rgba(249, 245, 240, 0.08) !important;
          border-color: rgba(119, 89, 159, 0.3) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}
