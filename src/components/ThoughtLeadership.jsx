import React from 'react';
import { BookOpen, GitBranch, ExternalLink, Sparkles, ArrowRight, ArrowUpRight, Terminal, Star, GitFork } from 'lucide-react';

const ThoughtLeadership = ({ onOpenAdvisoryModal }) => {
  const mediumLink = "https://medium.com/@kpsub786";
  const githubLink = "https://github.com/patelketul1230";

  const featuredArticles = [
    {
      title: 'Architecting Agentic DevOps Pipelines: Autonomous CI/CD Failure Analysis & Auto-PR Repairs',
      category: 'Agentic DevOps & AI Engineering',
      excerpt: 'How AI agents can intercept failed pipeline logs, diagnose root cause errors in real-time, and automatically generate fix pull requests to reduce manual troubleshooting effort by 60%.',
      readTime: '7 min read',
      tag: 'Featured Deep Dive',
      url: mediumLink
    },
    {
      title: 'Scaling Internal Developer Portals (IDP): Architecture & Developer Scorecards',
      category: 'Platform Engineering',
      excerpt: 'A practical enterprise guide to establishing unified microservice catalogs, self-service infrastructure templates, and automated developer compliance scorecards.',
      readTime: '6 min read',
      tag: 'Platform Leadership',
      url: mediumLink
    },
    {
      title: 'Defining SLIs, SLOs & Error Budgets as Code with Terraform & Dynatrace',
      category: 'Site Reliability Engineering',
      excerpt: 'Lessons learned from rolling out SRE best practices across enterprise engineering teams: defining Dynatrace metrics via reusable Terraform modules.',
      readTime: '8 min read',
      tag: 'SRE Best Practices',
      url: mediumLink
    }
  ];

  const featuredRepos = [
    {
      name: 'AWS SageMaker Bedrock MLOps Pipeline',
      description: 'Production-grade serverless MLOps pipeline orchestrating Bedrock model package groups, automated quality gates, and canary deployments.',
      tech: ['Python', 'Terraform', 'AWS Lambda', 'Bedrock', 'SageMaker'],
      stars: 42,
      forks: 18,
      url: `${githubLink}/aws-sagemaker-mlops-pipeline`
    },
    {
      name: 'Agentic DevOps Pipeline Repair Engine',
      description: 'Autonomous webhook listener analyzing build failures, interfacing with LLMs for root cause identification, and submitting remediation PRs.',
      tech: ['Python', 'GitHub Actions', 'OpenAI/Bedrock', 'Docker'],
      stars: 68,
      forks: 24,
      url: `${githubLink}/Agentic-DevOps-Webhook`
    },
    {
      name: 'Enterprise Kubernetes SRE & Observability Module',
      description: 'Modular Terraform framework defining core Dynatrace SLIs, SLOs, Prometheus rules, and Loki log pipelines for high-availability clusters.',
      tech: ['Terraform', 'Kubernetes', 'Helm', 'Grafana', 'Dynatrace'],
      stars: 54,
      forks: 15,
      url: `${githubLink}/Kubernetes-SRE-Modules`
    }
  ];

  return (
    <section id="thoughtleadership" style={{ padding: '5.5rem 0', background: '#ffffff' }}>
      <div className="container-custom">
        
        {/* SECTION 1: Medium Articles */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
                Thought Leadership & Engineering Guides
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem', color: '#0f172a' }}>
                Medium Technical Publications
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px' }}>
                Deep dives on <strong style={{ color: '#1d4ed8' }}>Agentic DevOps</strong>, SRE frameworks, Port.io Developer Portals, and Cloud FinOps architecture.
              </p>
            </div>

            <a 
              href={mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.9rem', padding: '0.7rem 1.25rem' }}
            >
              <BookOpen size={18} style={{ color: '#2563eb' }} />
              View Medium Profile (@kpsub786)
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Articles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {featuredArticles.map((article, idx) => (
              <div 
                key={idx}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  background: '#ffffff'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span className="badge-glow" style={{ fontSize: '0.75rem' }}>{article.tag}</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{article.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.85rem', lineHeight: 1.35 }}>
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {article.excerpt}
                  </p>
                </div>

                <a 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#2563eb',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  Read Full Article on Medium
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>


        {/* SECTION 2: Featured Public GitHub Repositories */}
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>
                Open-Source Infrastructure
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem', color: '#0f172a' }}>
                Featured Public GitHub Repositories
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '650px' }}>
                Production-ready codebases, Terraform modules, and MLOps reference architectures.
              </p>
            </div>

            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.9rem', padding: '0.7rem 1.25rem' }}
            >
              <GitBranch size={18} style={{ color: '#059669' }} />
              Explore All Repos (@patelketul1230)
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Repos Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {featuredRepos.map((repo, idx) => (
              <div 
                key={idx}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  border: '1px solid #a7f3d0',
                  background: '#ffffff'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857', fontWeight: 700, fontSize: '1.1rem' }}>
                      <Terminal size={18} />
                      {repo.name}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {repo.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {repo.tech.map((t) => (
                      <span key={t} style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Star size={14} style={{ color: '#d97706' }} /> {repo.stars}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><GitFork size={14} /> {repo.forks}</span>
                  </div>

                  <a 
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#059669',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    View Code
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThoughtLeadership;
