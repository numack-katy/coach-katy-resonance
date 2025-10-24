'use client'

import Link from 'next/link'

export default function RecentResources({ resources }) {
  const recentResources = resources.slice(0, 3)

  return (
    <div style={{
      backgroundColor: 'rgba(249, 245, 240, 0.05)',
      padding: '30px',
      borderRadius: '8px',
      border: '1px solid rgba(249, 245, 240, 0.1)'
    }}>
      <h3 className="services-2-title font-alt mb-20" style={{ fontSize: '20px' }}>
        Recent Resources
      </h3>

      {recentResources.length > 0 ? (
        <>
          <div className="mb-20">
            {recentResources.map((resource, index) => (
              <div key={resource._id} className="mb-15">
                <div style={{
                  paddingBottom: '15px',
                  borderBottom: index < recentResources.length - 1 ? '1px solid rgba(249, 245, 240, 0.1)' : 'none'
                }}>
                  <h5 style={{ color: '#f9f5f0', fontSize: '14px', marginBottom: '5px' }}>
                    {resource.title}
                  </h5>
                  <p style={{ color: '#a0a0a0', fontSize: '12px', marginBottom: 0 }}>
                    {resource.resourceType}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/portal/resources"
            className="btn btn-mod btn-small btn-border btn-round btn-full"
          >
            View All Resources
          </Link>
        </>
      ) : (
        <p style={{ color: '#a0a0a0', marginBottom: 0 }}>
          No resources available yet. Check back soon!
        </p>
      )}
    </div>
  )
}
