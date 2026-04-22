import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-screen h-screen dark:bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-neonMagenta/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-neonGreen/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div
        id="top"
        className="w-11/12 max-w-4xl mx-auto h-full flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neonGreen dark:to-neonMagenta rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src={isDarkMode ? assets.profile_img_dark : assets.profile_img}
            alt="Foto de perfil de Jose Luis Casarez"
            priority
            className="relative rounded-full w-28 sm:w-36 shadow-xl dark:border dark:border-white/10 bg-white/5 backdrop-blur-sm"
          />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-Outfit text-textLight dark:text-textDark text-center font-medium tracking-wide"
        >
          ¡Hola! Soy Jose Luis Casarez
          <Image src={assets.hand_icon} alt="Ícono de saludo" className="w-5 sm:w-6 animate-bounce" />
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-Outfit text-textLight dark:text-textDark text-center leading-tight font-bold tracking-tight"
        >
          Desarrollador web{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neonGreen dark:to-neonMagenta">
            Full Stack
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Outfit text-textSecondaryLight dark:text-gray-400 text-sm sm:text-base md:text-lg text-center px-2 leading-relaxed"
        >
          Estudiante de 8vo semestre de Ingeniería en Sistemas y desarrollador apasionado. 
          Especializado en crear soluciones web robustas con React, Next.js y Node.js.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 w-full px-2">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="group relative px-8 py-3 rounded-full bg-textLight dark:bg-white text-white dark:text-black flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-lg shadow-black/20 dark:shadow-white/10 font-medium"
          >
            Contáctame
            <Image
              src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_bold_dark}
              alt="Flecha"
              className="w-4 group-hover:translate-x-1 transition-transform"
            />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/sample-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border border-gray-300 dark:border-white/20 rounded-full bg-white/50 dark:bg-transparent backdrop-blur-sm text-textLight flex items-center justify-center gap-2 hover:bg-gray-100 dark:text-textDark dark:hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-sm font-medium"
          >
            Mi currículum
            <Image
              src={isDarkMode ? assets.download_icon_white : assets.download_icon}
              alt="Ícono descargar"
              className="w-4 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
