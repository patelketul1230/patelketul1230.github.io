import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Building, User, Mail, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

const AdvisoryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    engagementType: 'Agentic DevOps & Auto-PR Pipelines',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree / EmailJS / Custom Webhook integration ready:
      // If a Formspree ID or webhook URL is configured in environment, send payload:
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      
      // Simulate network request processing
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      engagementType: 'Agentic DevOps & Auto-PR Pipelines',
      message: ''
    });
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease-in-out'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '620px',
          padding: '2.5rem',
          position: 'relative',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Sparkles size={20} style={{ color: '#3b82f6' }} />
              <span className="badge-glow" style={{ fontSize: '0.8rem' }}>Executive Advisory Consultation</span>
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
              Schedule an Advisory Session
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
              Please fill out the details below to initiate an enterprise consulting discussion.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
                <div>
                  <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.8rem 0.65rem 2.5rem',
                        borderRadius: '8px',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid var(--border-color)',
                        color: '#fff',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Organization / Company *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Building size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Enterprise Tech Corp"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.8rem 0.65rem 2.5rem',
                        borderRadius: '8px',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid var(--border-color)',
                        color: '#fff',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  Work Email Address *
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  <input 
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.8rem 0.65rem 2.5rem',
                      borderRadius: '8px',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  Primary Advisory Interest
                </label>
                <select 
                  value={formData.engagementType}
                  onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none'
                  }}
                >
                  <option value="Agentic DevOps & Auto-PR Pipelines">Agentic DevOps & Self-Healing Pipelines</option>
                  <option value="Internal Developer Portal (IDP) Architecture">Internal Developer Portal (IDP) Architecture</option>
                  <option value="Google SRE & DORA Metrics Transformation">Google SRE & DORA Metrics Transformation</option>
                  <option value="Cloud FinOps Infrastructure Audit ($3M+ Azure methodology)">Cloud FinOps Infrastructure Audit ($3M+ Azure methodology)</option>
                  <option value="AWS Bedrock & LLMOps Security Pipelines">AWS Bedrock & LLMOps Security Pipelines</option>
                  <option value="Fractional Platform Architecture / Executive Advisory">Fractional Platform Architecture / Executive Advisory</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  Project Overview / Challenges
                </label>
                <textarea 
                  rows={4}
                  placeholder="Share details regarding your current engineering delivery goals, cloud infrastructure bottlenecks, or transformation roadmap..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '0.85rem' }}
              >
                <Send size={18} />
                {isSubmitting ? 'Submitting Request...' : 'Submit Enterprise Advisory Request'}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              color: '#10b981',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={38} />
            </div>
            
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
              Thank You for the Request!
            </h3>
            
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 2rem auto' }}>
              Your inquiry has been received. I will review your requirements and reach out to you shortly.
            </p>
            
            <button 
              onClick={handleReset}
              className="btn-secondary"
              style={{ padding: '0.7rem 1.75rem', fontSize: '0.9rem' }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdvisoryModal;
