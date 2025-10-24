import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import { brutalistMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { getPost, getAllPosts, renderPortableText } from "@/lib/sanity";
import { notFound } from 'next/navigation';
import BlogNewsletterForm from "@/components/newsletterForms/BlogNewsletterForm";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Coach Katy',
    };
  }

  return {
    title: `${post.title} | Coach Katy Blog`,
    description: post.excerpt || `Read ${post.title} on the Coach Katy blog`,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = renderPortableText(post.body);

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
                  <h1 className="hs-title-2 font-alt uppercase mb-30">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      <AnimatedText text={post.title} />
                    </span>
                  </h1>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="post-prev-1-info" style={{borderBottom: '1px solid rgba(249, 245, 240, 0.2)', paddingBottom: '20px'}}>
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
                    </div>
                  </div>
                </div>
              </ParallaxContainer>

              {/* Blog Post Content */}
              <section className="page-section bg-dark-1 light-content">
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      {post.mainImage && (
                        <div className="mb-60 mb-md-40">
                          <Image
                            src={post.mainImage.asset.url}
                            width={1200}
                            height={800}
                            alt={post.mainImage.alt || post.title}
                            className="w-100"
                            style={{borderRadius: '4px'}}
                          />
                        </div>
                      )}

                      <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                      />

                      {/* Back to Blog Link */}
                      <div className="mt-80 pt-40" style={{borderTop: '1px solid rgba(249, 245, 240, 0.2)'}}>
                        <Link href="/brutalist-blog-dark" className="link-hover-anim" data-link-animate="y">
                          <span className="link-strong link-strong-unhovered" style={{color: '#ffe066'}}>
                            ← Back to Blog
                          </span>
                          <span className="link-strong link-strong-hovered" style={{color: '#ffe066'}}>
                            ← Back to Blog
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

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
            </main>
            <footer className="page-section footer-1 bg-dark-1 light-content">
              <Footer3 />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
