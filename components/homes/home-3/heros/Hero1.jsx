import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Image from "next/image";
export default function Hero1() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-140">
      {/* Home Section Content */}
      <div className="home-content text-start">
        <div className="position-relative">
          <h1 className="hs-title-2 font-alt uppercase mt-40 mb-30">
            <span className="wow charsAnimIn" data-splitting="chars">
              <span
                className="d-block"
                data-rellax-x=""
                data-rellax-vertical-scroll-axis="x"
                data-rellax-horizontal-speed={7}
              >
                <AnimatedText text="Coaching by the" />
              </span>
              <span
                className="d-block text-end"
                data-rellax-x=""
                data-rellax-vertical-scroll-axis="x"
                data-rellax-horizontal-speed={-5}
              >
                <AnimatedText text="Neurodiverse" />
              </span>
            </span>
          </h1>
          <p className="hs-paragraph-1 wow clipRightIn" data-wow-delay="1.1s">
            Neurodivergent-affirming support rooted in lived experience.
          </p>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-brutalist/arrow-down.svg"
              width={51}
              height={132}
              alt="Scroll Down"
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social wow fadeInUp" data-wow-offset={0}>
        <a href="https://facebook.com/ndcoachkaty" target="_blank" rel="noopener noreferrer" className="hs-social-link">
          <div className="visually-hidden">Facebook</div>
          <i className="fa-facebook-f" />
        </a>
      </div>
      {/* End Social Media Links */}
    </div>
  );
}
