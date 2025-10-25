"use client";

export default function NewsLetter() {
  return (
    <>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="row">
              <div className="col-lg-9 col-xl-6">
                <h2 className="section-title-small font-alt mb-40 mb-md-20" style={{color: '#f9f5f0'}}>
                  Stay informed with our newsletter.
                </h2>
              </div>
            </div>
            <form
              action="/api/newsletter"
              method="post"
              className="form"
            >
              <div className="d-sm-flex justify-content-between mb-20">
                <input
                  name="email"
                  placeholder="Enter your email"
                  className="newsletter-field input-lg circle"
                  type="email"
                  required
                  aria-required="true"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    color: '#f9f5f0',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                />
                <button
                  type="submit"
                  className="newsletter-button btn btn-mod btn-large btn-circle btn-hover-anim"
                >
                  <span>Subscribe</span>
                </button>
              </div>
              <div className="form-tip" style={{color: '#f9f5f0'}}>
                <i className="icon-info size-16" /> Get neurodivergent insights and coaching tips delivered to your inbox.
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
