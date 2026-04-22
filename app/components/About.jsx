import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiMongodb, SiTailwindcss, SiVivaldi, SiFirebase, SiGit, SiGithub, SiPostman, SiWarp, SiPython, SiMysql, SiNodedotjs } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const itemClasses = "flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 duration-500 shadow-soft dark:border-neonGreen dark:hover:shadow-neon " +
  "border-lightBorder bg-glassWhite backdrop-blur-xs hover:shadow-glassLight text-lightTextPrimary dark:bg-transparent dark:text-textDark";

const InfoCard = ({ icon, iconDark, title, description, isDarkMode }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    className={
      `rounded-xl p-6 cursor-pointer duration-500 transition-all hover:-translate-y-1 
      border ${isDarkMode ? 'dark:border-neonGreen dark:hover:bg-secondary/30 dark:hover:shadow-neon' : 'border-lightBorder bg-glassWhite hover:bg-white/60 hover:shadow-glassLight backdrop-blur-xs'} `
    }
  >
    <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
    <h3 className="my-4 font-semibold text-lightTextPrimary dark:text-textDark font-Outfit">{title}</h3>
    <p className="text-lightTextSecondary dark:text-textSecondaryDark text-sm font-Outfit">{description}</p>
  </motion.li>
);

const TechItem = ({ children }) => (
  <motion.li whileHover={{ scale: 1.1 }} className={itemClasses}>
    {children}
  </motion.li>
);

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 dark:bg-primary"
    >
      {/* Encabezado */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Outfit text-lightTextSecondary dark:text-textSecondaryDark"
      >
        Introducción
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Outfit text-lightTextPrimary dark:text-textDark"
      >
        Sobre <span className="text-gray-700 dark:text-neonGreen font-Outfit">mí</span>
      </motion.h2>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-12 my-12 sm:my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 sm:w-80 rounded-3xl max-w-none shadow-2xl dark:shadow-neonGreen/20 dark:border dark:border-neonGreen/50 border border-lightBorder bg-glassWhite backdrop-blur-xs group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-neonGreen/10 dark:to-neonMagenta/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <Image
            src={isDarkMode ? assets.user_image_dark : assets.user_image}
            alt="Imagen de usuario"
            className="w-full rounded-3xl object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Outfit text-lightTextSecondary dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Soy estudiante de 8vo semestre en la carrera de <strong className="text-black dark:text-white">Ingeniería en Sistemas Computacionales</strong>, con especialidad en Ingeniería de Software. 
            Me dedico constantemente a mejorar mis habilidades a través de cursos especializados, como la formación completa en React, Next.js, Node.js y JavaScript moderno. 
            Disfruto construyendo aplicaciones web completas (Full Stack) utilizando bases de datos, APIs REST y construyendo interfaces modernas con Tailwind CSS.
          </p>

          {/* Tarjetas de información */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map((item, index) => (
              <InfoCard key={index} {...item} isDarkMode={isDarkMode} />
            ))}
          </motion.ul>

          {/* Herramientas */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 font-Outfit text-lightTextSecondary dark:text-textSecondaryDark font-medium tracking-wide"
          >
            Herramientas que uso
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5 flex-wrap"
          >
<TechItem><BiLogoVisualStudio className="w-6 h-6 text-[#007acc]" /></TechItem>
<TechItem><SiFirebase className="w-6 h-6 text-[#FFCB2B]" /></TechItem>
<TechItem><SiGit className="w-6 h-6 text-[#F14E32]" /></TechItem>
<TechItem><SiGithub className="w-6 h-6 text-[#333] dark:text-[#FFFFFF]" /></TechItem>
<TechItem><SiPostman className="w-6 h-6 text-[#FF6A00]" /></TechItem>
          </motion.ul>

          {/* Tecnologías */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="my-6 font-Outfit text-lightTextSecondary dark:text-textSecondaryDark font-medium tracking-wide"
          >
            Tecnologías que manejo
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
<TechItem><FaReact className="w-6 h-6 text-blue-500 dark:text-[#61DAFB]" /></TechItem>
<TechItem><SiNextdotjs className="w-6 h-6 text-black dark:text-white" /></TechItem>
<TechItem><FaJsSquare className="w-6 h-6 text-yellow-500 dark:text-[#F7DF1E]" /></TechItem>
<TechItem><SiNodedotjs className="w-6 h-6 text-green-600 dark:text-[#68A063]" /></TechItem>
<TechItem><SiPostgresql className="w-6 h-6 text-blue-700 dark:text-[#336791]" /></TechItem>
<TechItem><SiMongodb className="w-6 h-6 text-green-500 dark:text-[#47A248]" /></TechItem>
<TechItem><SiTailwindcss className="w-6 h-6 text-sky-400 dark:text-[#38BDF8]" /></TechItem>
<TechItem><FaCss3Alt className="w-6 h-6 text-blue-600 dark:text-[#1572B6]" /></TechItem>
<TechItem><FaHtml5 className="w-6 h-6 text-orange-500 dark:text-[#E44D26]" /></TechItem>
<TechItem><SiMysql className="w-6 h-6 text-blue-600 dark:text-[#4479A1]" /></TechItem>

          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
