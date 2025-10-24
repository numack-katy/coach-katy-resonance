import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";

const onePage = false;
const dark = true;
import { brutalistMultipageDark } from "@/data/menu";

import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Script from "next/script";

export const metadata = {
  title:
    "Contact - Coach Katy | Get In Touch",
  description:
    "Ready to start your neurodivergent coaching journey? Contact Coach Katy for personalized support. I typically respond within 24-48 hours.",
  alternates: {
    canonical: 'https://coachkaty.help/contact',
  },
  openGraph: {
    title: "Contact - Coach Katy | Get In Touch",
    description: "Ready to start your neurodivergent coaching journey? Contact Coach Katy for personalized support. I typically respond within 24-48 hours.",
    url: "https://coachkaty.help/contact",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Coach Katy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Coach Katy | Get In Touch",
    description: "Ready to start your neurodivergent coaching journey? Contact Coach Katy for personalized support. I typically respond within 24-48 hours.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};

export default function BrutalistContactPageDark() {
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
                      <AnimatedText text="Get In Touch" />
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

              {/* Intro Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
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
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)',
                        animation: 'floatSlow 8s ease-in-out infinite'
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="services-2-item wow fadeInUp">
                        <p className="section-descr-large mb-0" style={{color: '#f9f5f0'}}>
                          Need to talk? Have questions? I welcome all questions especially if they make you feel more comfortable. Contact me below.
                        </p>
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

              {/* Contact Form */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                }`}
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
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)',
                        animation: 'float 6s ease-in-out infinite'
                      }}
                    />
                  </div>
                  <div className="row mb-60 mb-md-40">
                    <div className="col-12 text-center">
                      <h2 className="section-title-large font-alt uppercase mb-0">
                        <span className="wow charsAnimInLong" data-splitting="chars">
                          <AnimatedText text="Send Me a Message" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="services-2-item wow fadeInUp" style={{
                        backgroundColor: '#f9f5f0',
                        border: '2px solid #77599f',
                        padding: '40px',
                        borderRadius: '4px'
                      }}>
                        <iframe
                          data-tally-src="https://tally.so/embed/w2QrpL?alignLeft=1&hideTitle=1&transparentBackground=0&dynamicHeight=1"
                          loading="lazy"
                          width="100%"
                          height="313"
                          frameBorder="0"
                          marginHeight="0"
                          marginWidth="0"
                          title="Contact form"
                          style={{border: 'none'}}
                        />
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

              {/* Other Ways to Connect */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
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
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)',
                        animation: 'floatSlow 7s ease-in-out infinite'
                      }}
                    />
                  </div>
                  <div className="row mb-80 mb-md-50">
                    <div className="col-12 text-center">
                      <h2 className="section-title-large font-alt uppercase mb-0">
                        <span className="wow charsAnimInLong" data-splitting="chars">
                          <AnimatedText text="Other Ways to Connect" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="row">
                    {/* Email Me */}
                    <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="services-2-item h-100 text-center">
                        <div className="services-2-icon" style={{color: '#ffe066'}}>
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <h3 className="services-2-title mb-30">Email Me</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: '30px'}}>
                          Prefer email? Reach out anytime—I'll get back to you within 24–48 hours.
                        </p>
                        <a
                          href="mailto:katy@coachkaty.help"
                          className="link-hover-anim"
                          data-link-animate="y"
                          style={{fontSize: '18px', fontWeight: '500', color: '#ffe066', wordBreak: 'break-all'}}
                        >
                          katy@coachkaty.help
                        </a>
                      </div>
                    </div>

                    {/* Book Directly */}
                    <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="services-2-item h-100 text-center" style={{backgroundColor: '#77599f', position: 'relative', overflow: 'hidden'}}>
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
                            width={150}
                            height={150}
                            alt=""
                            style={{
                              opacity: 0.08,
                              filter: 'brightness(0) invert(1)'
                            }}
                          />
                        </div>
                        <div className="services-2-icon" style={{color: '#ffe066'}}>
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <h3 className="services-2-title mb-30" style={{position: 'relative', zIndex: 1}}>Book Directly</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: '30px', position: 'relative', zIndex: 1}}>
                          Ready to schedule? Book your free consultation directly.
                        </p>
                        <div style={{position: 'relative', zIndex: 1}}>
                          <Link
                            href="/brutalist-booking-dark"
                            className="btn btn-mod btn-medium btn-w btn-hover-anim"
                          >
                            <span>Book Now</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Gentle Nook Blog */}
                    <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="services-2-item h-100 text-center">
                        <div className="services-2-icon">
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <div className="mb-30 mt-20" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40px'}}>
                          <Image
                            src="/gentlenooklogo.svg"
                            width="320"
                            height="107"
                            alt="Gentle Nook"
                            style={{
                              filter: 'brightness(0) saturate(100%) invert(97%) sepia(6%) saturate(234%) hue-rotate(325deg) brightness(99%) contrast(96%)',
                              maxWidth: '100%',
                              height: 'auto'
                            }}
                          />
                        </div>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: '30px'}}>
                          My lifestyle blog for neurodivergent humans. Exploring life, community, and authentic living.
                        </p>
                        <a
                          href="https://gentlenook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-hover-anim"
                          data-link-animate="y"
                          style={{fontSize: '18px', fontWeight: '500', color: '#ffe066'}}
                        >
                          Visit Gentle Nook
                        </a>
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

      {/* Tally.so embed script */}
      <Script id="tally-js" strategy="afterInteractive">
        {`
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){
            if(typeof Tally!=="undefined"){Tally.loadEmbeds()} else { d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc}) }
          };
          if(typeof Tally!=="undefined") v();
          else if(d.querySelector('script[src="'+w+'"]')==null){ var s=d.createElement("script"); s.src=w; s.onload=v; s.onerror=v; d.body.appendChild(s); }
        `}
      </Script>
    </>
  );
}
