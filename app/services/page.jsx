import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Link from "next/link";

const onePage = false;
const dark = true;
import { brutalistMultipageDark } from "@/data/menu";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "ADHD & Autism Coaching Services for Adults | Coach Katy",
  description:
    "Individual coaching for neurodivergent adults navigating burnout, identity shifts & authentic living. 1:1 sessions, group programs, and peer support.",
  openGraph: {
    title: "ADHD & Autism Coaching Services for Adults | Coach Katy",
    description: "Individual coaching for neurodivergent adults navigating burnout, identity shifts & authentic living. 1:1 sessions, group programs, and peer support.",
    url: "https://coachkaty.help/brutalist-services-dark",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Coach Katy Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHD & Autism Coaching Services for Adults | Coach Katy",
    description: "Individual coaching for neurodivergent adults navigating burnout, identity shifts & authentic living. 1:1 sessions, group programs, and peer support.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};
export default function BrutalistServicesPageDark() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header3 links={brutalistMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="page-section parallax-5 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-20 pt-sm-40">
                  <h1 className="hs-title-2 font-alt uppercase mb-0">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      <AnimatedText text="Neurodivergent Coaching Services Tailored to You" />
                    </span>
                    <span
                      className="section-title-image wow fadeScaleIn"
                      data-wow-delay="0.3s"
                    >
                      <Image
                        src="/assets/images/demo-brutalist/shape-2.svg"
                        alt=""
                        width={35}
                        height={35}
                      />
                    </span>
                  </h1>
                </div>
              </ParallaxContainer>
              {/* Services Cards Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="services"
              >
                <div className="container position-relative">
                  {/* Floating Accent */}
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: '5%',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <Image
                      src="/Spark 58.svg"
                      width={60}
                      height={60}
                      alt=""
                      style={{
                        opacity: 0.12,
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)'
                      }}
                    />
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-50 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="services-2-item h-100 d-flex flex-column" style={{backgroundColor: 'rgba(119, 89, 159, 0.15)', border: '1px solid rgba(119, 89, 159, 0.3)'}}>
                        <div className="services-2-icon" style={{color: '#ffe066'}}>
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <h3 className="services-2-title mb-30">Free Consult Call</h3>
                        <div className="services-2-text flex-grow-1 mb-30" style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0'}}>
                          I offer a free 30-minute consult for all new clients. It's a chance for us to see if we click, talk about what's bringing you to coaching, and decide if moving forward feels right. There's no pressure to book after the call—just an open conversation to see what you need.
                        </div>
                        <div className="services-2-link">
                          <Link href="/booking" className="link-hover-anim" data-link-animate="y">
                            <span className="link-strong link-strong-unhovered">Get Started</span>
                            <span className="link-strong link-strong-hovered">Get Started</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="services-2-item h-100 d-flex flex-column" style={{backgroundColor: 'rgba(119, 89, 159, 0.15)', border: '1px solid rgba(119, 89, 159, 0.3)'}}>
                        <div className="services-2-icon" style={{color: '#ffe066'}}>
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <h3 className="services-2-title mb-30">Equity Pricing</h3>
                        <div className="services-2-text flex-grow-1 mb-30" style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0'}}>
                          I believe neurodivergent coaching should be accessible to everyone. I offer sliding-scale pricing and flexible package options to fit different needs and budgets. Whether you're looking for a single session or ongoing support, we'll find something that works for you. My goal is to make autistic and ADHD coaching sustainable—not exclusive. Learn more about my pricing structure and find the right fit for your situation.
                        </div>
                        <div className="services-2-link">
                          <Link href="/pricing" className="link-hover-anim" data-link-animate="y">
                            <span className="link-strong link-strong-unhovered">View Pricing</span>
                            <span className="link-strong link-strong-hovered">View Pricing</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visual Divider */}
              <div className="position-relative" style={{backgroundColor: dark ? '#1a1a1e' : '#f5f5f5', padding: '30px 0'}}>
                <div className="container text-center">
                  <Image
                    src="/Brutalist 21.svg"
                    width={50}
                    height={85}
                    alt=""
                    style={{opacity: 0.3, filter: 'invert(64%) sepia(28%) saturate(1073%) hue-rotate(260deg) brightness(90%) contrast(87%)'}}
                  />
                </div>
              </div>

              {/* How This Works Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                } `}
              >
                <div className="container position-relative">
                  {/* Floating Accent - How This Works */}
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    left: '4%',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <Image
                      src="/Star 152.svg"
                      width={55}
                      height={55}
                      alt=""
                      style={{
                        opacity: 0.2,
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)'
                      }}
                    />
                  </div>

                  <div className="row mb-80 mb-md-50">
                    <div className="col-12 text-center">
                      <h2 className="section-title-large font-alt uppercase mb-0">
                        <span className="wow charsAnimInLong" data-splitting="chars">
                          <AnimatedText text="How This Works" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="services-2-item wow fadeInUp">
                        <ol style={{listStyle: 'none', padding: 0, margin: 0}}>
                          <li className="d-flex align-items-start mb-30" style={{gap: '20px'}}>
                            <span style={{
                              backgroundColor: '#77599f',
                              color: '#f9f5f0',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                              flexShrink: 0,
                              fontSize: '18px'
                            }}>1</span>
                            <span style={{fontSize: '18px', lineHeight: '1.7', color: '#f9f5f0', paddingTop: '8px'}}>
                              Book a free consultation
                            </span>
                          </li>

                          <li className="d-flex align-items-start mb-30" style={{gap: '20px'}}>
                            <span style={{
                              backgroundColor: '#77599f',
                              color: '#f9f5f0',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                              flexShrink: 0,
                              fontSize: '18px'
                            }}>2</span>
                            <span style={{fontSize: '18px', lineHeight: '1.7', color: '#f9f5f0', paddingTop: '8px'}}>
                              Sign your coaching agreement and confirm payment
                            </span>
                          </li>

                          <li className="d-flex align-items-start mb-40" style={{gap: '20px'}}>
                            <span style={{
                              backgroundColor: '#77599f',
                              color: '#f9f5f0',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                              flexShrink: 0,
                              fontSize: '18px'
                            }}>3</span>
                            <span style={{fontSize: '18px', lineHeight: '1.7', color: '#f9f5f0', paddingTop: '8px'}}>
                              Meet online through Google Meet
                            </span>
                          </li>
                        </ol>

                        <p style={{fontSize: '18px', fontStyle: 'italic', color: '#f9f5f0', marginBottom: 0}}>
                          That's it. Simple and clear, so you can focus on what matters to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
              >
                <div className="container position-relative">
                  {/* Floating Accent - FAQ */}
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    right: '6%',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <Image
                      src="/Brutalist 59.svg"
                      width={55}
                      height={55}
                      alt=""
                      style={{
                        opacity: 0.1,
                        filter: 'invert(64%) sepia(28%) saturate(1073%) hue-rotate(260deg) brightness(90%) contrast(87%)'
                      }}
                    />
                  </div>

                  <div className="row mb-80 mb-md-50">
                    <div className="col-12 text-center">
                      <h2 className="section-title-large font-alt uppercase mb-0">
                        <span className="wow charsAnimInLong" data-splitting="chars">
                          <AnimatedText text="Frequently Asked Questions" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="services-2-item mb-30 wow fadeInUp" data-wow-delay="0.1s">
                        <h3 className="services-2-title mb-20">How long are sessions?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          Sessions are 60 minutes, which gives us plenty of time to dig into what's going on without feeling rushed.
                        </p>
                      </div>

                      <div className="services-2-item mb-30 wow fadeInUp" data-wow-delay="0.15s">
                        <h3 className="services-2-title mb-20">Do you take insurance?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          No, I don't take insurance. Coaching isn't a covered benefit, and honestly, insurance companies get way too involved in your care. This way, what we talk about stays between us.
                        </p>
                      </div>

                      <div className="services-2-item mb-30 wow fadeInUp" data-wow-delay="0.2s">
                        <h3 className="services-2-title mb-20">Is this therapy or coaching?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          This is coaching. Yes, I have a background in therapy, but coaching is different – it's more about moving forward than processing the past. If you need therapy, I'll help you find someone great.
                        </p>
                      </div>

                      <div className="services-2-item mb-30 wow fadeInUp" data-wow-delay="0.25s">
                        <h3 className="services-2-title mb-20">What's the difference between packages?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          Longer packages give you more time to create real change and cost less per session. Single sessions are perfect for specific issues, while 6-8 session packages let us really dig in and build momentum.
                        </p>
                      </div>

                      <div className="services-2-item mb-30 wow fadeInUp" data-wow-delay="0.3s">
                        <h3 className="services-2-title mb-20">Do you work with [specific conditions/ages]?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          I work with neurodivergent adults who want to build a life that actually works for their brain. If you're not sure if we're a good fit, we can talk about it during the free consult. I do not see anyone under 18.
                        </p>
                      </div>

                      <div className="services-2-item mb-30 wow fadeInUp" data-wow-delay="0.35s">
                        <h3 className="services-2-title mb-20">Is this virtual or in-person?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          All sessions take place virtually.
                        </p>
                      </div>

                      <div className="services-2-item mb-30 wow fadeInUp" data-wow-delay="0.4s">
                        <h3 className="services-2-title mb-20">How do I know if coaching is right for me?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          Book the free consult. We'll talk about what's going on and whether coaching makes sense for your situation. No obligation beyond that.
                        </p>
                      </div>

                      <div className="services-2-item wow fadeInUp" data-wow-delay="0.45s">
                        <h3 className="services-2-title mb-20">What happens in the first session?</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                          We'll talk about what brought you to coaching, what you want to be different, and start figuring out what's actually getting in your way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Started CTA */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                } `}
                style={{position: 'relative', overflow: 'hidden'}}
              >
                {/* Watermark Background */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.06,
                  pointerEvents: 'none',
                  zIndex: 0
                }}>
                  <Image
                    src="/Spark 58.svg"
                    width={250}
                    height={250}
                    alt=""
                  />
                </div>

                <div className="container position-relative" style={{zIndex: 1}}>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="services-2-item wow fadeInUp">
                        <h2 className="section-title-large font-alt uppercase mb-40">
                          <AnimatedText text="Get Started" />
                        </h2>
                        <p className="section-descr-large mb-50" style={{color: '#f9f5f0'}}>
                          Ready to work together? Book your free consultation or reach out with any questions.
                        </p>
                        <div>
                          <Link
                            href="/booking"
                            className="btn btn-mod btn-large btn-w btn-hover-anim"
                          >
                            <span>Book Your Free Consultation</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="page-section footer-1 bg-dark-2 light-content">
              <Footer3 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
