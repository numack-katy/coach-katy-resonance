import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import { brutalistMultipageDark } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Image from "next/image";

const dark = true;

export const metadata = {
  title: "Privacy Policy | Coach Katy",
  description: "Privacy policy for Coach Katy neurodivergent coaching services. Learn how we protect your personal information and data.",
  robots: "noindex, follow",
};

export default function PrivacyPolicyPage() {
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
                      <AnimatedText text="Privacy Policy" />
                    </span>
                  </h1>
                </div>
              </ParallaxContainer>

              <section
                className={`page-section ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="services-2-item">
                        <div style={{fontSize: '16px', lineHeight: '1.8', color: '#f9f5f0'}}>
                          <p className="mb-30">
                            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Introduction</h2>
                          <p className="mb-40">
                            Coach Katy ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our coaching services, visit our website at coachkaty.help, or communicate with us.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Information We Collect</h2>
                          <p className="mb-20"><strong style={{color: '#ffe066'}}>Personal Information:</strong></p>
                          <ul className="mb-30" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">Name, email address, phone number</li>
                            <li className="mb-10">Billing and payment information</li>
                            <li className="mb-10">Information shared during coaching sessions</li>
                            <li className="mb-10">Communication preferences</li>
                          </ul>

                          <p className="mb-20"><strong style={{color: '#ffe066'}}>Automatically Collected Information:</strong></p>
                          <ul className="mb-40" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">IP address and browser type</li>
                            <li className="mb-10">Device information</li>
                            <li className="mb-10">Website usage data and analytics</li>
                          </ul>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>How We Use Your Information</h2>
                          <ul className="mb-40" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">To provide and improve coaching services</li>
                            <li className="mb-10">To communicate with you about sessions, appointments, and updates</li>
                            <li className="mb-10">To process payments</li>
                            <li className="mb-10">To send newsletters and marketing communications (with your consent)</li>
                            <li className="mb-10">To comply with legal obligations</li>
                          </ul>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Confidentiality in Coaching</h2>
                          <p className="mb-40">
                            Information shared during coaching sessions is kept strictly confidential and will not be disclosed without your explicit consent, except where required by law or to prevent serious harm.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Data Security</h2>
                          <p className="mb-40">
                            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Your Rights</h2>
                          <p className="mb-20">You have the right to:</p>
                          <ul className="mb-40" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">Access your personal information</li>
                            <li className="mb-10">Request correction of inaccurate data</li>
                            <li className="mb-10">Request deletion of your information</li>
                            <li className="mb-10">Opt-out of marketing communications</li>
                            <li className="mb-10">Object to certain processing of your data</li>
                          </ul>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Third-Party Services</h2>
                          <p className="mb-40">
                            We may use third-party services for payment processing, scheduling, and analytics. These service providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect it.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Cookies and Tracking</h2>
                          <p className="mb-40">
                            Our website uses cookies and similar tracking technologies to improve your experience and analyze website traffic. You can control cookies through your browser settings.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Changes to This Policy</h2>
                          <p className="mb-40">
                            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the effective date.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Contact Us</h2>
                          <p className="mb-0">
                            If you have questions about this Privacy Policy or how we handle your information, please contact us at:
                            <br /><br />
                            <strong style={{color: '#ffe066'}}>Email:</strong> katy@coachkaty.help
                            <br />
                            <strong style={{color: '#ffe066'}}>Location:</strong> Johnson City, Tennessee
                          </p>
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
