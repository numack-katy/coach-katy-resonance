import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getClient } from '@/lib/sanity'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import DashboardHeader from '@/components/portal/DashboardHeader'
import UpcomingSessions from '@/components/portal/UpcomingSessions'
import QuickActions from '@/components/portal/QuickActions'
import RecentResources from '@/components/portal/RecentResources'

export const metadata = {
  title: 'Dashboard - Client Portal',
  description: 'Your coaching dashboard'
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/portal/login')
  }

  const clientData = await getClient(session.user.id)

  if (!clientData) {
    redirect('/portal/login')
  }

  return (
    <div className="theme-brutalist">
      <div className="page" id="top">
        <DashboardHeader clientData={clientData} />

      <main id="main">
        <section className="page-section bg-dark-1 light-content" style={{ paddingTop: '140px', minHeight: '100vh' }}>
          <div className="container">
            {/* Welcome Header */}
            <div className="row mb-60 mb-sm-40">
              <div className="col-lg-8">
                <h1 className="hs-title-2 font-alt uppercase mb-20">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    Welcome, {clientData.name.split(' ')[0]}
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
                  Here's your latest updates and action items.
                </p>
              </div>
            </div>

            {/* Status Alerts */}
            {!clientData.intakeCompleted && (
              <div className="row mb-40">
                <div className="col-12">
                  <div className="alert" style={{
                    backgroundColor: 'rgba(119, 89, 159, 0.1)',
                    border: '1px solid rgba(119, 89, 159, 0.3)',
                    color: '#f9f5f0',
                    padding: '20px',
                    borderRadius: '4px'
                  }}>
                    <strong>Action Needed:</strong> Please complete your{' '}
                    <a href="/portal/intake" className="link-hover-anim" style={{ color: '#77599f' }}>
                      intake form
                    </a>{' '}
                    to get started.
                  </div>
                </div>
              </div>
            )}

            {!clientData.contractSigned && clientData.contractUrl && (
              <div className="row mb-40">
                <div className="col-12">
                  <div className="alert" style={{
                    backgroundColor: 'rgba(119, 89, 159, 0.1)',
                    border: '1px solid rgba(119, 89, 159, 0.3)',
                    color: '#f9f5f0',
                    padding: '20px',
                    borderRadius: '4px'
                  }}>
                    <strong>Action Needed:</strong> Please review and sign your{' '}
                    <a href={clientData.contractUrl} target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>
                      coaching agreement
                    </a>.
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="row mb-60 mb-sm-40">
              <div className="col-12">
                <QuickActions
                  intakeCompleted={clientData.intakeCompleted}
                  contractSigned={clientData.contractSigned}
                  contractUrl={clientData.contractUrl}
                />
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="row">
              {/* Upcoming Sessions */}
              <div className="col-lg-8 mb-sm-40">
                <UpcomingSessions
                  upcomingSessions={clientData.upcomingSessions || []}
                  pastSessions={clientData.pastSessions || []}
                  sessionsRemaining={clientData.sessionsRemaining}
                />
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                {/* Session Info Card */}
                <div className="mb-40" style={{
                  backgroundColor: 'rgba(249, 245, 240, 0.05)',
                  padding: '30px',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 245, 240, 0.1)'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ fontSize: '20px' }}>
                    Your Package
                  </h3>
                  <div style={{ color: '#f9f5f0' }}>
                    <p className="mb-10">
                      <strong>Sessions Remaining:</strong> {clientData.sessionsRemaining || 0}
                    </p>
                    {clientData.packageType && (
                      <p className="mb-10">
                        <strong>Package:</strong> {clientData.packageType}
                      </p>
                    )}
                    {clientData.startDate && (
                      <p className="mb-0">
                        <strong>Started:</strong> {new Date(clientData.startDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Recent Resources */}
                <RecentResources resources={clientData.resources || []} />
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
