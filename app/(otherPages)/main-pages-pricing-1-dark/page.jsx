import Footer3 from "@/components/footers/Footer3";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header3 from "@/components/headers/Header3";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";
import { brutalistMultipageDark } from "@/data/menu";

const dark = true;

export const metadata = {
  title:
    "Equity Pricing - Coach Katy | Accessible Coaching Rates",
  description:
    "Coaching shouldn't be out of reach. Choose from tiered pricing options based on your financial situation. Neurodivergent affirming coaching that fits your budget.",
  openGraph: {
    title: "Equity Pricing - Coach Katy | Accessible Coaching Rates",
    description: "Coaching shouldn't be out of reach. Choose from tiered pricing options based on your financial situation. Neurodivergent affirming coaching that fits your budget.",
    url: "https://coachkaty.help/main-pages-pricing-1-dark",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Coach Katy Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity Pricing - Coach Katy | Accessible Coaching Rates",
    description: "Coaching shouldn't be out of reach. Choose from tiered pricing options based on your financial situation. Neurodivergent affirming coaching that fits your budget.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};
export default function MainAboutPage1Dark() {
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
                  <h1 className="hs-title-2 font-alt uppercase mb-30 mb-sm-20">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      <AnimatedText text="Equity Pricing" />
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
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <p className="hs-paragraph-1 wow fadeInUp text-center" data-wow-delay="0.3s" style={{color: '#f9f5f0', fontSize: '20px'}}>
                        transparent, up front and accessible
                      </p>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>

              {/* Pricing Philosophy */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
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
                      width={55}
                      height={55}
                      alt=""
                      style={{
                        opacity: 0.12,
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)'
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="services-2-item wow fadeInUp">
                        <div style={{fontSize: '18px', lineHeight: '1.8', color: '#f9f5f0'}}>
                          <p className="mb-30">
                            I use an <span style={{color: '#ffe066', fontWeight: '500'}}>honor-system approach</span> to pricing because I recognize the financial barriers many neurodivergent adults face. With unemployment and underemployment rates around 80% in our community, traditional pricing models simply don't work for everyone.
                          </p>
                          <p className="mb-0">
                            This sliding scale isn't charity—it's a recognition of <span style={{color: '#c476c1', fontWeight: '500'}}>systemic inequities</span> and a commitment to making neurodivergent-affirming coaching accessible regardless of financial status. Choose the tier that feels sustainable for you, and know that your choice helps keep this work equitable and community-minded.
                          </p>
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

              {/* How This Works */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                } `}
              >
                <div className="container position-relative">
                  {/* Floating Accent */}
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    left: '4%',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <Image
                      src="/Star 152.svg"
                      width={50}
                      height={50}
                      alt=""
                      style={{
                        opacity: 0.15,
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
                        <div style={{fontSize: '18px', lineHeight: '1.8', color: '#f9f5f0'}}>
                          <p className="mb-30">
                            <strong style={{color: '#ffe066'}}>Choose your tier:</strong> Pick the pricing level that feels sustainable for your current financial situation.
                          </p>
                          <p className="mb-30">
                            <strong style={{color: '#ffe066'}}>Select your package:</strong> Longer packages offer better value and allow for deeper work, but single sessions are available if that's what works for you.
                          </p>
                          <p className="mb-0">
                            <strong style={{color: '#ffe066'}}>Book your free consultation:</strong> We'll confirm the pricing and package that feels right before moving forward.
                          </p>
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

              {/* Pricing Tiers */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
              >
                <div className="container position-relative">
                  {/* Floating Accent */}
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    right: '3%',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <Image
                      src="/Spark 58.svg"
                      width={60}
                      height={60}
                      alt=""
                      style={{
                        opacity: 0.1,
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)'
                      }}
                    />
                  </div>
                  {/* Pricing Tier Cards */}
                  <div className="row">
                    {/* Full Price Tier */}
                    <div className="col-lg-4 mb-50 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="services-2-item h-100">
                        <h3 className="services-2-title mb-30" style={{color: '#ffe066'}}>Full Price Tier</h3>
                        <p style={{fontSize: '16px', lineHeight: '1.6', color: '#f9f5f0', marginBottom: '30px'}}>
                          For people with steady income with financial cushion. Can afford vacations and self-improvement. Paying full price feels aligned with your values.
                        </p>
                        <div style={{borderTop: '2px solid #77599f', paddingTop: '20px'}}>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>Single Session</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$100</span>
                          </div>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>4 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$350</span>
                          </div>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>6 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$510</span>
                          </div>
                          <div className="d-flex justify-content-between" style={{color: '#f9f5f0'}}>
                            <span>8 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$660</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle Tier - Highlighted */}
                    <div className="col-lg-4 mb-50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="services-2-item h-100" style={{border: '4px solid #77599f'}}>
                        <h3 className="services-2-title mb-30" style={{color: '#c476c1'}}>Middle Tier</h3>
                        <p style={{fontSize: '16px', lineHeight: '1.6', color: '#f9f5f0', marginBottom: '30px'}}>
                          For people who can meet basic needs, but extras feel tight. Bills are covered, but discretionary spending is limited. Financially stable but cautious.
                        </p>
                        <div style={{borderTop: '2px solid #c476c1', paddingTop: '20px'}}>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>Single Session</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#c476c1'}}>$75</span>
                          </div>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>4 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#c476c1'}}>$275</span>
                          </div>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>6 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#c476c1'}}>$390</span>
                          </div>
                          <div className="d-flex justify-content-between" style={{color: '#f9f5f0'}}>
                            <span>8 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#c476c1'}}>$500</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Supported Tier */}
                    <div className="col-lg-4 mb-50 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="services-2-item h-100">
                        <h3 className="services-2-title mb-30" style={{color: '#ffe066'}}>Supported Tier</h3>
                        <p style={{fontSize: '16px', lineHeight: '1.6', color: '#f9f5f0', marginBottom: '30px'}}>
                          For people covering essentials with financial stress. Living paycheck to paycheck or close to it. Growth investment feels risky but necessary.
                        </p>
                        <div style={{borderTop: '2px solid #77599f', paddingTop: '20px'}}>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>Single Session</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$50</span>
                          </div>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>4 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$200</span>
                          </div>
                          <div className="d-flex justify-content-between mb-20" style={{color: '#f9f5f0'}}>
                            <span>6 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$285</span>
                          </div>
                          <div className="d-flex justify-content-between" style={{color: '#f9f5f0'}}>
                            <span>8 Sessions</span>
                            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ffe066'}}>$360</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Free Consultation CTA */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                } `}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="services-2-item wow fadeInUp" style={{backgroundColor: '#77599f', position: 'relative', overflow: 'hidden'}}>
                        {/* Watermark */}
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 0,
                          pointerEvents: 'none'
                        }}>
                          <Image
                            src="/Spark 58.svg"
                            width={200}
                            height={200}
                            alt=""
                            style={{
                              opacity: 0.08,
                              filter: 'brightness(0) invert(1)'
                            }}
                          />
                        </div>
                        <h2 className="section-title-large font-alt uppercase mb-40" style={{position: 'relative', zIndex: 1}}>
                          <AnimatedText text="Free 30-Minute Consultation" />
                        </h2>
                        <p className="section-descr-large mb-50" style={{color: '#f9f5f0', position: 'relative', zIndex: 1}}>
                          Every client starts with a free consultation. We'll discuss what brings you to coaching, see if we're a good fit, and determine which pricing tier and package works best for you.
                        </p>
                        <div style={{position: 'relative', zIndex: 1}}>
                          <Link
                            href="/brutalist-booking-dark"
                            className="btn btn-mod btn-large btn-w btn-hover-anim"
                          >
                            <span>Book Free Consultation</span>
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

              {/* Get Started Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
              >
                <div className="container position-relative">
                  {/* Floating Accent */}
                  <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '6%',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <Image
                      src="/Star 152.svg"
                      width={45}
                      height={45}
                      alt=""
                      style={{
                        opacity: 0.15,
                        filter: 'invert(64%) sepia(28%) saturate(1073%) hue-rotate(260deg) brightness(90%) contrast(87%)'
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="services-2-item wow fadeInUp">
                        <h2 className="section-title-large font-alt uppercase mb-40">
                          <AnimatedText text="Ready to Get Started?" />
                        </h2>
                        <p className="section-descr-large mb-50" style={{color: '#f9f5f0'}}>
                          Questions about pricing or ready to book? Reach out and let's talk.
                        </p>
                        <div>
                          <Link
                            href="/brutalist-contact-dark"
                            className="btn btn-mod btn-large btn-w btn-hover-anim"
                          >
                            <span>Contact Me</span>
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
          </div>
        </div>
      </div>
    </>
  );
}
