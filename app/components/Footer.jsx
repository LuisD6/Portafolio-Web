import { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Footer = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('casarezortiz@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Error al copiar el correo:', err);
      });
  };

  return (
    <div className="relative pt-20 dark:bg-primary" id="contact">
      {/* Fondo decorativo (modo claro únicamente) */}
      <div className="absolute inset-0 -z-10 dark:hidden">
        {/* Imagen de fondo */}
        <Image
          src="/footer-bg-color.png"
          alt="Fondo decorativo"
          fill
          className="object-cover"
        />

        {/* Overlay con degradado hacia abajo */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      </div>


      {/* Sección de email */}
      <div className="w-max flex items-center gap-2 mx-auto py-6 font-Outfit text-textLight dark:text-textDark">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt="Correo electrónico"
          className="w-6"
        />
        <span>casarezortiz@gmail.com</span>
        <button
          onClick={copyEmail}
          className="p-2 rounded-full bg-gray-200 dark:bg-secondary/50 hover:bg-gray-300 dark:hover:bg-neonGreen/50 transition-all duration-300"
        >
          {copied ? (
            <CheckIcon className="w-6 h-6 text-green-500 dark:text-neonGreen" />
          ) : (
            <ClipboardIcon className="w-6 h-6 text-gray-700 dark:text-textDark" />
          )}
        </button>
      </div>

      {/* Créditos y enlaces sociales */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 dark:border-neonGreen mx-[10%] py-6 font-Outfit">
        <p className="text-textSecondaryLight dark:text-textSecondaryDark">
          © 2025 Jose Luis Casarez Ortiz
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/LuisD6"
              className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-textLight dark:text-textDark hover:text-accent dark:hover:text-neonGreen"
            >
              <FaGithub className="w-6 h-6 text-black dark:text-white" />
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jose-luis-casarez-ortiz"
              className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-textLight dark:text-textDark hover:text-accent dark:hover:text-neonGreen"
            >
              <FaLinkedin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
);

};

export default Footer;
