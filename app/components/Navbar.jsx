import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    const handleOutsideClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('div[id], section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 50) {
          if (activeSection !== 'top') {
            console.log('Sección activa: top (forzada por scrollY)');
            setActiveSection('top');
          }
          return;
        }

        let mostVisibleSection = null;
        let maxIntersectionRatio = -1;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection && mostVisibleSection !== activeSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7, 0.9] }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScrollTop = () => {
      if (window.scrollY < 50 && activeSection !== 'top') {
        console.log('Sección activa: top (forzada por scrollY)');
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, [activeSection]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { name: 'Inicio', href: '#top' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Mi trabajo', href: '#work' },
    { name: 'Contáctame', href: '#contact' },
  ];

  return (
    <>
    {/* Fondo decorativo (solo claro) */}
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] overflow-hidden dark:hidden">
      {/* Imagen decorativa */}
      <Image src={assets.header_bg_color} alt="" className="w-full" />

      {/* Capa de difuminado más efectiva */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/100 via-white/100 to-white/0 pointer-events-none" />
    </div>




      {/* Fondo animado sticky */}
      <div
        className={`fixed w-full h-[80px] z-40 transition-all duration-500 ease-in-out
          ${isScroll
            ? 'translate-y-0 bg-glassWhite backdrop-blur-xs shadow-soft border-b border-lightBorder dark:bg-secondary dark:bg-opacity-80 dark:backdrop-blur-md dark:shadow-neon'
            : '-translate-y-full'
          }`}
      ></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between font-Outfit text-lightTextPrimary dark:text-textDark">

        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Menú Desktop */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-glass transition-all duration-500 ease-in-out
          ${isScroll
            ? 'bg-transparent dark:bg-transparent'
            : 'bg-glassWhite backdrop-blur-xs shadow-neumorphic border border-lightBorder dark:bg-secondary dark:bg-opacity-70 dark:backdrop-blur-md dark:shadow-neon dark:border-neonGreen'
          }`}
        >
          {links.map(({ name, href }) => (
            <li key={href}>
              <a href={href} className={`relative group text-lightTextPrimary dark:text-textDark hover:text-accent dark:hover:text-neonGreen transition-colors`}>
                {name}
                <span className={`block h-0.5 bg-lightAccent dark:bg-neonGreen transition-all duration-300
                  ${activeSection === href.slice(1) ? 'w-full' : 'w-0'} group-hover:w-full`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Controles */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-lightBorder dark:border-neonGreen hover:bg-lightHover dark:hover:bg-neonGreen dark:hover:text-black transition-all"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Tema"
              className="w-5"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-lightBorder dark:border-neonGreen rounded-glass font-Outfit text-lightTextPrimary dark:text-textDark hover:bg-lightHover dark:hover:bg-neonGreen dark:hover:text-black transition-all"
          >
            Contacto
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Ir a contacto"
              className="w-3"
            />
          </a>

          {/* Botón móvil */}
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menú"
              className="w-6"
            />
          </button>
        </div>

        {/* Menú móvil */}
        <ul
          ref={mobileMenuRef}
          className={`fixed md:hidden flex flex-col gap-6 py-20 px-10 top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500 ease-in-out
          bg-glassWhite backdrop-blur-xs shadow-soft border-l border-lightBorder dark:bg-primary dark:bg-opacity-80 dark:backdrop-blur-md dark:shadow-neon dark:border-neonGreen dark:text-textDark
          ${menuOpen ? 'right-0 opacity-100' : '-right-64 opacity-0 pointer-events-none'}`}
        >
          <div className="absolute right-6 top-6" onClick={toggleMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Cerrar"
              className="w-5 cursor-pointer"
            />
          </div>

          {links.map(({ name, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={toggleMenu}
                className="font-Outfit text-lg text-lightTextPrimary dark:text-textDark hover:text-accent dark:hover:text-neonGreen transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;