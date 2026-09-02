import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Terminal, Sparkles, Menu, X, ArrowRight, Layers, BarChart2, BookOpen, GitBranch } from 'lucide-react';

const Navbar = ({ onOpenAdvisoryModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Advisory Pillars', href: '#services', icon: Layers },
    { name: 'Case Studies', href: '#casestudies', icon: Terminal },
    { name: 'DORA & FinOps Tools', href: '#calculators', icon: BarChart2 },
    { name: 'Tech Capability', href: '#techstack', icon: Cpu },
    { name: 'Medium Blogs & Repos', href: '#thoughtleadership', icon: BookOpen },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid rgba(226, 232, 240, 0.5)',
        padding: scrolled ? '0.85rem 0' : '1.25rem 0',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none'
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo / Name */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
          }}>
            KP
          </div>
          <div>
            <div style={{ color: '#0f172a', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Ketul Patel
            </div>
            <div style={{ color: '#64748b', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Principal Platform & SRE Architect
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'none', mdDisplay: 'flex', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1d4ed8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
              >
                <Icon size={15} style={{ color: '#2563eb' }} />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={onOpenAdvisoryModal}
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
          >
            <Sparkles size={16} />
            Book Advisory
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem',
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#0f172a',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.5rem 0',
              }}
            >
              <link.icon size={18} style={{ color: '#2563eb' }} />
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
