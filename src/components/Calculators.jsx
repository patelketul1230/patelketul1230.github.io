import React, { useState } from 'react';
import { BarChart2, DollarSign, Calculator, Award, ArrowRight, CheckCircle2, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';

const Calculators = ({ onOpenAdvisoryModal }) => {
  // DORA Assessment State
  const [doraInputs, setDoraInputs] = useState({
    frequency: 'daily', // daily, weekly, monthly, quarterly
    leadTime: 'days', // hours, days, weeks, months
    mttr: 'hours', // subhour, hours, days, weeks
    failureRate: 'low' // low (0-5%), medium (6-15%), high (16-30%), critical (>30%)
  });

  // Cloud Spend State ($ in thousands)
  const [cloudSpend, setCloudSpend] = useState(1500); // $1.5M default

  // Calculate DORA Rating
  const calculateDora = () => {
    let score = 0;
    if (doraInputs.frequency === 'daily') score += 3;
    else if (doraInputs.frequency === 'weekly') score += 2;
    else if (doraInputs.frequency === 'monthly') score += 1;

    if (doraInputs.leadTime === 'hours') score += 3;
    else if (doraInputs.leadTime === 'days') score += 2;
    else if (doraInputs.leadTime === 'weeks') score += 1;

    if (doraInputs.mttr === 'subhour') score += 3;
    else if (doraInputs.mttr === 'hours') score += 2;
    else if (doraInputs.mttr === 'days') score += 1;

    if (doraInputs.failureRate === 'low') score += 3;
    else if (doraInputs.failureRate === 'medium') score += 2;
    else if (doraInputs.failureRate === 'high') score += 1;

    if (score >= 10) return { tier: 'Elite Performer', color: '#10b981', desc: 'Your team is performing in the top tier! We can help implement Agentic Auto-PR Fixes & Port.io IDP to push to zero-touch continuous delivery.' };
    if (score >= 7) return { tier: 'High Performer', color: '#38bdf8', desc: 'Solid foundation. Targeted SRE / Dynatrace SLI-SLO frameworks and CD standardization can elevate your delivery metrics to Elite tier.' };
    if (score >= 4) return { tier: 'Medium Performer', color: '#f59e0b', desc: 'Manual troubleshooting and deployment drift are slowing release velocity. An Agentic DevOps & Terraform IaC audit can unlock 40-60% efficiency gains.' };
    return { tier: 'Low Performer (Urgent Advisory Needed)', color: '#ef4444', desc: 'High MTTR and manual ClickOps are creating severe delivery risks. Let us architect an automated CI/CD pipeline and zero-trust SRE framework.' };
  };

  const doraResult = calculateDora();

  // Calculate FinOps Savings (20-35%)
  const minSavings = Math.round(cloudSpend * 0.20);
  const maxSavings = Math.round(cloudSpend * 0.35);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="calculators" style={{ padding: '5rem 0' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
            Interactive Strategy Tools
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem', color: '#0f172a' }}>
            DORA Assessment & Cloud FinOps Calculators
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Benchmark your engineering delivery performance and calculate projected annual cloud cost optimization based on Ketul's $3M+ Azure cost savings track record.
          </p>
        </div>

        {/* Tools Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="calc-grid">
          
          {/* TOOL 1: DORA Metric Assessment */}
          <div className="glass-panel" style={{ padding: '2.25rem', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                <BarChart2 size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a' }}>
                  DORA Maturity Scorecard
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Google DORA & SRE Benchmarking Tool</p>
              </div>
            </div>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  1. Deployment Frequency
                </label>
                <select 
                  value={doraInputs.frequency} 
                  onChange={(e) => setDoraInputs({ ...doraInputs, frequency: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    outline: 'none'
                  }}
                >
                  <option value="daily">Multiple deployments per day (On Demand)</option>
                  <option value="weekly">Between once per week and once per month</option>
                  <option value="monthly">Between once per month and once every 6 months</option>
                  <option value="quarterly">Fewer than once per 6 months</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  2. Lead Time for Changes (Commit to Production)
                </label>
                <select 
                  value={doraInputs.leadTime} 
                  onChange={(e) => setDoraInputs({ ...doraInputs, leadTime: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    outline: 'none'
                  }}
                >
                  <option value="hours">Less than 1 day (&lt; 24 hours)</option>
                  <option value="days">Between 1 day and 1 week</option>
                  <option value="weeks">Between 1 week and 1 month</option>
                  <option value="months">More than 1 month</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  3. Mean Time to Restore (MTTR Incident Recovery)
                </label>
                <select 
                  value={doraInputs.mttr} 
                  onChange={(e) => setDoraInputs({ ...doraInputs, mttr: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    outline: 'none'
                  }}
                >
                  <option value="subhour">Less than 1 hour (&lt; 60 mins)</option>
                  <option value="hours">Less than 1 day</option>
                  <option value="days">Between 1 day and 1 week</option>
                  <option value="weeks">More than 1 week</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  4. Change Failure Rate
                </label>
                <select 
                  value={doraInputs.failureRate} 
                  onChange={(e) => setDoraInputs({ ...doraInputs, failureRate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    outline: 'none'
                  }}
                >
                  <option value="low">0% - 5% (Low Failure Rate)</option>
                  <option value="medium">6% - 15% (Moderate Risk)</option>
                  <option value="high">16% - 30% (High Failure Rate)</option>
                  <option value="critical">&gt; 30% (Critical Drift)</option>
                </select>
              </div>
            </div>

            {/* Output Card */}
            <div style={{
              background: '#f8fafc',
              border: `1px solid ${doraResult.color}50`,
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>ASSESSED DORA TIER:</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: doraResult.color }}>{doraResult.tier}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.5, marginBottom: '1rem' }}>
                {doraResult.desc}
              </p>
              <button 
                onClick={() => { triggerConfetti(); onOpenAdvisoryModal(); }}
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}
              >
                Request DORA Transformation Roadmap
                <ArrowRight size={16} />
              </button>
            </div>
          </div>


          {/* TOOL 2: Cloud FinOps Savings Estimator */}
          <div className="glass-panel" style={{ padding: '2.25rem', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
                <DollarSign size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a' }}>
                  Cloud FinOps ROI Estimator
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Based on $3M+ Azure Cost Reduction Strategy</p>
              </div>
            </div>

            {/* Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>
                  Annual AWS / Azure Cloud Spend:
                </label>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0284c7' }}>
                  ${(cloudSpend / 1000).toFixed(2)}M / year
                </span>
              </div>

              <input 
                type="range"
                min="200"
                max="10000"
                step="100"
                value={cloudSpend}
                onChange={(e) => setCloudSpend(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#059669',
                  cursor: 'pointer',
                  height: '8px',
                  borderRadius: '4px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>
                <span>$200K / yr</span>
                <span>$5M / yr</span>
                <span>$10M+ / yr</span>
              </div>
            </div>

            {/* Estimated Savings Display */}
            <div style={{
              background: 'linear-gradient(135deg, #ecfdf5 0%, #f0f9ff 100%)',
              border: '1px solid #a7f3d0',
              borderRadius: '14px',
              padding: '1.5rem',
              textAlign: 'center',
              marginBottom: '1.75rem'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 700, letterSpacing: '0.05em' }}>
                PROJECTED ANNUAL INFRASTRUCTURE SAVINGS
              </span>
              <div className="gradient-text-emerald" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.2rem 0' }}>
                ${(minSavings).toLocaleString()} - ${(maxSavings).toLocaleString()}
              </div>
              <p style={{ fontSize: '0.82rem', color: '#334155' }}>
                Typical 20% to 35% cost reduction achieved through Kubernetes rightsizing, reserved instance optimization, and automated waste elimination.
              </p>
            </div>

            {/* Key Optimization Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: '#059669' }} />
                <span>Kubernetes Node Pool & Pod Resource Requests Optimization</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: '#059669' }} />
                <span>Azure & AWS Orphaned Storage & Unattached Elastic IP Cleanup</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: '#059669' }} />
                <span>Automated Off-Hours Environment Shutdown Automation</span>
              </div>
            </div>

            <button 
              onClick={() => { triggerConfetti(); onOpenAdvisoryModal(); }}
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem', background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}
            >
              Request FinOps Infrastructure Audit
              <TrendingUp size={16} />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .calc-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Calculators;
