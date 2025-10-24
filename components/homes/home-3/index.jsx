import React from "react";

import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import Link from "next/link";
import ContactDark from "./ContactDark";
import Image from "next/image";
import { qualities } from "@/data/features";
import AnimatedText from "@/components/common/AnimatedText";
export default function Home3({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection pt-0 pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          {/* Floating Accent - Meet Katy */}
          <div style={{
            position: 'absolute',
            top: '50px',
            right: '5%',
            zIndex: 0,
            pointerEvents: 'none'
          }}>
            <Image
              src="/Brutalist 59.svg"
              width={60}
              height={60}
              alt=""
              style={{
                opacity: 0.15,
                filter: 'invert(64%) sepia(28%) saturate(1073%) hue-rotate(260deg) brightness(90%) contrast(87%)'
              }}
            />
          </div>
          <div className="row page-section relative z-index-1">
            <div className="col-sm-9">
              <h2 className="section-title-large font-alt uppercase mb-60 mb-md-50 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  <AnimatedText text="Meet Katy" />
                </span>
              </h2>
              <p
                className="section-descr-large mb-60 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Late-diagnosed autistic. Former therapist.
                I coach neurodivergent adults from lived experience,
                not theory — peer-to-peer support that's practical
                and grounded in reality.
              </p>
              <ul
                className="section-features font-alt clearlist uppercase wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {qualities.map((quality, index) => (
                  <li key={index}>{quality}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image */}
          <div
            className="row section-image-1-wrap"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.3"
          >
            <div className="col-5 offset-7 col-sm-4 offset-sm-8">
              <Image
                src="/Image11.webp"
                width={689}
                height={855}
                className="section-image-1"
                alt="Katy Welborn - Neurodivergent Life Coach"
              />
            </div>
          </div>
          {/* End Image */}
        </div>
      </section>
      {/* Brutalist Waves Divider */}
      <div className="position-relative" style={{backgroundColor: '#2c2b30', padding: '60px 0'}}>
        <div className="container text-center">
          <Image
            src="/Brutalistwaves.svg"
            width={448}
            height={488}
            alt=""
            style={{opacity: 0.3, maxWidth: '100%', height: 'auto'}}
          />
        </div>
      </div>
      {/* End Brutalist Waves Divider */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative pt-60 pt-md-50 pt-sm-40">
          <div className="row mb-80 mb-md-50">
            <div className="col-12 text-center">
              <h2 className="section-title-large font-alt uppercase mb-0 mb-sm-30 mark-decoration-2">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  START HERE
                </span>
              </h2>
            </div>
          </div>

          {/* Service Cards */}
          <div className="row align-items-stretch">
            <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.1s">
              <div className="services-2-item h-100 d-flex flex-column" style={{backgroundColor: 'rgba(119, 89, 159, 0.15)', border: '1px solid rgba(119, 89, 159, 0.3)'}}>
                <div className="services-2-icon" style={{color: '#ffe066'}}>
                  <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                </div>
                <h3 className="services-2-title">Work With Me</h3>
                <div className="services-2-text flex-grow-1 mb-30">
                  One-on-one coaching that's collaborative and affirming. Simple structure, practical tools.
                </div>
                <div className="services-2-link">
                  <Link href="/services" className="link-hover-anim" data-link-animate="y">
                    <span className="link-strong link-strong-unhovered">Learn more</span>
                    <span className="link-strong link-strong-hovered">Learn more</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.2s">
              <div className="services-2-item h-100 d-flex flex-column" style={{backgroundColor: 'rgba(119, 89, 159, 0.15)', border: '1px solid rgba(119, 89, 159, 0.3)'}}>
                <div className="services-2-icon" style={{color: '#ffe066'}}>
                  <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                </div>
                <h3 className="services-2-title">About Me</h3>
                <div className="services-2-text flex-grow-1 mb-30">
                  Late-diagnosed autistic coach with a social-work background. How I arrived here and how I work.
                </div>
                <div className="services-2-link">
                  <Link href="/about" className="link-hover-anim" data-link-animate="y">
                    <span className="link-strong link-strong-unhovered">Read my story</span>
                    <span className="link-strong link-strong-hovered">Read my story</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-md-50 wow fadeInUp" data-wow-delay="0.3s">
              <div className="services-2-item h-100 d-flex flex-column" style={{backgroundColor: 'rgba(119, 89, 159, 0.15)', border: '1px solid rgba(119, 89, 159, 0.3)'}}>
                <div className="services-2-icon" style={{color: '#ffe066'}}>
                  <Image src="/yellowstar.svg" width="32" height="32" alt="Star" />
                </div>
                <h3 className="services-2-title">Equity Pricing</h3>
                <div className="services-2-text flex-grow-1 mb-30">
                  Transparent tiers so cost isn't a barrier. Pick the level that fits your budget.
                </div>
                <div className="services-2-link">
                  <Link href="/pricing" className="link-hover-anim" data-link-animate="y">
                    <span className="link-strong link-strong-unhovered">View pricing</span>
                    <span className="link-strong link-strong-hovered">View pricing</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="values"
      >
        <div className="container position-relative">
          {/* Floating Accent - Values */}
          <div style={{
            position: 'absolute',
            top: '30px',
            left: '3%',
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
            <div className="col-md-5">
              <h2 className="section-title-large font-alt uppercase mb-0 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  <AnimatedText text="Values That Guide Me" />
                </span>
              </h2>
            </div>
            <div className="col-md-7">
              <p className="section-descr-large mb-0 wow fadeInUp">
                These principles shape how I show up for every client and every session.
              </p>
            </div>
          </div>

          {/* Values Services Layout */}
          <div className="mt-n30">
            {/* Value 1: Lived Experience */}
            <div className="service-2-item pt-30 pt-md-20 wow fadeInUp" data-wow-delay="0.1s">
              <div className="services-2-button active">
                <div className="row">
                  <div className="col-12">
                    <h3 className="services-2-title font-alt mb-20">
                      <span className="services-2-number">01</span>
                      Lived Experience
                    </h3>
                    <p style={{color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6', margin: '0'}}>
                      Being autistic allows me to bring real-world understanding into every session. I get it because I've lived it and I know how powerful it is to be met by someone who actually understands neurodivergent life.
                    </p>
                  </div>
                </div>
                <div className="services-2-button-close" />
              </div>
            </div>

            {/* Value 2: Empathetic Approach */}
            <div className="service-2-item pt-30 pt-md-20 wow fadeInUp" data-wow-delay="0.2s">
              <div className="services-2-button active">
                <div className="row">
                  <div className="col-12">
                    <h3 className="services-2-title font-alt mb-20">
                      <span className="services-2-number">02</span>
                      Empathetic Approach
                    </h3>
                    <p style={{color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6', margin: '0'}}>
                      Grounded in compassion and acceptance, my approach centers you—the whole you. Together we explore self-acceptance, self-compassion, and ways to live authentically without masking.
                    </p>
                  </div>
                </div>
                <div className="services-2-button-close" />
              </div>
            </div>

            {/* Value 3: Collaborative */}
            <div className="service-2-item pt-30 pt-md-20 wow fadeInUp" data-wow-delay="0.3s">
              <div className="services-2-button active">
                <div className="row">
                  <div className="col-12">
                    <h3 className="services-2-title font-alt mb-20">
                      <span className="services-2-number">03</span>
                      Collaborative
                    </h3>
                    <p style={{color: '#f9f5f0', fontSize: '16px', lineHeight: '1.6', margin: '0'}}>
                      You're the expert in your own life. I walk alongside you, not above you, offering structure, tools, and perspective that fit your unique neurodivergent brain.
                    </p>
                  </div>
                </div>
                <div className="services-2-button-close" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Visual Divider */}
      <div className="position-relative" style={{backgroundColor: dark ? '#1a1a1e' : '#f5f5f5', padding: '30px 0', overflow: 'hidden'}}>
        <div className="container text-center">
          <Image
            src="/Brutalist Shape 110.svg"
            width={100}
            height={91}
            alt=""
            style={{opacity: 0.15, filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)'}}
          />
        </div>
      </div>
      {/* End Visual Divider */}
      <section
        className={`page-section   scrollSpysection  ${
          dark ? "bg-dark-3 light-content" : "bg-gray-light-2"
        } `}
        id="testimonials"
      >
        <div className="container position-relative">
          {/* Floating Accent - Client Voices */}
          <div style={{
            position: 'absolute',
            top: '40px',
            right: '8%',
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
                filter: 'invert(45%) sepia(27%) saturate(933%) hue-rotate(231deg) brightness(93%) contrast(88%)'
              }}
            />
          </div>
          <div className="row mb-80 mb-md-50">
            <div className="col-md-5">
              <h2 className="section-title-large font-alt uppercase mb-0 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  <AnimatedText text="Client Voices" />
                </span>
              </h2>
            </div>
            <div className="col-md-7">
              <p className="section-descr-large mb-0 wow fadeInUp">
                Words from those I've worked with — reflections on connection, trust, and growth.
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="row">
            <div className="col-lg-6 mb-md-50 wow fadeInUp" data-wow-delay="0.1s">
              <div className="services-2-item h-100">
                <div className="services-2-text mb-30">
                  <blockquote className="mb-0">
                    "Katy really gets me. For the first time, I opened up about what I was really experiencing"
                  </blockquote>
                </div>
                <div className="services-2-title">— HH</div>
              </div>
            </div>

            <div className="col-lg-6 mb-md-50 wow fadeInUp" data-wow-delay="0.2s">
              <div className="services-2-item h-100">
                <div className="services-2-text mb-30">
                  <blockquote className="mb-0">
                    "Katy held the safest, most engaging space for me to process emotions I'd held in for the longest time. I feel renewed and uplifted"
                  </blockquote>
                </div>
                <div className="services-2-title">— AN</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`small-section   ${
          dark
            ? "bg-dark-3 light-content"
            : "bg-gray-light-2 bg-light-alpha-90 "
        } bg-scroll`}
        style={{
          backgroundColor: "#c476c1",
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Watermark Background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          opacity: 0.06,
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <Image
            src="/Brutalist 21.svg"
            width={600}
            height={355}
            alt=""
          />
        </div>
        {/* End Watermark */}
        <div
          className={
            dark ? "section-gradient-top-dark" : "section-gradient-top"
          }
          style={{position: 'relative', zIndex: 1}}
        />
        <div className="position-absolute top-0 start-0 w-100" style={{zIndex: 1}}>
          <div className="container">
            {/* Horizontal Line */}
            <hr />
            {/* End Horizontal Line */}
          </div>
        </div>
        <div style={{position: 'relative', zIndex: 1}}>
          <NewsLetter />
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="cta"
      >
        <div className="container position-relative text-center">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="section-title-large font-alt uppercase mb-60 mb-md-40 wow charsAnimInLong" data-splitting="chars">
                <AnimatedText text="Ready to Book?" />
              </h2>
              <p className="section-descr-large mb-60 mb-md-40 wow fadeInUp" data-wow-delay="0.1s">
                All clients start with a free call to make sure we click.
              </p>
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <Link
                  href="/booking"
                  className="btn btn-mod btn-large btn-w btn-hover-anim"
                >
                  <span>Schedule Your Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
