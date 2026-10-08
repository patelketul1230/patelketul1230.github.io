import React, { useState } from 'react';
import { Cpu, Terminal, ShieldCheck, Database, Cloud, Activity, Bot, Code, Filter, CheckCircle2, Search } from 'lucide-react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
    { name: 'Internal Developer Portals (IDP)', category: 'DevOps & Platform', icon: '🚪', level: 'Expert / Principal', details: 'Self-service developer workflows, service catalog setup' },
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

  const filteredSkills = skillMatrix.filter(s => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         s.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="techstack" style={{ padding: '5.5rem 0', background: '#f8fafc' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
            Technical Proficiency
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem', color: '#0f172a' }}>
            Enterprise Technology & Tooling Matrix
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Categorized overview of Ketul's hands-on expertise across Cloud Infrastructure, SRE, Platform Engineering, Security, and LLMOps.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input 
              type="text"
              placeholder="Search tools (e.g. Terraform, Kubernetes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.8rem 0.55rem 2.4rem',
                borderRadius: '10px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Pill Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: activeCategory === cat ? '1px solid #1d4ed8' : '1px solid #cbd5e1',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(37, 99, 235, 0.2)' : '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <div 
                key={index}
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>{skill.icon}</span>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                        {skill.name}
                      </h3>
                    </div>
                    <span className="badge-glow" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>
                      {skill.level}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {skill.details}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '0.6rem', fontSize: '0.75rem', color: '#1d4ed8', fontWeight: 600 }}>
                  <span>{skill.category}</span>
                  <CheckCircle2 size={14} style={{ color: '#059669' }} />
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              No tools found matching "{searchQuery}". Try searching for Kubernetes, Terraform, or SRE.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
