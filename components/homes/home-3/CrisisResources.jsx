import React from "react";
import Image from "next/image";

export default function CrisisResources() {
  return (
    <section className="page-section bg-dark-1 light-content" id="crisis-resources">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {/* Header */}
            <div className="text-center mb-60 mb-sm-40">
              <h2 className="section-title font-alt uppercase mb-30" style={{ fontSize: '32px' }}>
                Crisis Resources & Immediate Help
                <span className="section-title-image ms-3">
                  <Image
                    src="/assets/images/demo-brutalist/shape-2.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </span>
              </h2>
            </div>

            {/* Important Notice */}
            <div className="mb-50" style={{
              padding: '30px',
              border: '3px solid #77599f',
              backgroundColor: 'rgba(119, 89, 159, 0.1)',
              borderRadius: '4px'
            }}>
              <p className="text-lg mb-0" style={{ color: '#f9f5f0', lineHeight: '1.6' }}>
                <strong>Coaching isn't a substitute for emergency or clinical care.</strong> If you're in immediate danger or think you might harm yourself or someone else, <strong>call 911</strong>.
              </p>
            </div>

            {/* Crisis Resources Grid */}
            <div className="row mb-50">
              {/* 988 Suicide & Crisis Lifeline */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    988 Suicide & Crisis Lifeline
                  </h3>
                  <p className="mb-15" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    <strong>Call or text:</strong> <a href="tel:988" className="link-hover-anim" style={{ color: '#77599f' }}>988</a><br />
                    <strong>Chat:</strong> <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>988lifeline.org</a><br />
                    <strong>Veterans:</strong> Call 988 then press 1<br />
                    (or text <a href="sms:838255" className="link-hover-anim" style={{ color: '#77599f' }}>838255</a>)
                  </p>
                  <div className="small" style={{ color: '#f9f5f0', opacity: 0.7 }}>
                    Available 24/7
                  </div>
                </div>
              </div>

              {/* Crisis Text Line */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    Crisis Text Line
                  </h3>
                  <p className="mb-15" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    <strong>Text:</strong> HOME to <a href="sms:741741?body=HOME" className="link-hover-anim" style={{ color: '#77599f' }}>741741</a>
                  </p>
                  <p className="small mb-0" style={{ color: '#f9f5f0', opacity: 0.8 }}>
                    Reach a trained crisis counselor
                  </p>
                  <div className="small mt-2" style={{ color: '#f9f5f0', opacity: 0.7 }}>
                    Available 24/7
                  </div>
                </div>
              </div>

              {/* Domestic Violence */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    National Domestic Violence Hotline
                  </h3>
                  <p className="mb-0" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    <strong>Call:</strong> <a href="tel:18007997233" className="link-hover-anim" style={{ color: '#77599f' }}>800-799-SAFE (7233)</a><br />
                    <strong>Text:</strong> START to <a href="sms:88788?body=START" className="link-hover-anim" style={{ color: '#77599f' }}>88788</a><br />
                    <strong>Chat:</strong> <a href="https://thehotline.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>thehotline.org</a>
                  </p>
                  <div className="small mt-2" style={{ color: '#f9f5f0', opacity: 0.7 }}>
                    Available 24/7
                  </div>
                </div>
              </div>

              {/* RAINN */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    RAINN: Sexual Assault Hotline
                  </h3>
                  <p className="mb-0" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    <strong>Call:</strong> <a href="tel:18006564673" className="link-hover-anim" style={{ color: '#77599f' }}>800-656-HOPE (4673)</a><br />
                    <strong>Chat:</strong> <a href="https://hotline.rainn.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>hotline.rainn.org</a><br />
                    <strong>Text:</strong> HOPE to <a href="sms:64673?body=HOPE" className="link-hover-anim" style={{ color: '#77599f' }}>64673</a>
                  </p>
                  <div className="small mt-2" style={{ color: '#f9f5f0', opacity: 0.7 }}>
                    Available 24/7
                  </div>
                </div>
              </div>

              {/* Trevor Project */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    The Trevor Project (LGBTQ+ Youth)
                  </h3>
                  <p className="mb-0" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    <strong>Call:</strong> <a href="tel:18664887386" className="link-hover-anim" style={{ color: '#77599f' }}>1-866-488-7386</a><br />
                    <strong>Text:</strong> START to <a href="sms:678678?body=START" className="link-hover-anim" style={{ color: '#77599f' }}>678678</a><br />
                    <strong>Chat:</strong> <a href="https://thetrevorproject.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>thetrevorproject.org</a>
                  </p>
                  <div className="small mt-2" style={{ color: '#f9f5f0', opacity: 0.7 }}>
                    Available 24/7
                  </div>
                </div>
              </div>

              {/* Trans Lifeline */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    Trans Lifeline
                  </h3>
                  <p className="mb-15" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    Peer support by and for trans people<br />
                    <strong>Call:</strong> <a href="tel:18775658860" className="link-hover-anim" style={{ color: '#77599f' }}>877-565-8860</a> (U.S.)
                  </p>
                  <p className="small mb-0" style={{ color: '#f9f5f0', opacity: 0.8 }}>
                    Hours posted on <a href="https://translifeline.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>translifeline.org</a>
                  </p>
                </div>
              </div>

              {/* SAMHSA */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    SAMHSA National Helpline
                  </h3>
                  <p className="mb-15" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    Treatment referrals for mental health & substance use<br />
                    <strong>Call:</strong> <a href="tel:18006624357" className="link-hover-anim" style={{ color: '#77599f' }}>1-800-662-HELP (4357)</a>
                  </p>
                  <p className="small mb-0" style={{ color: '#f9f5f0', opacity: 0.8 }}>
                    Visit <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>findtreatment.gov</a> to search for providers
                  </p>
                  <div className="small mt-2" style={{ color: '#f9f5f0', opacity: 0.7 }}>
                    Available 24/7
                  </div>
                </div>
              </div>

              {/* NAMI */}
              <div className="col-md-6 mb-40">
                <div className="services-2-item" style={{
                  border: '2px solid rgba(249, 245, 240, 0.2)',
                  padding: '30px',
                  height: '100%'
                }}>
                  <h3 className="services-2-title font-alt mb-20" style={{ color: '#77599f', fontSize: '20px' }}>
                    NAMI Helpline
                  </h3>
                  <p className="mb-15" style={{ color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6' }}>
                    Information, resources, and mental health support<br />
                    <strong>Call:</strong> <a href="tel:18009506264" className="link-hover-anim" style={{ color: '#77599f' }}>1-800-950-NAMI (6264)</a>
                  </p>
                  <p className="small mb-0" style={{ color: '#f9f5f0', opacity: 0.8 }}>
                    M-F 10am-10pm ET • Visit <a href="https://nami.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>nami.org</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="row">
              <div className="col-12">
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(249, 245, 240, 0.05)',
                  borderRadius: '4px'
                }}>
                  <p className="mb-20" style={{ color: '#f9f5f0', fontSize: '15px', lineHeight: '1.7' }}>
                    <strong>Language Support:</strong> Many of these services offer language interpretation support.
                  </p>
                  <p className="mb-20" style={{ color: '#f9f5f0', fontSize: '15px', lineHeight: '1.7' }}>
                    <strong>Non-Crisis Support:</strong> Warmlines offer peer support when you need to talk but aren't in crisis. Visit <a href="https://nami.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>nami.org</a> or <a href="https://mhanational.org" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>mhanational.org</a> for state-by-state warmline directories.
                  </p>
                  <p className="mb-20" style={{ color: '#f9f5f0', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic' }}>
                    <strong>Note:</strong> As of July 2025, 988's LGBTQ-specific routing was discontinued; LGBTQ+-focused crisis support remains available via The Trevor Project and Trans Lifeline.
                  </p>
                  <p className="mb-0" style={{ color: '#f9f5f0', fontSize: '15px', lineHeight: '1.7' }}>
                    <strong>Outside the U.S.?</strong> Please check local emergency numbers and crisis lines. Visit <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="link-hover-anim" style={{ color: '#77599f' }}>findahelpline.com</a> for an international directory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
