"use client";
import { useState } from 'react';

export default function BlogNewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', or ''
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="d-md-flex justify-content-between align-items-end mb-30">
            <div className="flex-grow-1 me-md-3 mb-md-0 mb-20">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                id="newsletter-email"
                type="email"
                className="form-control newsletter-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid rgba(249, 245, 240, 0.3)',
                  color: '#f9f5f0',
                  padding: '15px 20px',
                  fontSize: '16px',
                  borderRadius: '4px'
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-mod btn-large btn-w btn-hover-anim"
              disabled={loading}
            >
              <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
            </button>
          </div>

          {status && (
            <div
              className={`text-center ${status === 'success' ? 'text-success' : 'text-danger'}`}
              style={{
                padding: '15px',
                backgroundColor: status === 'success' ? 'rgba(119, 89, 159, 0.2)' : 'rgba(255, 0, 0, 0.1)',
                borderRadius: '4px',
                color: status === 'success' ? '#ffe066' : '#ff6b6b',
                fontSize: '16px'
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
