import React, { useState } from 'react';
import { Cpu, Terminal, ShieldCheck, Database, Cloud, Activity, Bot, Code, Filter, CheckCircle2 } from 'lucide-react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'DevOps & Platform',
    'SRE & Observability',
    'Cloud Infrastructure',
    'Security & Identity',
    'AI / LLMOps',
    'Databases & Scripting'
  ];

  const skillMatrix = [
    // DevOps & Platform
    { name: 'Kubernetes (CKA)', category: 'DevOps & Platform', icon: '☸️', level: 'Expert / Principal', details: 'Controller-agent architecture, Helm, CRDs, Guacamole ingress' },
    { name: 'Terraform (IaC)', category: 'DevOps & Platform', icon: '🏗️', level: 'Expert / Principal', details: 'Reusable modules for AWS/Azure, Dynatrace SLI/SLO modules' },
    { name: 'Docker & GitOps', category: 'DevOps & Platform', icon: '🐳', level: 'Expert', details: 'Multi-stage builds, Argo CD, Helm release automation' },
    { name: 'Port.io (IDP)', category: 'DevOps & Platform', icon: '🚪', level: 'Expert / Principal', details: 'Internal Developer Platform, self-service catalog setup' },
    { name: 'CI/CD Orchestration', category: 'DevOps & Platform', icon: '🔄', level: 'Expert', details: 'Jenkins HA, Harness, Argo CD, Orkes Conductor' },
    
    // SRE & Observability
    { name: 'Dynatrace SLI/SLO', category: 'SRE & Observability', icon: '📊', level: 'Expert / Principal', details: 'Error budget automation, Google SRE best practices' },
    { name: 'Grafana & Loki', category: 'SRE & Observability', icon: '📈', level: 'Expert', details: 'Nginx telemetry, log aggregation, MTTR -40% reduction' },
    { name: 'Prometheus & ELK', category: 'SRE & Observability', icon: '🔍', level: 'Expert', details: 'Elasticsearch, Logstash, Kibana K8s cluster deployment' },
    { name: 'Google DORA Metrics', category: 'SRE & Observability', icon: '🎯', level: 'Expert / Partner', details: 'Deployment frequency, lead time, MTTR, change failure rate' },

    // Cloud Infrastructure
    { name: 'AWS Cloud Architect', category: 'Cloud Infrastructure', icon: '☁️', level: 'AWS Certified', details: 'Bedrock, OpenSearch, Lambda, SageMaker, IAM, VPC' },
    { name: 'Azure Administrator', category: 'Cloud Infrastructure', icon: '🔷', level: 'Azure Certified', details: '$3M cost savings, Azure DevOps, AKS, FinOps governance' },
    { name: 'Hybrid & On-Premises', category: 'Cloud Infrastructure', icon: '🖥️', level: 'Advanced', details: 'Bare-metal Kubernetes, hybrid networking, VPN replacement' },

    // Security & Identity
    { name: 'Keycloak & SAML SSO', category: 'Security & Identity', icon: '🔐', level: 'Expert', details: 'Centralized OAuth/SAML for AWS, GitLab, Jenkins, SonarQube' },
    { name: 'Snyk & SonarQube', category: 'Security & Identity', icon: '🛡️', level: 'Expert', details: 'Automated vulnerability scanning & static code analysis' },
    { name: 'Renovate & ArmorCode', category: 'Security & Identity', icon: '🤖', level: 'Advanced', details: 'Automated dependency updates & security posture management' },
    { name: 'Sysdig & RBAC', category: 'Security & Identity', icon: '👁️', level: 'Advanced', details: 'Container runtime security & Kubernetes RBAC policies' },

    // AI / LLMOps
    { name: 'Agentic DevOps AI', category: 'AI / LLMOps', icon: '🤖', level: 'Architect', details: 'Auto failure diagnosis, self-healing CI/CD, auto-PR repair (60% cut)' },
    { name: 'AWS Bedrock & RAG', category: 'AI / LLMOps', icon: '🧠', level: 'Architect', details: 'Retrieval-Augmented Generation pipelines, vector index integration' },
    { name: 'SageMaker MLOps', category: 'AI / LLMOps', icon: '⚙️', level: 'Architect', details: 'Model Package Groups, safety evaluations, canary deployments' },

    // Databases & Scripting
    { name: 'Python & Groovy', category: 'Databases & Scripting', icon: '🐍', level: 'Advanced', details: 'Pipeline automation, AI agent scripts, Jenkins shared libraries' },
    { name: 'Bash & Shell', category: 'Databases & Scripting', icon: '💻', level: 'Expert', details: 'System administration, Linux kernel tuning, automation scripts' },
    { name: 'PostgreSQL & Redis', category: 'Databases & Scripting', icon: '🐘', level: 'Advanced', details: 'Stateful database deployments, caching layers, MySQL, MongoDB' }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillMatrix 
    : skillMatrix.filter(s => s.category === activeCategory);

  return (
    <section id="techstack" style={{ padding: '5rem 0', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
            Technical Proficiency
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Enterprise Technology & Tooling Matrix
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Categorized overview of Ketul's hands-on expertise across Cloud Infrastructure, SRE, Platform Engineering, Security, and LLMOps.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: activeCategory === cat ? '1px solid #6366f1' : '1px solid var(--border-color)',
                background: activeCategory === cat ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Matrix Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.3rem' }}>{skill.icon}</span>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                      {skill.name}
                    </h3>
                  </div>
                  <span className="badge-glow" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>
                    {skill.level}
                  </span>
                </div>

                <p style={{ fontSize: '0.82rem', color: '#9ca3af', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {skill.details}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.6rem', fontSize: '0.75rem', color: '#6366f1', fontWeight: 600 }}>
                <span>{skill.category}</span>
                <CheckCircle2 size={14} style={{ color: '#10b981' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
