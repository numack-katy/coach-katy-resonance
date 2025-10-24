import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import { brutalistMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title: "Neurodivergent Life Coach in Johnson City, Tennessee | Coach Katy",
  description: "Autistic life coach serving Johnson City, Kingsport, Bristol, and the Tri-Cities area of Tennessee. Neurodivergent-affirming coaching for autistic and ADHD adults in East Tennessee.",
  alternates: {
    canonical: 'https://coachkaty.help/johnson-city-tennessee-coaching',
  },
  openGraph: {
    title: "Neurodivergent Life Coach in Johnson City, Tennessee | Coach Katy",
    description: "Autistic life coach serving Johnson City, Kingsport, Bristol, and the Tri-Cities area of Tennessee. Neurodivergent-affirming coaching for autistic and ADHD adults in East Tennessee.",
    url: "https://coachkaty.help/johnson-city-tennessee-coaching",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Coach Katy - Neurodivergent Life Coach serving Johnson City, TN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurodivergent Life Coach in Johnson City, Tennessee | Coach Katy",
    description: "Autistic life coach serving Johnson City, Kingsport, Bristol, and the Tri-Cities area of Tennessee. Neurodivergent-affirming coaching for autistic and ADHD adults in East Tennessee.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};

export default function JohnsonCityTennesseePage() {
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
                      <AnimatedText text="Neurodivergent Coaching in Johnson City, Tennessee" />
                    </span>
                  </h1>
                </div>
              </ParallaxContainer>

              {/* Main Content */}
              <section className="page-section bg-dark-1 light-content">
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <h2 className="section-title-large font-alt uppercase mb-60 mb-md-50 mb-sm-30 wow fadeInUp">
                        Life Coaching for Neurodivergent Adults in East Tennessee
                      </h2>

                      <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-descr-large mb-40" style={{color: '#f9f5f0'}}>
                          Based in Johnson City, I provide neurodivergent-affirming life coaching to autistic and ADHD adults throughout the Tri-Cities area, including Kingsport, Bristol, and the broader East Tennessee region.
                        </p>

                        <p className="section-descr-large mb-40" style={{color: '#f9f5f0'}}>
                          As a late-diagnosed autistic coach with a background in social work, I understand the unique challenges of navigating neurodivergent life in our region. My coaching approach is grounded in lived experience, not just theory.
                        </p>

                        <h3 className="section-title font-alt uppercase mb-40 mt-60" style={{fontSize: '32px'}}>
                          Serving the Tri-Cities & Beyond
                        </h3>

                        <p className="section-descr-large mb-40" style={{color: '#f9f5f0'}}>
                          While I'm based in Johnson City, Tennessee, all coaching sessions are conducted online, making my services accessible to clients throughout:
                        </p>

                        <ul className="section-features font-alt clearlist uppercase mb-60" style={{color: '#f9f5f0'}}>
                          <li>Johnson City, TN</li>
                          <li>Kingsport, TN</li>
                          <li>Bristol, TN/VA</li>
                          <li>Tri-Cities Area</li>
                          <li>East Tennessee</li>
                          <li>Anywhere with internet</li>
                        </ul>

                        <h3 className="section-title font-alt uppercase mb-40" style={{fontSize: '32px'}}>
                          What I Offer
                        </h3>

                        <p className="section-descr-large mb-40" style={{color: '#f9f5f0'}}>
                          One-on-one coaching that's collaborative, affirming, and shaped around your real life. Whether you're newly diagnosed, seeking support for daily living, or working through life transitions, I provide peer-to-peer support rooted in authentic understanding of neurodivergent experience.
                        </p>

                        <div className="mt-60 text-center">
                          <Link
                            href="/contact"
                            className="btn btn-mod btn-large btn-w btn-hover-anim"
                          >
                            <span>Schedule Your Free Consultation</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visual Divider */}
              <div className="position-relative" style={{backgroundColor: '#1a1a1e', padding: '30px 0'}}>
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

              {/* Quick Links */}
              <section className="page-section bg-dark-1 light-content">
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="services-2-item h-100 text-center">
                        <div className="services-2-icon" style={{color: '#ffe066'}}>
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <h3 className="services-2-title mb-30">Learn More About Me</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: '30px'}}>
                          Read my story and how I approach coaching
                        </p>
                        <Link href="/about" className="link-hover-anim" data-link-animate="y">
                          <span className="link-strong link-strong-unhovered" style={{color: '#ffe066'}}>About Me</span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="services-2-item h-100 text-center">
                        <div className="services-2-icon" style={{color: '#ffe066'}}>
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <h3 className="services-2-title mb-30">Coaching Services</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: '30px'}}>
                          Explore what coaching looks like
                        </p>
                        <Link href="/services" className="link-hover-anim" data-link-animate="y">
                          <span className="link-strong link-strong-unhovered" style={{color: '#ffe066'}}>View Services</span>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="services-2-item h-100 text-center">
                        <div className="services-2-icon" style={{color: '#ffe066'}}>
                          <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                        </div>
                        <h3 className="services-2-title mb-30">Pricing Options</h3>
                        <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: '30px'}}>
                          Transparent, accessible pricing
                        </p>
                        <Link href="/pricing" className="link-hover-anim" data-link-animate="y">
                          <span className="link-strong link-strong-unhovered" style={{color: '#ffe066'}}>View Pricing</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="page-section footer-2 bg-dark-1 light-content">
              <Footer3 />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
