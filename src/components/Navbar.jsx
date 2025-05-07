import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Deteksi scroll untuk styling navbar
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Deteksi section yang sedang aktif
      const sections = ['home', 'products', 'about', 'gallery', 'contact', 'order'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links menu untuk desktop dan mobile
  const navLinks = [
    { href: "#home", text: "Beranda", id: "home" },
    { href: "#products", text: "Produk", id: "products" },
    { href: "#about", text: "Tentang Kami", id: "about" },
    { href: "#gallery", text: "Galeri", id: "gallery" },
    { href: "#contact", text: "Kontak", id: "contact" },
    { href: "#order", text: "Pesan Custom", id: "order", special: true }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-white">Bani <span className="text-yellow-400">Etalase</span></span>
            </motion.div>
          </div>

          {/* Desktop menu - di sebelah kanan */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href} 
                  className={`
                    ${activeSection === link.id 
                      ? 'border-b-2 border-yellow-400 text-yellow-400' 
                      : 'text-white hover:text-yellow-300'
                    }
                    ${link.special 
                      ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-3 py-2 rounded-md text-sm font-medium' 
                      : 'px-3 py-2 rounded-md text-sm font-medium'
                    }
                  `}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`
                ${activeSection === link.id 
                  ? 'border-l-4 border-yellow-400 text-yellow-400' 
                  : 'text-white hover:text-yellow-300'
                }
                ${link.special 
                  ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300 block px-3 py-2 rounded-md text-base font-medium' 
                  : 'block px-3 py-2 rounded-md text-base font-medium'
                }
              `}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;