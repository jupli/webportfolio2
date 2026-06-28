import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Data terjemahan
const resources = {
  id: {
    translation: {
      "nav": {
        "home": "Beranda",
        "services": "Layanan",
        "portfolio": "Portfolio",
        "startProject": "Mulai Proyek"
      },
      "hero": {
        "badge": "Membangun Masa Depan Digital",
        "title1": "Solusi Enterprise",
        "title2": "AI & ERP Profesional",
        "desc": "Selamat datang di Kintan's Dev. Kami spesialis dalam pengembangan sistem ERP/Web/Mobile Apps/Integrasi System/AI Engine kustom dan layanan Kecerdasan Buatan (AI+Python-Laravel/Nextjs/React/Nodejs/Chatbot/Wordpress/Flutter/Swift) yang inovatif.",
        "explore": "Eksplorasi Portfolio"
      },
      "services": {
        "title": "Layanan Unggulan",
        "items": {
          "web": {
            "title": "Web Development",
            "desc": "Website responsif, cepat, dan modern menggunakan teknologi terbaru seperti React, Next.js, dan Tailwind CSS."
          },
          "blockchain": {
            "title": "Blockchain & Web3",
            "desc": "Pembuatan Smart Contract, DApps (Decentralized Apps), dan integrasi pembayaran Kripto (Bitcoin/ETH)."
          },
          "mobile": {
            "title": "Mobile Apps",
            "desc": "Aplikasi Android dan iOS native atau cross-platform (Flutter/React Native) dengan UX yang intuitif."
          },
          "ai": {
            "title": "Integrasi AI & Automasi",
            "desc": "Implementasi LLM, Chatbot cerdas, dan sistem wawancara otomatis berbasis Python & AI."
          }
        }
      },
      "portfolio": {
        "title": "Portfolio Unggulan",
        "desc": "Hasil karya Kintan's Dev: Dari sistem manajemen skala besar hingga implementasi AI revolusioner.",
        "totalProjects": "{{count}} Total Proyek",
        "watchDemo": "Tonton Demo",
        "comingSoon": "Coming Soon",
        "active": "Aktif",
        "items": {
          "garbage": {
            "title": "Intelligent Garbage System",
            "desc": "Sistem tempat sampah pintar berbasis IoT yang mampu memilah sampah secara otomatis dan memantau kapasitas melalui dashboard real-time."
          },
          "chatbot": {
            "title": "AI Chatbot Assistant",
            "desc": "Pengembangan asisten virtual cerdas yang mampu memahami konteks percakapan secara natural untuk meningkatkan engagement pengguna."
          },
          "erp": {
            "title": "ERP-MBG System",
            "desc": "Sistem Manajemen Sumber Daya Perusahaan (ERP) yang komprehensif untuk mengelola operasional bisnis secara efisien dan terintegrasi."
          },
          "customAi": {
            "title": "Custom AI Services",
            "desc": "Layanan AI kustom berbasis Python. Mengubah ide-ide kompleks yang 'tidak mungkin' menjadi solusi teknologi yang nyata dan memungkinkan."
          },
          "aiInterview": {
            "title": "AI Interview Pro",
            "desc": "Sistem wawancara otomatis multi-bahasa. Menggunakan Python untuk pemrosesan AI dan Laravel sebagai core backend."
          },
          "learningCenter": {
            "title": "AI Learning Center",
            "desc": "Platform pembelajaran cerdas yang mengadaptasi materi berdasarkan progres siswa menggunakan algoritma machine learning."
          },
          "smartChatbot": {
            "title": "AI Smart Chatbot",
            "desc": "chatbot pintar yang dapat menyesuaikan diri dengan baik, sebab setiap halaman yang dibukan oleh user."
          },
          "blockchain": {
            "title": "BlockChain Technology",
            "desc": "Terapkan Pembayaran Tanpa Potongan ataupun pajak disetiap transaksi usahamu."
          },
          "localAi": {
            "title": "Local AI For Programming Editor",
            "desc": "Kamu bisa membuat Program apapun tanpa harus mengeluh Biaya Topup, Gratis"
          }
        }
      },
      "cta": {
        "title": "Butuh Solusi Teknologi Kustom?",
        "desc": "Kintan's Dev siap membantu Anda membangun sistem ERP/Aplikasi/Web yang efisien atau mengintegrasikan layanan AI mutakhir ke dalam bisnis Anda.",
        "chat": "Chat WhatsApp"
      },
      "footer": {
        "company": "Kintan's Dev Technology Solutions",
        "copyright": "© 2024 Arsitek Digital. Membuat yang tidak mungkin menjadi nyata.",
        "contact": "Hubungi kami: {{phone}}"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Services",
        "portfolio": "Portfolio",
        "startProject": "Start Project"
      },
      "hero": {
        "badge": "Building the Digital Future",
        "title1": "Enterprise Solutions",
        "title2": "Professional AI & ERP",
        "desc": "Welcome to Kintan's Dev. We specialize in custom ERP/Web/Mobile Apps/System Integration/AI Engine development and innovative Artificial Intelligence services (AI+Python-Laravel/Nextjs/React/Nodejs/Chatbot/Wordpress/Flutter/Swift).",
        "explore": "Explore Portfolio"
      },
      "services": {
        "title": "Our Services",
        "items": {
          "web": {
            "title": "Web Development",
            "desc": "Responsive, fast, and modern websites using the latest technologies like React, Next.js, and Tailwind CSS."
          },
          "blockchain": {
            "title": "Blockchain & Web3",
            "desc": "Smart Contract creation, DApps (Decentralized Apps), and Crypto payment integration (Bitcoin/ETH)."
          },
          "mobile": {
            "title": "Mobile Apps",
            "desc": "Native Android and iOS applications or cross-platform (Flutter/React Native) with intuitive UX."
          },
          "ai": {
            "title": "AI & Automation Integration",
            "desc": "Implementation of LLMs, smart Chatbots, and automated interview systems based on Python & AI."
          }
        }
      },
      "portfolio": {
        "title": "Featured Portfolio",
        "desc": "Kintan's Dev works: From large-scale management systems to revolutionary AI implementations.",
        "totalProjects": "{{count}} Total Projects",
        "watchDemo": "Watch Demo",
        "comingSoon": "Coming Soon",
        "active": "Active",
        "items": {
          "garbage": {
            "title": "Intelligent Garbage System",
            "desc": "IoT-based smart trash bin system capable of sorting waste automatically and monitoring capacity via real-time dashboard."
          },
          "chatbot": {
            "title": "AI Chatbot Assistant",
            "desc": "Development of a smart virtual assistant capable of naturally understanding conversational context to increase user engagement."
          },
          "erp": {
            "title": "ERP-MBG System",
            "desc": "Comprehensive Enterprise Resource Planning (ERP) system to manage business operations efficiently and seamlessly."
          },
          "customAi": {
            "title": "Custom AI Services",
            "desc": "Custom Python-based AI services. Transforming complex 'impossible' ideas into tangible and feasible technological solutions."
          },
          "aiInterview": {
            "title": "AI Interview Pro",
            "desc": "Multi-language automated interview system. Using Python for AI processing and Laravel as the core backend."
          },
          "learningCenter": {
            "title": "AI Learning Center",
            "desc": "Smart learning platform that adapts materials based on student progress using machine learning algorithms."
          },
          "smartChatbot": {
            "title": "AI Smart Chatbot",
            "desc": "Smart chatbot that can adapt well, because every page opened by the user."
          },
          "blockchain": {
            "title": "BlockChain Technology",
            "desc": "Apply Payments Without Deductions or taxes on every transaction of your business."
          },
          "localAi": {
            "title": "Local AI For Programming Editor",
            "desc": "You can create any program without complaining about Topup costs, Free"
          }
        }
      },
      "cta": {
        "title": "Need Custom Tech Solutions?",
        "desc": "Kintan's Dev is ready to help you build an efficient ERP/App/Web system or integrate cutting-edge AI services into your business.",
        "chat": "Chat WhatsApp"
      },
      "footer": {
        "company": "Kintan's Dev Technology Solutions",
        "copyright": "© 2024 Digital Architect. Making the impossible possible.",
        "contact": "Contact us: {{phone}}"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "id", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
