import React from 'react';
import { ShieldCheck, Cpu, Terminal, Sparkles, ArrowRight, CheckCircle2, TrendingUp, DollarSign, Award, ChevronRight, Activity, Zap } from 'lucide-react';

const Hero = ({ onOpenAdvisoryModal }) => {
  const certifications = [
    { name: 'Certified Kubernetes Administrator (CKA)', badge: 'CKA Certified', color: '#326ce5' },
    { name: 'AWS Certified Solutions Architect', badge: 'AWS Architect', color: '#ff9900' },
    { name: 'Microsoft Certified: Azure Administrator', badge: 'Azure Admin', color: '#0089d6' },
    { name: 'BVM Project Expo Winner 2022', badge: 'BVM Expo Winner', color: '#10b981' },
  ];

  const keyStats = [
    { value: '$3M+', label: 'Azure Cloud FinOps Savings', highlight: 'Proven Infrastructure ROI' },
    { value: '60%', label: 'Troubleshooting Effort Cut', highlight: 'Agentic DevOps Pipeline' },
    { value: '40%', label: 'Faster Incident Response', highlight: 'Grafana & Loki Observability' },
    { value: 'DORA', label: 'Framework Partner', highlight: 'Google SRE & DORA Rollout' },
  ];

  return (
    <section 
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        {/* Live Architecture Status Bar */}
        <div style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.75rem',
          background: '#ffffff',
          border: '1px solid #cbd5e1',
          borderRadius: '9999px',
          padding: '0.4rem 1.25rem',
          fontSize: '0.82rem',
          marginBottom: '1.75rem',
          color: '#334155',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontWeight: 700 }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', boxShadow: '0 0 8px #059669' }} />
            Agentic DevOps Auto-PR: ACTIVE
          </span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span>SLO Target: 99.99%</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span style={{ color: '#1e40af', fontWeight: 600 }}>$3M+ Azure FinOps Saved</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span style={{ color: '#0284c7', fontWeight: 600 }}>IDP Catalog: Enabled</span>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h1 
              style={{ 
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                color: '#0f172a'
              }}
            >
              Architecting <span className="gradient-text">Agentic DevOps</span> & Scalable <span className="gradient-text-cyan">Platform Engineering</span>
            </h1>

            <p 
              style={{ 
                fontSize: '1.125rem', 
                color: 'var(--color-text-muted)', 
                marginBottom: '2rem', 
                lineHeight: 1.7,
                maxWidth: '680px'
              }}
            >
              Partnering with enterprise CTOs and engineering directors to build self-healing CI/CD pipelines, scale Internal Developer Portals (IDP), drive Google SRE/DORA adoption, and achieve $3M+ in cloud cost optimization.
            </p>

            {/* Certifications Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {certifications.map((cert) => (
                <div 
                  key={cert.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#334155',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                  }}
                >
                  <Award size={14} style={{ color: cert.color }} />
                  {cert.badge}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button 
                onClick={onOpenAdvisoryModal}
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.75rem' }}
              >
                <Sparkles size={18} />
                Request Executive Advisory
                <ArrowRight size={16} />
              </button>

              <a 
                href="#casestudies"
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.75rem' }}
              >
                <Terminal size={18} />
                Explore Case Studies
              </a>
            </div>
          </div>

          {/* Right Visual / Key Stats Panel */}
          <div className="glass-panel" style={{ padding: '2rem', position: 'relative', background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)', border: '1px solid #334155', boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc', fontWeight: 700, fontSize: '1rem' }}>
                <Cpu style={{ color: '#38bdf8' }} size={20} />
                Enterprise Impact Summary
              </div>
              <span className="badge-glow" style={{ fontSize: '0.75rem', background: 'rgba(37, 99, 235, 0.2)', color: '#60a5fa', border: '1px solid rgba(96, 165, 250, 0.3)' }}>Principal Track Record</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {keyStats.map((stat, i) => (
                <div 
                  key={i} 
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    padding: '1.25rem 1rem',
                  }}
                >
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1, color: i === 0 ? '#38bdf8' : i === 1 ? '#34d399' : i === 2 ? '#fbbf24' : '#60a5fa' }}>
                    {stat.value}
                  </div>
                  <div style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.88rem', marginTop: '0.4rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                    {stat.highlight}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Indicator */}
            <div style={{ 
              marginTop: '1.5rem', 
              paddingTop: '1rem', 
              borderTop: '1px solid #e2e8f0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              color: '#64748b'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#059669',
                  boxShadow: '0 0 8px #059669',
                  display: 'inline-block'
                }} />
                Available for Advisory & Fractional Architecture
              </div>
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
