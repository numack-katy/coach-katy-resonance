import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import { brutalistMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { getAllPosts } from "@/lib/sanity";
import BlogNewsletterForm from "@/components/newsletterForms/BlogNewsletterForm";

export const metadata = {
  title: "Neurodivergent Life Coaching Blog | Coach Katy",
  description: "Read articles on neurodivergent life, coaching, wellness, self-acceptance, and personal development to support your journey.",
  openGraph: {
    title: "Neurodivergent Life Coaching Blog | Coach Katy",
    description: "Read articles on neurodivergent life, coaching, wellness, self-acceptance, and personal development to support your journey.",
    url: "https://coachkaty.help/brutalist-blog-dark",
    siteName: "Coach Katy",
    images: [
      {
        url: "https://coachkaty.help/katy1.webp",
        width: 1200,
        height: 630,
        alt: "Coach Katy Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurodivergent Life Coaching Blog | Coach Katy",
    description: "Read articles on neurodivergent life, coaching, wellness, self-acceptance, and personal development to support your journey.",
    images: ["https://coachkaty.help/katy1.webp"],
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BrutalistBlogPageDark() {
  const allPosts = await getAllPosts();

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
                      <AnimatedText text="Blog" />
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
                  <p className="section-descr-large mt-30" style={{color: '#f9f5f0', opacity: 0.9}}>
                    Thoughts on neurodivergent life, coaching, and everything in between
                  </p>
                </div>
              </ParallaxContainer>
              <>
                {/* Blog Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {allPosts.length > 0 ? (
                      <div className="row gx-5 mt-n50 mt-sm-n30 mb-50 mb-sm-30">
                        {allPosts.map((post) => (
                          <div
                            key={post._id}
                            className="post-prev-1 col-lg-6 mt-50 mt-sm-30"
                          >
                            {post.mainImage && (
                              <div className="post-prev-1-img" style={{height: '400px', overflow: 'hidden'}}>
                                <Link href={`/posts/${post.slug.current}`}>
                                  <Image
                                    src={post.mainImage.asset.url}
                                    loading="lazy"
                                    width={750}
                                    height={400}
                                    alt={post.mainImage.alt || post.title}
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover'
                                    }}
                                  />
                                </Link>
                              </div>
                            )}
                            <div className="post-prev-1-info">
                              {post.author && (
                                <span className="post-prev-1-infro-item">
                                  <span className="visually-hidden">Author:</span>
                                  {post.author}
                                </span>
                              )}
                              {post.publishedAt && (
                                <span className="post-prev-1-infro-item">
                                  <span className="visually-hidden">Date:</span>
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </span>
                              )}
                            </div>
                            <h3 className="post-prev-1-title large">
                              <Link href={`/posts/${post.slug.current}`}>
                                {post.title}
                              </Link>
                            </h3>
                            {post.excerpt && (
                              <p style={{color: '#f9f5f0', fontSize: '17px', lineHeight: '1.7'}}>
                                {post.excerpt}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-80">
                        <h2 className="section-title-large font-alt uppercase mb-40">Coming Soon!</h2>
                        <p className="section-descr-large" style={{color: '#f9f5f0'}}>
                          I'm working on some great content about neurodivergent life and coaching. Check back soon for new posts!
                        </p>
                      </div>
                    )}
                  </div>
                </section>
                {/* End Blog Section */}

                {/* Newsletter Section */}
                <section className="page-section bg-dark-3 light-content">
                  <div className="container position-relative">
                    <div className="row">
                      <div className="col-12 text-center mb-60">
                        <h2 className="section-title-large font-alt uppercase mb-40">Stay Connected</h2>
                        <p className="section-descr-large" style={{color: '#f9f5f0'}}>
                          Get weekly insights about neurodivergent life, coaching tips, and resources delivered to your inbox.
                        </p>
                      </div>
                    </div>
                    <BlogNewsletterForm />
                  </div>
                </section>
              </>
            </main>
            <footer className="page-section footer-1 bg-dark-1 light-content">
              <Footer3 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
