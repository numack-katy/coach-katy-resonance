import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
const onePage = false;
const dark = true;
import { brutalistMultipageDark } from "@/data/menu";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "About Katy - Late-Diagnosed Autistic Life Coach | Tennessee",
  description:
    "Meet Katy: late-diagnosed autistic coach who left therapy to provide neurodivergent-affirming support. Real experience, practical tools, no masking required.",
  alternates: {
    canonical: 'https://coachkaty.help/about',
  },
  openGraph: {
    title: "About Katy - Late-Diagnosed Autistic Life Coach",
    description: "Meet Katy: late-diagnosed autistic coach who left therapy to provide neurodivergent-affirming support. Real experience, practical tools, no masking required.",
    url: "https://coachkaty.help/about",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Katy Welborn - Neurodivergent Life Coach",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Katy - Late-Diagnosed Autistic Life Coach",
    description: "Meet Katy: late-diagnosed autistic coach who left therapy to provide neurodivergent-affirming support. Real experience, practical tools, no masking required.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};
export default function BrutalistAboutPageDark() {
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
                      <AnimatedText text="My Background and Story" />
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
              <section
                className={`page-section  scrollSpysection ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="about"
              >
                <div className="container position-relative">
                  {/* Floating Accent */}
                  <div style={{
                    position: 'absolute',
                    top: '40px',
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

                  {/* Two Column Layout */}
                  <div className="row">
                    {/* Photo Column */}
                    <div className="col-lg-5 mb-md-50 wow fadeInUp">
                      <div style={{position: 'sticky', top: '100px'}}>
                        <Image
                          src="/katy1.webp"
                          width={500}
                          height={600}
                          alt="Katy Welborn"
                          className="w-100"
                          style={{borderRadius: '8px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'}}
                        />
                      </div>
                    </div>

                    {/* Story Column */}
                    <div className="col-lg-7">
                      <div className="services-2-item wow fadeInUp" data-wow-delay="0.1s">
                        <div style={{fontSize: '18px', lineHeight: '1.8', color: '#f9f5f0'}}>
                          <p className="mb-30">
                            My path wasn't linear. I tried multiple majors, took breaks, worked various jobs. When my son was born, I knew I needed stability and finally completed my MSW at 32. Looking back, those false starts make perfect sense – I was an <span style={{color: '#ffe066', fontWeight: '500'}}>undiagnosed autistic person</span> trying to fit into neurotypical molds.
                          </p>

                          <p className="mb-30">
                            I spent years as a therapist working with various populations. Some of my favorites were older teens and young adults, women escaping domestic violence, LGBTQIA+ individuals, and neurodivergent people. My extensive training in <span style={{color: '#c476c1', fontWeight: '500'}}>trauma (EMDR), acceptance-based approaches (ACT), and emotional regulation (DBT)</span> taught me how to understand human struggles deeply.
                          </p>

                          {/* Special Quote Box */}
                          <div className="mb-40" style={{
                            backgroundColor: 'rgba(196, 118, 193, 0.15)',
                            border: '2px solid #c476c1',
                            borderRadius: '8px',
                            padding: '30px',
                            position: 'relative',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '-20px',
                              right: '-20px',
                              opacity: 0.1
                            }}>
                              <Image
                                src="/Spark 58.svg"
                                width={100}
                                height={100}
                                alt=""
                              />
                            </div>
                            <p className="mb-0 text-center" style={{fontSize: '24px', fontWeight: '500', color: '#ffe066', position: 'relative', zIndex: 1}}>
                              At 37, I was diagnosed as autistic. Everything clicked.
                            </p>
                          </div>

                          <p className="mb-30">
                            While I loved the clinical work, I realized the administrative demands and rigid systems weren't sustainable for my autistic brain. More importantly, I kept hearing the same thing from my neurodivergent clients: <span style={{color: '#77599f', fontWeight: '500'}}>it felt so good to finally be understood and validated</span>. Many didn't need treatment – they needed someone who got their experience without trying to fix it.
                          </p>

                          <p className="mb-30">
                            That's what pulled me toward coaching. I'm now completing my <span style={{color: '#c476c1', fontWeight: '500'}}>ICF-accredited training in neurodiversity coaching</span>, blending my lived autistic experience with professional expertise.
                          </p>

                          <p className="mb-30">
                            My coaching brings therapeutic knowledge to support without doing therapy. I'm not treating symptoms – I'm helping people build lives full of <span style={{color: '#77599f', fontWeight: '500'}}>more self-compassion</span>, honoring their true identity and stopping the burnout cycle. My approach is <span style={{color: '#ffe066', fontWeight: '500'}}>neurodivergent-affirming</span>, which means looking at things intersectionally, being flexible with traditional rules, and affirming that what you're experiencing is real, not a disorder.
                          </p>

                          <p className="mb-30">
                            Outside of coaching, <span style={{color: '#c476c1', fontWeight: '500'}}>coding and web development</span> have become my unexpected passion – there's something magical about making those little pixels actually work. It's pure self-expression and art for me, a real hobby after years of having none.
                          </p>

                          <p className="mb-0">
                            I live in organized chaos here in East Tennessee with my son and our little zoo – two cats, a dog, and a 30-gallon tank of <span style={{color: '#ffe066', fontWeight: '500'}}>hundreds of shrimp</span>, all crammed into 800 square feet. I wouldn't have it any other way. Well, maybe a bigger house.
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
              {/* End Visual Divider */}
              {/* My Values Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  {/* Floating Accent - Values */}
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
                          <AnimatedText text="My Values and How I Practice" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-50 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="services-2-item h-100">
                        <h3 className="services-2-title mb-30">Peer Approach</h3>
                        <div style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0'}}>
                          You're the expert on your own life, not me. If you say no to exploring something, I go with no – even if I think I might be right. This is peer-to-peer support, not expert-to-client instruction.
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-50 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="services-2-item h-100">
                        <h3 className="services-2-title mb-30">Self Acceptance</h3>
                        <div style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0'}}>
                          We're constantly told we're wrong, but are we? I help you separate your actual voice from the criticism you've internalized. There's usually something good about even your perceived "flaws."
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-md-50 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="services-2-item h-100">
                        <h3 className="services-2-title mb-30">Inclusivity</h3>
                        <div style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0'}}>
                          I believe we all deserve to be accepted exactly as we are. I respect pronouns, use chosen names, and welcome people from all walks of life without judgment. You won't have to perform "normal" or hide parts of yourself to work with me.
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-md-50 wow fadeInUp" data-wow-delay="0.4s">
                      <div className="services-2-item h-100">
                        <h3 className="services-2-title mb-30">Compassion</h3>
                        <div style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0'}}>
                          Self-compassion beats self-esteem every time – it's about letting yourself be human instead of perfect. I model this by being radically honest about my own screw-ups. We're all just doing our best with what we've got.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* My Vision Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  {/* Floating Accent - Vision */}
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    right: '6%',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    <Image
                      src="/Spark 58.svg"
                      width={50}
                      height={50}
                      alt=""
                      style={{
                        opacity: 0.12,
                        filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)'
                      }}
                    />
                  </div>
                  <div className="row mb-80 mb-md-50">
                    <div className="col-12 text-center">
                      <h2 className="section-title-large font-alt uppercase mb-0">
                        <span className="wow charsAnimInLong" data-splitting="chars">
                          <AnimatedText text="My Vision For Coaching & The Future" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="services-2-item mb-50 wow fadeInUp" data-wow-delay="0.1s">
                        <div style={{fontSize: '18px', lineHeight: '1.8', color: '#f9f5f0'}}>
                          <p className="mb-30">
                            I envision a world where autistic, ADHD and all neurodivergent people are taken seriously – not as broken versions of neurotypical people, but as valuable humans with different operating systems. Where autism isn't something to hide or overcome, but a normal variant in the human experience. Where folks with ADHD can let go of the shame and guilt and feel true acceptance.
                          </p>

                          <p className="mb-30">
                            Right now, people are worried about "too many" autism diagnoses instead of addressing the real crisis: suicide rates, discrimination, and lack of support. These should be public health priorities, not diagnostic statistics. We need real solutions, not more stigma.
                          </p>

                          <p className="mb-0">
                            I want to see a cultural shift away from pathology toward acceptance. Where being different isn't a disorder to fix, but a reality to accommodate. Where neurodivergent experiences are validated, not questioned. Where people are free to be authentic.
                          </p>
                        </div>
                      </div>

                      <div className="services-2-item wow fadeInUp" data-wow-delay="0.2s" style={{backgroundColor: '#77599f'}}>
                        <div style={{fontSize: '18px', lineHeight: '1.8', color: '#f9f5f0'}}>
                          <p className="mb-30">
                            For my clients, I want them to feel empowered and more in control of their lives. To stop asking "What's wrong with me?" and start asking "What do I need?" To build lives that actually fit their brains instead of constantly trying to fit into systems that weren't designed for them.
                          </p>

                          <p className="mb-0">
                            When someone finishes working with me, I want them to feel more accepting of themselves and clearer about their own needs. To know that their struggles are real, their strengths matter, and their way of being in the world is valid.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="services-2-item wow fadeInUp">
                        <h2 className="section-title-large font-alt uppercase mb-40">
                          <AnimatedText text="Ready to Start Your Journey?" />
                        </h2>
                        <p className="section-descr-large mb-50" style={{color: '#f9f5f0'}}>
                          If my story resonates with you and you're ready to build a life that works for your brain, let's talk.
                        </p>
                        <div>
                          <a
                            href="/brutalist-booking-dark"
                            className="btn btn-mod btn-large btn-w btn-hover-anim"
                          >
                            <span>Book Your Free Consultation</span>
                          </a>
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
