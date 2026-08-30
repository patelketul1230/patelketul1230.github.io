import React, { useState } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';

const CaseStudies = ({ onOpenAdvisoryModal }) => {
  const [toggleState, setToggleState] = useState({
    fintech: 'after',
    saas: 'after',
    identity: 'after'
  });

  const handleToggle = (id) => {
    setToggleState(prev => ({
      ...prev,
      [id]: prev[id] === 'before' ? 'after' : 'before'
    }));
  };

  const caseStudies = [
    {
      id: 'fintech',
      company: 'Enterprise Financial & Mortgage Scale Platform',
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
        architectureTitle: 'Legacy Manual Troubleshooting & Fragmented Tooling',
        points: [
          'Engineers spent hours manually combing through build failure logs in CI/CD pipelines.',
          'Deployment practices varied across multi-team orgs with inconsistent release gates.',
          'Cloud spending on Azure lacked centralized FinOps governance and automated rightsizing.',
          'Developers navigated multiple portals to locate product dependencies and deployment statuses.'
        ]
      },
      after: {
        architectureTitle: 'Agentic DevOps Auto-Healing Pipeline & Developer Portal Ecosystem',
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
        architectureTitle: 'Standalone Jenkins & VPN-Dependent SSH Access',
        points: [
          'Single standalone Jenkins server creating execution bottlenecks and single-point-of-failure risks.',
          'Remote server administration heavily reliant on VPN connectivity and legacy bastion hosts.',
          'Nginx web server logs lacked centralized real-time querying, delaying incident resolution.'
        ]
      },
      after: {
        architectureTitle: 'Highly Available Kubernetes Controller-Agent Architecture',
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
        architectureTitle: 'Manual ClickOps Deployments & Fragmented Auth',
        points: [
          'AWS infrastructure managed manually, leading to configuration drift and slow environment provisioning.',
          'Fragmented user management across AWS, GitLab, Grafana, Jenkins, and SonarQube without SSO.',
          'Kubernetes logs dispersed across nodes with no real-time aggregated search.'
        ]
      },
      after: {
        architectureTitle: 'Modular Terraform AWS Architecture & Keycloak SAML SSO',
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
    <section id="casestudies" style={{ padding: '5rem 0', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
            Proven Advisory Track Record
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Enterprise Case Studies & Transformations
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Interactive architectural evolution breakdown across financial tech, global SaaS, and enterprise security platforms. Toggle between <strong style={{ color: '#ef4444' }}>Before</strong> and <strong style={{ color: '#10b981' }}>After</strong> states to see the engineering impact.
          </p>
        </div>

        {/* Case Studies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {caseStudies.map((study) => {
            const currentState = toggleState[study.id];
            const activeData = currentState === 'before' ? study.before : study.after;

            return (
              <div 
                key={study.id}
                className="glass-panel"
                style={{
                  padding: '2.5rem',
                  border: currentState === 'after' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
                  <div>
                    <span className="badge-glow" style={{ marginBottom: '0.5rem' }}>{study.tag}</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginTop: '0.3rem' }}>
                      {study.company}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#9ca3af', fontSize: '0.88rem', marginTop: '0.4rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#6366f1', fontWeight: 600 }}>
                        <Building2 size={15} /> {study.role}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={15} /> {study.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={15} /> {study.location}
                      </span>
                    </div>
                  </div>

                  {/* Before / After Toggle Button */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(0,0,0,0.4)', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: currentState === 'before' ? '#ef4444' : '#6b7280' }}>
                      BEFORE
                    </span>
                    <button 
                      onClick={() => handleToggle(study.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: currentState === 'after' ? '#10b981' : '#ef4444',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      title="Toggle Architecture State"
                    >
                      {currentState === 'after' ? <ToggleRight size={34} /> : <ToggleLeft size={34} />}
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: currentState === 'after' ? '#10b981' : '#6b7280' }}>
                      AFTER (TRANSFORMED)
                    </span>
                  </div>
                </div>

                {/* Metrics Pill Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                  {study.impactMetrics.map((metric, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '0.85rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>{metric.value}</div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600 }}>{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Active Architecture Display */}
                <div style={{
                  background: currentState === 'after' ? 'rgba(16, 185, 129, 0.04)' : 'rgba(239, 68, 68, 0.04)',
                  border: currentState === 'after' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  marginBottom: '1.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: currentState === 'after' ? '#34d399' : '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>
                    {currentState === 'after' ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
                    {activeData.architectureTitle}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                    {activeData.points.map((point, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#e5e7eb', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        <span style={{ color: currentState === 'after' ? '#10b981' : '#ef4444', fontWeight: 'bold', marginTop: '2px' }}>
                          {currentState === 'after' ? '✓' : '✗'}
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600, marginRight: '0.5rem' }}>Tech Ecosystem:</span>
                  {study.tech.map((t) => (
                    <span 
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: '#a5b4fc',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
