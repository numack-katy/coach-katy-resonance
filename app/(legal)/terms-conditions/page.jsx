import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import { brutalistMultipageDark } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";

const dark = true;

export const metadata = {
  title: "Terms & Conditions | Coach Katy",
  description: "Terms and conditions for Coach Katy neurodivergent coaching services. Review our policies and agreements.",
  robots: "noindex, follow",
};

export default function TermsConditionsPage() {
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
                      <AnimatedText text="Terms & Conditions" />
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

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Agreement to Terms</h2>
                          <p className="mb-40">
                            By engaging with Coach Katy's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Nature of Services</h2>
                          <p className="mb-20"><strong style={{color: '#ffe066'}}>Coaching, Not Therapy:</strong></p>
                          <p className="mb-20">
                            The services provided are professional coaching services, not psychotherapy, counseling, or mental health treatment. Coaching is a forward-focused partnership designed to help you achieve your goals.
                          </p>
                          <p className="mb-40">
                            If you are experiencing a mental health crisis or need clinical treatment, please seek appropriate professional help. I can provide referrals to licensed therapists if needed.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Client Responsibilities</h2>
                          <p className="mb-20">As a client, you agree to:</p>
                          <ul className="mb-40" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">Participate actively and honestly in coaching sessions</li>
                            <li className="mb-10">Complete agreed-upon actions between sessions</li>
                            <li className="mb-10">Provide at least 24 hours notice for cancellations or rescheduling</li>
                            <li className="mb-10">Make payment in full before or at the time of service</li>
                            <li className="mb-10">Communicate openly about your needs and concerns</li>
                          </ul>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Scheduling and Cancellations</h2>
                          <p className="mb-20"><strong style={{color: '#ffe066'}}>Appointments:</strong></p>
                          <p className="mb-20">Sessions are scheduled by mutual agreement. We will work together to find times that work for both of us.</p>

                          <p className="mb-20"><strong style={{color: '#ffe066'}}>Cancellation Policy:</strong></p>
                          <p className="mb-40">
                            If you need to cancel or reschedule, please provide at least 24 hours notice. Late cancellations or no-shows may result in a charge for the session. I understand that emergencies happen and will work with you on a case-by-case basis.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Payment and Fees</h2>
                          <p className="mb-20"><strong style={{color: '#ffe066'}}>Pricing:</strong></p>
                          <p className="mb-20">Our equity pricing model offers tiered rates based on your financial situation. All pricing is transparent and agreed upon before services begin.</p>

                          <p className="mb-20"><strong style={{color: '#ffe066'}}>Payment Terms:</strong></p>
                          <ul className="mb-20" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">Payment is due before or at the time of service</li>
                            <li className="mb-10">Package prices are paid upfront</li>
                            <li className="mb-10">We accept credit cards and electronic payment</li>
                            <li className="mb-10">Receipts will be provided for all transactions</li>
                          </ul>

                          <p className="mb-40"><strong style={{color: '#ffe066'}}>Refund Policy:</strong> Coaching packages are non-refundable once services have begun, though unused sessions may be transferable in certain circumstances.</p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Confidentiality</h2>
                          <p className="mb-20">
                            All information shared during coaching sessions is confidential and will not be disclosed without your explicit written consent, except in the following circumstances:
                          </p>
                          <ul className="mb-40" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">When required by law</li>
                            <li className="mb-10">When there is an imminent risk of harm to yourself or others</li>
                            <li className="mb-10">When there is suspected abuse or neglect of a child, elderly person, or dependent adult</li>
                          </ul>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Professional Boundaries</h2>
                          <p className="mb-40">
                            Our relationship is a professional coaching relationship. Contact outside of scheduled sessions should be limited to scheduling and brief check-ins as outlined in your coaching agreement.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Termination</h2>
                          <p className="mb-20">Either party may terminate the coaching relationship at any time with notice. Reasons for termination may include:</p>
                          <ul className="mb-40" style={{paddingLeft: '20px'}}>
                            <li className="mb-10">Client needs are outside the scope of coaching</li>
                            <li className="mb-10">Lack of progress toward goals</li>
                            <li className="mb-10">Non-payment or violation of these terms</li>
                            <li className="mb-10">Either party feeling the relationship is not a good fit</li>
                          </ul>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Limitation of Liability</h2>
                          <p className="mb-40">
                            Coaching is a collaborative process. While I will provide guidance, support, and expertise, you are ultimately responsible for your decisions and actions. I am not liable for any outcomes resulting from our coaching relationship.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Virtual Services</h2>
                          <p className="mb-40">
                            All sessions are conducted virtually via Google Meet. You are responsible for ensuring a private, quiet space with reliable internet connection. Technical difficulties do not constitute grounds for refunds, though we will work to reschedule if needed.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Intellectual Property</h2>
                          <p className="mb-40">
                            Any materials, resources, or tools provided during coaching are for your personal use only and may not be reproduced, distributed, or shared without permission.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Changes to Terms</h2>
                          <p className="mb-40">
                            These terms may be updated from time to time. Significant changes will be communicated to active clients. Continued use of services after changes constitutes acceptance of the new terms.
                          </p>

                          <h2 className="services-2-title mb-30" style={{fontSize: '28px'}}>Contact</h2>
                          <p className="mb-0">
                            If you have questions about these Terms and Conditions, please contact:
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
