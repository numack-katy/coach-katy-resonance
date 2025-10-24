'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function DashboardHeader({ clientData }) {
  return (
    <nav className="main-nav dark transparent stick-fixed wow-menubar">
      <div className="main-nav-sub full-wrapper">
        <div className="nav-logo-wrap local-scroll">
          <Link href="/portal/dashboard" className="logo font-alt">
            <Image
              src="/Coachlogo.svg"
              alt="Coach Katy"
              width={176}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="inner-nav desktop-nav">
          <ul className="clearlist local-scroll">
            <li>
              <Link href="/portal/dashboard" className="mn-has-sub active">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/portal/sessions" className="mn-has-sub">
                Sessions
              </Link>
            </li>
            <li>
              <Link href="/portal/resources" className="mn-has-sub">
                Resources
              </Link>
            </li>
            {!clientData.intakeCompleted && (
              <li>
                <Link href="/portal/intake" className="mn-has-sub">
                  Intake Form
                </Link>
              </li>
            )}
            <li>
              <button
                onClick={() => signOut({ callbackUrl: '/portal/login' })}
                className="btn btn-mod btn-small btn-border btn-circle"
                style={{ marginLeft: '20px' }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
