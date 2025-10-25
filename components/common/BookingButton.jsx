"use client";
import Link from "next/link";

export default function BookingButton() {
  return (
    <>
      <style jsx>{`
        .cta-button-wrapper .btn:hover {
          background-color: #77599f !important;
          color: #f9f5f0 !important;
          border-color: #77599f !important;
        }
      `}</style>
      <div className="cta-button-wrapper">
        <Link
          href="/booking"
          className="btn btn-mod btn-large btn-w btn-hover-anim"
        >
          <span>Schedule Your Free Consultation</span>
        </Link>
      </div>
    </>
  );
}
