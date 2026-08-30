import React from 'react';
import { Bot, Layers, Activity, DollarSign, BrainCircuit, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const Services = ({ onOpenAdvisoryModal }) => {
  const pillars = [
    {
      id: 'agentic-devops',
      icon: Bot,
      title: 'Agentic DevOps & Self-Healing Pipelines',
      highlight: '60% Troubleshooting Effort Reduction',
      description: 'Architecting AI-driven autonomous pipelines that analyze build/test failures in real-time, execute root-cause analysis, and auto-submit fix Pull Requests directly to developer workflows.',
      capabilities: [
        'Automated CI/CD Pipeline Error Remediation',
        'Continuous Deployment (CD) Organizational Standardization',
        'Snyk, SonarQube & Renovate Security Gate Integration',
        'Harness, Argo CD & Orkes Conductor Workflow Automation'
      ],
      color: '#6366f1'
    },
    {
      id: 'platform-engineering',
      icon: Layers,
      title: 'Platform Engineering & Developer Portals (IDP)',
      highlight: 'Internal Developer Portals (IDP)',
      description: 'Empowering engineering teams with unified Internal Developer Portals (IDP). Eliminating ClickOps, standardizing environment provisioning, and establishing single-pane product catalog visibility.',
      capabilities: [
        'Internal Developer Portal & Scorecard Architecture',
        'Self-Service Infrastructure Provisioning',
        'Automated Developer Onboarding & Compliance Controls',
        'Kubernetes Microservices Catalog Integration'
      ],
      color: '#06b6d4'
    },
    {
      id: 'sre-observability',
      icon: Activity,
      title: 'Enterprise SRE & Observability Infrastructure',
      highlight: 'Google SRE & DORA Framework Partner',
      description: 'Implementing battle-tested Site Reliability Engineering practices. Defining SLIs, SLOs, and Error Budgets as code using Terraform modules mapped directly to Dynatrace and Grafana telemetry.',
      capabilities: [
        'Dynatrace SLI/SLO Infrastructure as Code (Terraform)',
        'Grafana, Loki & Prometheus Observability Stacks',
        'Google DORA Engineering Delivery Metric Dashboards',
        'Incident Response & Chaos Engineering Playbooks'
      ],
      color: '#10b981'
    },
    {
      id: 'cloud-finops',
      icon: DollarSign,
      title: 'Cloud FinOps & Infrastructure Optimization',
      highlight: '$3M+ Verified Azure Cost Reduction',
      description: 'Comprehensive multi-cloud infrastructure audits across AWS and Azure. Optimizing compute allocations, rightsizing Kubernetes node pools, and eliminating architectural waste without compromising uptime.',
      capabilities: [
        'Multi-Cloud FinOps Governance & Cost Allocation',
        'Kubernetes Node Autoscaling & Reserved Instance Strategy',
        'Azure & AWS Architecture Efficiency Reviews',
        'Automated Waste Reduction Pipelines'
      ],
      color: '#f59e0b'
    },
    {
      id: 'llmops-rag',
      icon: BrainCircuit,
      title: 'LLMOps & Secure RAG Architecture',
      highlight: 'AWS Bedrock & Model Registry Governance',
      description: 'Building production-grade MLOps and LLMOps pipelines. Enabling secure enterprise adoption of Bedrock models, vector databases, RAG workflows, and automated safety evaluations.',
      capabilities: [
        'AWS Bedrock & SageMaker MLOps Pipeline Automation',
        'Retrieval-Augmented Generation (RAG) Security Shields',
        'SageMaker Model Package Group & Canary Deployments',
        'Automated LLM Benchmark & Guardrail Testing'
      ],
      color: '#ec4899'
    }
  ];

  return (
    <section id="services" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
            Enterprise Capabilities
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Advisory & Architecture Pillars
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Transforming software delivery speed, reliability, and cloud economic efficiency for high-scale enterprise engineering organizations.
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }} className="services-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${pillar.color}, transparent)`
                }} />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `rgba(${pillar.color === '#6366f1' ? '99, 102, 241' : pillar.color === '#06b6d4' ? '6, 182, 212' : pillar.color === '#10b981' ? '16, 185, 129' : pillar.color === '#f59e0b' ? '245, 158, 11' : '236, 72, 153'}, 0.15)`,
                      border: `1px solid ${pillar.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      color: pillar.color
                    }}>
                      <Icon size={24} />
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: pillar.color
                    }}>
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {pillar.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                    {pillar.capabilities.map((cap, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#e5e7eb' }}>
                        <CheckCircle2 size={15} style={{ color: pillar.color, flexShrink: 0, marginTop: '2px' }} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={onOpenAdvisoryModal}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border-color)',
                    color: '#f3f4f6',
                    padding: '0.65rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    width: '100%',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = pillar.color;
                    e.currentTarget.style.color = pillar.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = '#f3f4f6';
                  }}
                >
                  <span>Request Strategy Audit</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
