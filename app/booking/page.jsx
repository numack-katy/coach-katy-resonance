"use client";

import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { brutalistMultipageDark } from "@/data/menu";
import { useEffect } from "react";

const dark = true;

const timelineSteps = [
  {
    title: "30 Minute Consult Booked",
    description: "Booking sent to me for final approval but will be approved on the same day.",
    step: 1
  },
  {
    title: "We Meet",
    description: "We'll use this time to talk through what's going on for you and see if coaching feels like a good fit.",
    step: 2
  },
  {
    title: "Contract & Invoice",
    description: "If we decide to move forward, I'll send over a coaching agreement and invoice for your chosen package. No surprises and always transparent.",
    step: 3
  },
  {
    title: "Coaching Begins",
    description: "I'll get you scheduled right away and we will get to work! Expect tailored resources just for you between sessions.",
    step: 4
  }
];

export default function BrutalistBookingPageDark() {
  useEffect(() => {
    // Cal.com embed script
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "30min", { origin: "https://app.cal.com" });

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { "layout": "month_view", "theme": "dark" },
      calLink: "gentlenook/30min",
    });

    window.Cal.ns["30min"]("ui", {
      "theme": "dark",
      "cssVarsPerTheme": { "dark": { "cal-brand": "#a384dc" } },
      "hideEventTypeDetails": false,
      "layout": "month_view"
    });
  }, []);

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
                      <AnimatedText text="Book Your Free Consult" />
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

              {/* Intro */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="services-2-item wow fadeInUp">
                        <p className="section-descr-large mb-0" style={{color: '#f9f5f0'}}>
                          Pick a time and let's get started.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cal.com Booking Calendar */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-3 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="services-2-item wow fadeInUp">
                        <div
                          style={{ width: '100%', height: '600px', overflow: 'auto' }}
                          id="my-cal-inline-30min"
                          role="region"
                          aria-label="Booking calendar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Timeline Section */}
              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  <div className="row mb-80 mb-md-50">
                    <div className="col-12 text-center">
                      <h2 className="section-title-large font-alt uppercase mb-0">
                        <span className="wow charsAnimInLong" data-splitting="chars">
                          <AnimatedText text="How Things Work From Here" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      {timelineSteps.map((item, index) => (
                        <div
                          key={index}
                          className="mb-60 mb-md-40 wow fadeInUp"
                          data-wow-delay={`${0.1 * (index + 1)}s`}
                        >
                          <div className="d-flex align-items-start" style={{gap: '30px'}}>
                            {/* Timeline Number */}
                            <div className="flex-shrink-0">
                              <div
                                style={{
                                  backgroundColor: '#77599f',
                                  color: '#f9f5f0',
                                  width: '60px',
                                  height: '60px',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 'bold',
                                  fontSize: '24px'
                                }}
                              >
                                {item.step}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow-1">
                              <div className="services-2-item">
                                <h3 className="services-2-title mb-20">{item.title}</h3>
                                <p style={{fontSize: '17px', lineHeight: '1.7', color: '#f9f5f0', marginBottom: 0}}>
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Connector Line */}
                          {index < timelineSteps.length - 1 && (
                            <div className="d-flex" style={{gap: '30px', marginTop: '20px'}}>
                              <div style={{width: '60px', display: 'flex', justifyContent: 'center'}}>
                                <div style={{width: '4px', height: '40px', backgroundColor: '#77599f'}} />
                              </div>
                              <div />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Help/Questions CTA */}
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
                          <AnimatedText text="Need Help or Have Questions?" />
                        </h2>
                        <p className="section-descr-large mb-50" style={{color: '#f9f5f0'}}>
                          Having trouble with booking or have questions before we meet? Drop me a message and I'll get back to you quickly.
                        </p>
                        <div>
                          <a
                            href="/brutalist-contact-dark"
                            className="btn btn-mod btn-large btn-w btn-hover-anim"
                          >
                            <span>Contact Me</span>
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
