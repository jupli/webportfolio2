import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Rocket, 
  X, 
  Globe, 
  Cpu, 
  MessageSquare, 
  Phone,
  Linkedin,
  Instagram,
  ArrowRight,
  Blocks,
  ExternalLink,
  PlayCircle,
  Zap
} from 'lucide-react';

export default function App() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  
  const phoneNumber = "088290097553";
  const whatsappUrl = `https://wa.me/62${phoneNumber.substring(1)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getEmbedUrl = (url) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v');
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const openModal = (url) => {
    setSelectedVideoUrl(getEmbedUrl(url));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl('');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  const servicesData = [
    {
      key: "web",
      icon: <Globe className="w-8 h-8 text-blue-400" />
    },
    {
      key: "blockchain",
      icon: <Blocks className="w-8 h-8 text-yellow-400" />
    },
    {
      key: "mobile",
      icon: <Smartphone className="w-8 h-8 text-purple-400" />
    },
    {
      key: "ai",
      icon: <Brain className="w-8 h-8 text-emerald-400" />
    }
  ];

  const projectsData = [
    {
      key: "garbage",
      category: "IoT & AI Integration",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/iA9UX3jgEPQ"
    },
    {
      key: "chatbot",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/JQFXYi1thss"
    },
    {
      key: "erp",
      category: "Enterprise Solution",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/ougHeD8RBTU"
    },
    {
      key: "customAi",
      category: "Python AI Expert",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/GS1-ICqWYKU"
    },
    {
      key: "aiInterview",
      category: "AI Integration & Laravel",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/la77NMPo_Ow"
    },
    {
      key: "learningCenter",
      category: "EdTech & AI",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/ip9FUYAhf3U"
    },
    {
      key: "smartChatbot",
      category: "Chatbot & AI",
      image: "https://images.unsplash.com/photo-1762340277219-17cba0c9bca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNoYXRib3R8ZW58MHx8MHx8fDA%3D",
      videoUrl: "https://youtu.be/T1q2WfPScJU"
    },
    {
      key: "blockchain",
      category: "SmartContract & BlockChain",
      image: "https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
      videoUrl: "https://youtu.be/tbXVNsmBajI"
    },
    {
      key: "localAi",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://youtu.be/a6wFrrVXRKo"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code size={20} className="text-white" />
            </div>
            Kintan's<span className="text-blue-500"> Dev</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-blue-400 transition-colors text-sm font-medium">{t('nav.home')}</a>
            <a href="#services" className="hover:text-blue-400 transition-colors text-sm font-medium">{t('nav.services')}</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors text-sm font-medium">{t('nav.portfolio')}</a>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-slate-800 text-white rounded-md text-sm font-bold border border-slate-700 hover:bg-slate-700 transition-colors flex items-center gap-1"
            >
              <Globe size={14} />
              {i18n.language.toUpperCase()}
            </button>
            <a href="#contact" className="px-5 py-2.5 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">{t('nav.startProject')}</a>
          </div>
          
          {/* Mobile Language Switcher (since mobile menu wasn't fully implemented in original, adding just the switcher here) */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-slate-800 text-white rounded-md text-sm font-bold border border-slate-700 hover:bg-slate-700 transition-colors flex items-center gap-1"
            >
              <Globe size={14} />
              {i18n.language.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Rocket size={14} /> {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            {t('hero.title1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
              {t('hero.explore')} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('services.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`services.items.${service.key}.title`)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(`services.items.${service.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('portfolio.title')}</h2>
              <p className="text-slate-400 max-w-xl">{t('portfolio.desc')}</p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 text-xs font-bold text-slate-400">
                {t('portfolio.totalProjects', { count: projectsData.length })}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex flex-col h-full shadow-lg hover:shadow-blue-500/5 transition-all">
                <div className="aspect-video overflow-hidden relative">
                  <img src={project.image} alt={t(`portfolio.items.${project.key}.title`)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                     {project.videoUrl !== "#" ? (
                       <button 
                        onClick={() => openModal(project.videoUrl)}
                        className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl hover:bg-blue-50 cursor-pointer"
                       >
                         <PlayCircle size={20} /> {t('portfolio.watchDemo')}
                       </button>
                     ) : (
                       <span className="text-white font-bold opacity-50">{t('portfolio.comingSoon')}</span>
                     )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-900 border border-slate-800 ${
                      project.category.includes('AI') ? 'text-emerald-400' : 
                      project.category.includes('Web3') ? 'text-yellow-400' : 
                      project.category.includes('Enterprise') ? 'text-blue-400' : 
                      project.category.includes('IoT') ? 'text-orange-400' : 'text-slate-400'
                    }`}>
                      {project.category}
                    </span>
                    {project.videoUrl !== "#" && (
                      <button onClick={() => openModal(project.videoUrl)} className="cursor-pointer">
                        <ExternalLink size={14} className="text-slate-600 hover:text-white transition-colors" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{t(`portfolio.items.${project.key}.title`)}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{t(`portfolio.items.${project.key}.desc`)}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-900">
                    <span className="text-[10px] text-slate-600 font-mono">#{t(`portfolio.items.${project.key}.title`).replace(/\s+/g, '-').toLowerCase()}</span>
                    {project.videoUrl !== "#" && (
                      <span className="text-[10px] text-blue-500 flex items-center gap-1">
                        <Zap size={10} className="fill-blue-500" /> {t('portfolio.active')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Video */}
          {isModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeModal}>
              <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
                >
                  <X size={32} />
                </button>
                <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src={selectedVideoUrl}
                    title="Video Demo"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Cpu size={120} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">{t('cta.desc')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2">
                <MessageSquare size={18} /> {t('cta.chat')}
              </a>
              <div className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold border border-slate-700 flex items-center gap-2">
                <Phone size={18} className="text-blue-400" /> {phoneNumber}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 font-bold text-xl text-white mb-8">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Code size={14} />
            </div>
            Kintan's Dev
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <MessageSquare size={20} />
            </a>
            <Linkedin size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
            <Instagram size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
          </div>
          <p className="text-slate-500 text-xs tracking-widest uppercase mb-4 font-bold">{t('footer.company')}</p>
          <p className="text-slate-600 text-[10px]">{t('footer.copyright')}</p>
          <p className="text-slate-700 text-[10px] mt-2">{t('footer.contact', { phone: phoneNumber })}</p>
        </div>
      </footer>
    </div>
  );
}
