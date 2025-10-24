'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PortalLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError(result.error)
      } else {
        router.push('/portal/dashboard')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="theme-brutalist">
      <div className="page" id="top">
        {/* Navigation */}
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
        <div className="main-nav-sub full-wrapper">
          <div className="nav-logo-wrap local-scroll">
            <a href="/" className="logo font-alt">
              <Image
                src="/Coachlogo.svg"
                alt="Coach Katy"
                width={176}
                height={50}
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main">
        <section className="page-section bg-dark-1 light-content" style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                {/* Header */}
                <div className="text-center mb-60 mb-sm-40">
                  <h1 className="hs-title-2 font-alt uppercase mb-20">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      Client Portal
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
                    Welcome back! Sign in to access your coaching dashboard.
                  </p>
                </div>

                {/* Login Form */}
                <div className="contact-form">
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

                  <form onSubmit={handleSubmit} className="form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="email" style={{ color: '#f9f5f0' }}>Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="input-lg round form-control"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="password" style={{ color: '#f9f5f0' }}>Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="input-lg round form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="submit_btn btn btn-mod btn-color btn-large btn-round btn-full"
                          disabled={loading}
                        >
                          {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="text-center mt-30">
                    <p style={{ color: '#a0a0a0' }}>
                      Need help? Contact your coach directly.
                    </p>
                  </div>
                </div>
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
