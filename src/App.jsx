import React, { useState, useEffect } from 'react';
import ResumeTab from './components/ResumeTab';
import PortfolioTab from './components/PortfolioTab';
import ContactTab from './components/ContactTab';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('resume');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openProfile = () => {
    setIsOpen(true);
    setActiveTab('resume');
  };

  const closeProfile = () => {
    setIsOpen(false);
  };

  // --- STYLES ---
  const bodyStyle = {
    fontFamily: "'Poppins', sans-serif",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/BG.jpg')",
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: isMobile ? 'auto' : 'hidden',
    perspective: '2000px',
    margin: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  };

  const brochureStyle = isMobile
    ? {
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100vh',
        transformStyle: 'preserve-3d',
        transition: 'all 1s cubic-bezier(0.25,1,0.5,1)',
        boxShadow: 'none',
      }
    : {
        position: 'relative',
        width: isOpen ? '1050px' : '350px',
        height: '600px',
        transformStyle: 'preserve-3d',
        transition: 'all 1s cubic-bezier(0.25,1,0.5,1)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        transform: 'scale(1.2)',
      };

  const coverStyle = isMobile
    ? {
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 100,
        borderRadius: 0,
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/portal.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        paddingBottom: '125px',
        boxShadow: '5px 0 15px rgba(0,0,0,0.3)',
        transition: 'transform 0.5s ease-in-out',
        transform: isOpen ? 'translateY(-100%)' : 'translateY(0)',
      }
    : {
        position: 'absolute', top: 0, left: 0,
        width: '350px', height: '100%',
        zIndex: 50,
        transformOrigin: 'left',
        transition: 'transform 1s cubic-bezier(0.25,1,0.5,1)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        paddingBottom: '125px',
        backfaceVisibility: 'hidden',
        borderRadius: '8px',
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/portal.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '5px 0 15px rgba(0,0,0,0.3)',
        transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0)',
      };

  const insideStyle = isMobile
    ? {
        position: 'relative',
        opacity: 1,
        display: 'block',
        backgroundImage: "url('/NEW.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 0,
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
        paddingTop: '60px',
      }
    : {
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: "url('/NEW.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.5s ease-in 0.2s',
      };

  const tabs = [
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={bodyStyle}>

        {/* Mobile Nav Bar */}
        {isMobile && isOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%',
            background: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            zIndex: 9999, height: '60px',
            display: 'flex', justifyContent: 'space-around', alignItems: 'center',
            borderBottom: '1px solid #e2e8f0',
          }}>
            {tabs.map(tab => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontSize: '13px', fontWeight: 600,
                  color: activeTab === tab.id ? '#4f46e5' : '#64748b',
                  textTransform: 'uppercase', padding: '15px 10px',
                  borderBottom: activeTab === tab.id ? '3px solid #4f46e5' : '3px solid transparent',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>
        )}

        {/* Brochure */}
        <div style={brochureStyle}>

          {/* Cover */}
          <div style={coverStyle}>
            <h1 style={{ fontSize: '30px', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', textAlign: 'center' }}>
              Muhammad Umar
            </h1>
            <p style={{ color: '#c7d2fe', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '40px' }}>
              Software Engineer
            </p>
            <button
              onClick={openProfile}
              style={{
                background: 'rgba(239,132,68,0.36)',
                color: 'white', padding: '12px 40px', borderRadius: '50px',
                fontWeight: 700, textTransform: 'uppercase', border: 'none', cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(239,68,68,0.4)',
                animation: 'bounce 2s infinite', fontSize: '14px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Open Profile
            </button>
          </div>

          {/* Inside Content */}
          <div style={insideStyle}>
            {/* Mobile: show only active tab; Desktop: show all */}
            {isMobile ? (
              <div style={{ width: '100%', height: '100%', position: 'relative', animation: 'fadeIn 0.3s' }}>
                {activeTab === 'resume' && <ResumeTab isMobile={true} />}
                {activeTab === 'portfolio' && <PortfolioTab isMobile={true} />}
                {activeTab === 'contact' && <ContactTab isMobile={true} onClose={closeProfile} />}

                {/* Mobile Close */}
                <button
                  onClick={closeProfile}
                  style={{
                    position: 'fixed', bottom: '20px', right: '20px',
                    zIndex: 60, background: '#1f2937', color: 'white',
                    fontSize: '10px', fontWeight: 700, padding: '6px 12px',
                    borderRadius: '4px', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    textTransform: 'uppercase', letterSpacing: '2px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Close <i className="fas fa-times-circle" style={{ fontSize: '16px' }}></i>
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                <ResumeTab isMobile={false} />
                <PortfolioTab isMobile={false} />
                <ContactTab isMobile={false} onClose={closeProfile} />
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
