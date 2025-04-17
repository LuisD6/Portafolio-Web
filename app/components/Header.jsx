import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-screen h-screen  dark:bg-primary flex items-center justify-center">
      <div
        id="top"
        className="w-11/12 max-w-4xl mx-auto h-full flex flex-col items-center justify-center gap-4 sm:gap-6 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image
            src={isDarkMode ? assets.profile_img_dark : assets.profile_img}
            alt="Foto de perfil"
            className="rounded-full w-24 sm:w-32 shadow-soft dark:shadow-neon dark:border dark:border-neonGreen"
          />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-Outfit text-textLight dark:text-textDark text-center"
        >
          ¡Hola! Soy Jose Luis Casarez
          <Image src={assets.hand_icon} alt="Ícono de saludo" className="w-5 sm:w-6 animate-bounce" />
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Outfit text-textLight dark:text-textDark text-center leading-tight"
        >
          Desarrollador web{' '}
          <span className="text-gray-700 dark:text-neonGreen font-Outfit">
            Full Stack
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Outfit text-textSecondaryLight dark:text-textSecondaryDark text-sm sm:text-base text-center px-2"
        >
          Desarrollador Full Stack con más de 2 años de experiencia creando
          proyectos web completos sin parar.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 w-full px-2">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-full bg-white text-textLight flex items-center justify-center gap-2 hover:bg-gray-100 dark:bg-transparent dark:border-neonGreen dark:text-textDark dark:hover:bg-neonGreen dark:hover:text-black transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-soft dark:shadow-neon"
          >
            Contáctame
            <Image
              src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
              alt="Flecha"
              className="w-4"
            />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/sample-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-full bg-transparent text-textLight flex items-center justify-center gap-2 hover:bg-gray-100 dark:border-neonMagenta dark:text-textDark dark:hover:bg-neonMagenta dark:hover:text-black transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-soft dark:shadow-neon"
          >
            Mi resumen
            <Image
              src={isDarkMode ? assets.download_icon_white : assets.download_icon}
              alt="Ícono descargar"
              className="w-4"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
