import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Home3 from "@/components/homes/home-3";
import Hero1 from "@/components/homes/home-3/heros/Hero1";
import { brutalistMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Image from "next/image";
export const metadata = {
  metadataBase: new URL('https://coachkaty.help'),
  title:
    "Neurodivergent Affirming Coaching by Katy | Life Coach for Autistic & ADHD Adults",
  description:
    "Neurodivergent-affirming life coaching for late-diagnosed autistic and ADHD adults. Coaching that understands neurodivergent life because I'm living it too.",
  alternates: {
    canonical: 'https://coachkaty.help',
  },
  openGraph: {
    title: "Neurodivergent Affirming Coaching by Katy | Life Coach for Autistic & ADHD Adults",
    description: "Neurodivergent-affirming life coaching for late-diagnosed autistic and ADHD adults. Coaching that understands neurodivergent life because I'm living it too.",
    url: "https://coachkaty.help",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Coach Katy - Neurodivergent Life Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurodivergent Affirming Coaching by Katy | Life Coach for Autistic & ADHD Adults",
    description: "Neurodivergent-affirming life coaching for late-diagnosed autistic and ADHD adults. Coaching that understands neurodivergent life because I'm living it too.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};
export default function Home3MainDemoOnepageDark() {
  return (
    <>
      {" "}
      <div className="theme-brutalist">
        {" "}
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header3 links={brutalistMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section parallax-5 light-content scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
                  position: 'relative'
                }}
                id="home"
              >
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(28, 27, 31, 0.3) 0%, rgba(28, 27, 31, 0.7) 100%)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }} />
                {/* Floating Spark Accent */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  right: '10%',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}>
                  <Image
                    src="/Spark 58.svg"
                    width={80}
                    height={80}
                    alt=""
                    priority
                    style={{
                      opacity: 0.3,
                      filter: 'invert(76%) sepia(61%) saturate(413%) hue-rotate(350deg) brightness(106%) contrast(101%)',
                      animation: 'float 7s ease-in-out infinite'
                    }}
                  />
                </div>
                <div style={{position: 'relative', zIndex: 1}}>
                  <Hero1 />
                </div>
              </ParallaxContainer>

              <Home3 dark />
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
