import React from 'react';
import { BookOpen, ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMedium } from 'react-icons/fa6';

const Footer = ({ onOpenAdvisoryModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#0f172a',
        borderTop: '1px solid #1e293b',
        padding: '4.5rem 0 2.5rem 0',
        position: 'relative',
        color: '#f8fafc'
      }}
    >
      <div className="container-custom">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Info */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                KP
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem' }}>Ketul Patel</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600 }}>Principal Platform & SRE Architect</div>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Transforming enterprise software delivery through Agentic DevOps auto-healing pipelines, Port.io Developer Portals, Google DORA/SRE adoption, $3M+ Azure FinOps optimization, and LLMOps.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a 
                href="https://linkedin.com/in/ketulvpatel/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#38bdf8',
                  transition: 'all 0.2s ease'
                }}
                title="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>

              <a 
                href="https://github.com/patelketul1230" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#fff',
                  transition: 'all 0.2s ease'
                }}
                title="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>

              <a 
                href="https://medium.com/@kpsub786" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#60a5fa',
                  transition: 'all 0.2s ease'
                }}
                title="Medium Articles"
              >
                <FaMedium size={18} />
              </a>

              <button 
                onClick={onOpenAdvisoryModal}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#34d399',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Send Advisory Message"
              >
                <FaEnvelope size={18} />
              </button>
            </div>
          </div>

          {/* Nav Column */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Advisory Pillars
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Agentic DevOps & Auto-PR Repair</a>
              <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Port.io Developer Portals (IDP)</a>
              <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Google SRE & Dynatrace SLIs/SLOs</a>
              <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Cloud FinOps ($3M+ Azure Savings)</a>
              <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>AWS Bedrock & LLMOps Security</a>
            </div>
          </div>

          {/* Tools & Links */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Interactive Tools
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <a href="#calculators" style={{ color: '#cbd5e1', textDecoration: 'none' }}>DORA Maturity Scorecard</a>
              <a href="#calculators" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Cloud FinOps ROI Calculator</a>
              <a href="#casestudies" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Interactive Before/After Case Studies</a>
              <a href="#techstack" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tech Capability Matrix</a>
            </div>
          </div>

          {/* Action Box */}
          <div style={{ background: 'rgba(37, 99, 235, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '14px', padding: '1.5rem', maxWidth: '300px' }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={16} style={{ color: '#60a5fa' }} />
              Executive Consultation
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.82rem', marginBottom: '1rem', lineHeight: 1.5 }}>
              Ready to elevate software delivery velocity and optimize infrastructure spend?
            </p>
            <button 
              onClick={onOpenAdvisoryModal}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.6rem' }}
            >
              Book Advisory Session
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: '#94a3b8' }}>
          <div>
            © {new Date().getFullYear()} Ketul Patel. All rights reserved. Principal Platform & SRE Advisory.
          </div>

          <button 
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#cbd5e1',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem'
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
