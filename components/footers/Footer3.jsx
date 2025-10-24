"use client";
import { socialLinks } from "@/data/footer";
import React from "react";

export default function Footer3() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="row">
        {/* Copyright */}
        <div className="col-lg-3 text-center text-lg-start mb-md-50">
          <div>© Coach Katy {new Date().getFullYear()}</div>
          <div className="small" style={{color: '#f9f5f0', opacity: 0.7}}>
            Neurodivergent-affirming coaching
          </div>
        </div>
        {/* End Copyright */}
        {/* Footer Navigation */}
        <div className="col-lg-6 fw-social-inline text-center mb-md-40">
          <div className="fw-social-inline-item">
            <a
              href="/brutalist-about-dark"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">About</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">About</span>
            </a>
          </div>
          <div className="fw-social-inline-item">
            <a
              href="/brutalist-services-dark"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">Services</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">Services</span>
            </a>
          </div>
          <div className="fw-social-inline-item">
            <a
              href="/main-pages-pricing-1-dark"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">Pricing</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">Pricing</span>
            </a>
          </div>
          <div className="fw-social-inline-item">
            <a
              href="/brutalist-contact-dark"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">Contact</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">Contact</span>
            </a>
          </div>
          <div className="fw-social-inline-item">
            <a
              href="https://gentlenook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">Gentle Nook</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">Gentle Nook</span>
            </a>
          </div>
          <div className="fw-social-inline-item">
            <a
              href="/johnson-city-tennessee-coaching"
              className="link-hover-anim align-middle"
              data-link-animate="y"
              style={{fontSize: '14px', opacity: 0.8}}
            >
              <span className="link-strong link-strong-unhovered">TN Coaching</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">TN Coaching</span>
            </a>
          </div>
          <div className="fw-social-inline-item">
            <a
              href="/privacy-policy"
              className="link-hover-anim align-middle"
              data-link-animate="y"
              style={{fontSize: '14px', opacity: 0.7}}
            >
              <span className="link-strong link-strong-unhovered">Privacy</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">Privacy</span>
            </a>
          </div>
          <div className="fw-social-inline-item">
            <a
              href="/terms-conditions"
              className="link-hover-anim align-middle"
              data-link-animate="y"
              style={{fontSize: '14px', opacity: 0.7}}
            >
              <span className="link-strong link-strong-unhovered">Terms</span>
              <span className="link-strong link-strong-hovered" aria-hidden="true">Terms</span>
            </a>
          </div>
        </div>
        {/* End Footer Navigation */}
        <div
          className="col-lg-3 text-center text-lg-end local-scroll"
          onClick={scrollToTop}
        >
          <a href="#top" className="fw-top-link">
            <span className="fw-top-link-underline">Back to top</span>
            <span className="icon ms-1">
              <i className="icon-arrow-up size-17" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
