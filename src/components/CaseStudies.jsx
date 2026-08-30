import React, { useState } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap, Layers, Columns2 } from 'lucide-react';

const CaseStudies = ({ onOpenAdvisoryModal }) => {
  const [activeView, setActiveView] = useState('split'); // 'split' | 'before' | 'after'

  const caseStudies = [
    {
      id: 'fintech',
      company: 'Enterprise Financial & Mortgage Platform',
      role: 'Principal Platform & SRE Architect (Lead)',
      period: 'Jan 2026 - Present (DevOps Lead: 2025)',
      location: 'United States',
      tag: 'Enterprise Transformation & Agentic DevOps',
      impactMetrics: [
        { label: 'Manual Effort Cut', value: '60%' },
        { label: 'Azure FinOps Savings', value: '$3M' },
        { label: 'Framework Partner', value: 'Google SRE' },
        { label: 'Platform IDP', value: 'Internal Portal' }
      ],
      before: {
        architectureTitle: 'Legacy Architecture (Before Transformation)',
        points: [
          'Engineers spent hours manually combing through build failure logs in CI/CD pipelines.',
          'Deployment practices varied across multi-team orgs with inconsistent release gates.',
          'Cloud spending on Azure lacked centralized FinOps governance and automated rightsizing.',
          'Developers navigated multiple portals to locate product dependencies and deployment statuses.'
        ]
      },
      after: {
        architectureTitle: 'Transformed Platform & Agentic Ecosystem (After)',
        points: [
          'Architected an Agentic DevOps pipeline auto-analyzing build failures and generating fix PRs (60% troubleshooting effort reduction).',
          'Standardized Continuous Deployment (CD) practices across the entire organization.',
          'Partnered with Google DORA metrics expert to establish DORA performance benchmarks.',
          'Partnered with Google SRE manager to author Terraform modules defining Dynatrace SLIs, SLOs, and error budgets.',
          'Achieved $3M Azure cost savings through infrastructure right-sizing & FinOps governance.',
          'Built Internal Developer Portal enabling self-service catalog access and code deployment.'
        ]
      },
      tech: ['Agentic AI', 'Internal Developer Portal (IDP)', 'Terraform', 'Dynatrace', 'Azure FinOps', 'Google DORA/SRE', 'Snyk', 'SonarQube', 'Renovate']
    },
    {
      id: 'saas',
      company: 'Global Cloud & SaaS Infrastructure',
      role: 'DevOps Engineering Lead',
      period: 'Jan 2023 - Mar 2025',
      location: 'San Francisco, CA, United States',
      tag: 'Kubernetes HA Scaling & Zero-Trust Remote Access',
      impactMetrics: [
        { label: 'Incident Response MTTR', value: '-40%' },
        { label: 'Remote Access Zero-Trust', value: '100% K8s' },
        { label: 'CI/CD Scalability', value: 'HA Controller' }
      ],
      before: {
        architectureTitle: 'Legacy Infrastructure (Before)',
        points: [
          'Single standalone Jenkins server creating execution bottlenecks and single-point-of-failure risks.',
          'Remote server administration heavily reliant on VPN connectivity and legacy bastion hosts.',
          'Nginx web server logs lacked centralized real-time querying, delaying incident resolution.'
        ]
      },
      after: {
        architectureTitle: 'High-Availability K8s & Zero-Trust Access (After)',
        points: [
          'Migrated standalone Jenkins to HA Kubernetes controller–agent architecture via Helm charts, boosting scalability.',
          'Deployed Guacamole on Kubernetes cluster providing browser-based SSH access, eliminating VPN dependencies.',
          'Configured Nginx observability with Grafana and Loki, cutting incident response times by 40%.'
        ]
      },
      tech: ['Kubernetes', 'Helm', 'Jenkins HA', 'Guacamole', 'Grafana', 'Loki', 'Nginx', 'Docker']
    },
    {
      id: 'identity',
      company: 'Multi-Cloud Identity & Security Platform',
      role: 'Infrastructure & SRE Specialist',
      period: 'Aug 2021 - Jan 2023',
      location: 'India / Global',
      tag: 'Infrastructure as Code Migration & Centralized SAML SSO',
      impactMetrics: [
        { label: 'Terraform IaC Coverage', value: '100%' },
        { label: 'Centralized SAML SSO', value: 'Keycloak' },
        { label: 'Observability', value: 'ELK Stack' }
      ],
      before: {
        architectureTitle: 'Manual ClickOps & Fragmented Auth (Before)',
        points: [
          'AWS infrastructure managed manually, leading to configuration drift and slow environment provisioning.',
          'Fragmented user management across AWS, GitLab, Grafana, Jenkins, and SonarQube without SSO.',
          'Kubernetes logs dispersed across nodes with no real-time aggregated search.'
        ]
      },
      after: {
        architectureTitle: 'Modular Terraform IaC & SAML SSO Ecosystem (After)',
        points: [
          'Led full migration of AWS infrastructure to Terraform reusable modules for frontend/backend services.',
          'Configured Keycloak SAML authentication in K8s cluster centralizing access across AWS, GitLab, Grafana, Jenkins & SonarQube.',
          'Deployed ELK Stack via Helm for centralized Kubernetes logging and Grafana dashboards for health tracking.'
        ]
      },
      tech: ['Terraform', 'AWS', 'Keycloak', 'SAML', 'Kubernetes', 'ELK Stack', 'Grafana', 'SonarQube']
    }
  ];

  return (
    <section id="casestudies" style={{ padding: '5.5rem 0', background: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
            Executive Advisory Impact
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Enterprise Case Studies & Transformations
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Side-by-side architectural analysis comparing legacy infrastructure vs. transformed platform ecosystems.
          </p>

          {/* View Filter Mode Selector */}
          <div style={{ display: 'inline-flex', gap: '0.4rem', background: 'rgba(0,0,0,0.3)', padding: '0.35rem', borderRadius: '10px', marginTop: '1.5rem', border: '1px solid var(--border-color)' }}>
            <button 
              onClick={() => setActiveView('split')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: 'none',
                background: activeView === 'split' ? '#3b82f6' : 'transparent',
                color: activeView === 'split' ? '#fff' : '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Columns2 size={15} /> Side-by-Side View
            </button>
            <button 
              onClick={() => setActiveView('after')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: 'none',
                background: activeView === 'after' ? '#10b981' : 'transparent',
                color: activeView === 'after' ? '#fff' : '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <CheckCircle2 size={15} /> Transformed (After) Only
            </button>
            <button 
              onClick={() => setActiveView('before')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: 'none',
                background: activeView === 'before' ? '#f43f5e' : 'transparent',
                color: activeView === 'before' ? '#fff' : '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <AlertTriangle size={15} /> Legacy (Before) Only
            </button>
          </div>
        </div>

        {/* Case Studies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="glass-panel"
              style={{ padding: '2.25rem' }}
            >
              {/* Card Header Info */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
                <div>
                  <span className="badge-glow" style={{ marginBottom: '0.5rem' }}>{study.tag}</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginTop: '0.3rem' }}>
                    {study.company}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: '#94a3b8', fontSize: '0.88rem', marginTop: '0.4rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#60a5fa', fontWeight: 600 }}>
                      <Building2 size={15} /> {study.role}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={15} /> {study.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={15} /> {study.location}
                    </span>
                  </div>
                </div>

                {/* Metrics Pill Row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {study.impactMetrics.map((metric, i) => (
                    <div key={i} style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.6rem 0.85rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981', lineHeight: 1 }}>{metric.value}</div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600, marginTop: '0.2rem' }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side-by-Side Comparison Container */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: activeView === 'split' ? '1fr 1fr' : '1fr',
                  gap: '1.5rem',
                  marginBottom: '1.75rem'
                }}
                className="comparison-grid"
              >
                {/* BEFORE PANEL */}
                {(activeView === 'split' || activeView === 'before') && (
                  <div style={{
                    background: 'rgba(244, 63, 94, 0.03)',
                    border: '1px solid rgba(244, 63, 94, 0.25)',
                    borderRadius: '14px',
                    padding: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#fb7185', fontWeight: 700, fontSize: '1.05rem' }}>
                      <AlertTriangle size={18} />
                      {study.before.architectureTitle}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {study.before.points.map((pt, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.55 }}>
                          <span style={{ color: '#f43f5e', fontWeight: 'bold', marginTop: '1px' }}>✗</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* AFTER PANEL */}
                {(activeView === 'split' || activeView === 'after') && (
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.03)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '14px',
                    padding: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#34d399', fontWeight: 700, fontSize: '1.05rem' }}>
                      <CheckCircle2 size={18} />
                      {study.after.architectureTitle}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {study.after.points.map((pt, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#f8fafc', fontSize: '0.9rem', lineHeight: 1.55 }}>
                          <span style={{ color: '#10b981', fontWeight: 'bold', marginTop: '1px' }}>✓</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Stack Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginRight: '0.5rem' }}>Technology Stack:</span>
                {study.tech.map((t) => (
                  <span 
                    key={t}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#93c5fd',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
