import Footer3 from "@/components/footers/Footer3";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const metadata = {
  title: "Page Not Found | Coach Katy",
  description: "The page you're looking for doesn't exist. Return to Coach Katy's homepage to explore neurodivergent-affirming coaching services.",
};
export default function MainAboutPage1() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="page" id="top">
          <>
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <div className="main-nav-sub full-wrapper">
                <div className="nav-logo-wrap local-scroll">
                  <Link href={`/`} className="logo font-alt">
                    <Image
                      src="/Coachlogo.svg"
                      alt="Coach Katy"
                      width={176}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
            </nav>
            {/* End Navigation Panel */}
            <main id="main">
              {/* Home Section */}
              <section
                className="page-section bg-dark-1 light-content"
                style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
                id="home"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <h1 className="hs-title-2 font-alt uppercase mb-30">
                        <span className="wow charsAnimIn" data-splitting="chars">
                          404
                        </span>
                        <span className="section-title-image wow fadeScaleIn" data-wow-delay="0.3s">
                          <Image
                            src="/assets/images/demo-brutalist/shape-2.svg"
                            alt=""
                            width={35}
                            height={35}
                          />
                        </span>
                      </h1>

                      <p className="section-descr mb-50" style={{ color: '#f9f5f0', fontSize: '20px' }}>
                        The page you were looking for could not be found.
                      </p>

                      <div className="local-scroll">
                        <Link
                          href="/"
                          className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        >
                          <span>Back To Home</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Home Section */}
            </main>
          </>

          <Footer3 />
        </div>{" "}
      </div>
    </>
  );
}
