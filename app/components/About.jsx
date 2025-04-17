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
        className="flex flex-col lg:flex-row items-center gap-10 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none shadow-soft dark:shadow-neon dark:border dark:border-neonGreen border border-lightBorder bg-glassWhite backdrop-blur-xs"
        >
          <Image
            src={isDarkMode ? assets.user_image_dark : assets.user_image}
            alt="Imagen de usuario"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Outfit text-lightTextSecondary dark:text-textSecondaryDark">
            Soy un desarrollador Full Stack con más de 2 años de experiencia trabajando en proyectos de comercio electrónico, crud, páginas web personalizadas y desarrollo frontend, utilizando tecnologías como React, Next.js, Tailwind, JavaScript, PostgreSQL y Docker. He colaborado en equipo usando GitHub como repositorio, destacándome por mi capacidad de organización, liderazgo y enfoque en la priorización de tareas.
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
            className="my-6 font-Outfit text-lightTextSecondary dark:text-textSecondaryDark"
          >
            Herramientas que uso
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
<TechItem><BiLogoVisualStudio className="w-6 h-6 text-[#007acc] dark:text-[#007acc]" /></TechItem> {/* Visual Studio, color azul */}
<TechItem><SiFirebase className="w-6 h-6 text-[#FFCB2B] dark:text-[#FFCB2B]" /></TechItem> {/* Firebase, color amarillo */}
<TechItem><SiMongodb className="w-6 h-6 text-[#47A248] dark:text-[#47A248]" /></TechItem> {/* MongoDB, color verde */}
<TechItem><SiGit className="w-6 h-6 text-[#F14E32] dark:text-[#F14E32]" /></TechItem> {/* Git, color rojo */}
<TechItem><SiGithub className="w-6 h-6 text-[#333] dark:text-[#FFFFFF]" /></TechItem> {/* GitHub, gris oscuro (modo oscuro es blanco) */}
<TechItem><SiPostman className="w-6 h-6 text-[#FF6A00] dark:text-[#FF6A00]" /></TechItem> {/* Postman, color naranja */}
<TechItem><SiWarp className="w-6 h-6 text-[#5F4B8B] dark:text-[#5F4B8B]" /></TechItem> {/* Warp, color morado */}



          </motion.ul>

          {/* Tecnologías */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="my-6 font-Outfit text-lightTextSecondary dark:text-textSecondaryDark"
          >
            Tecnologías que manejo
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
<TechItem><FaReact className="w-6 h-6 text-blue-500 dark:text-[#61DAFB]" /></TechItem> {/* React, azul (modo claro), azul claro (modo oscuro) */}
<TechItem><SiNextdotjs className="w-6 h-6 text-black dark:text-neonGreen" /></TechItem> {/* Next.js, negro (modo claro), verde neon (modo oscuro) */}
<TechItem><FaJsSquare className="w-6 h-6 text-yellow-500 dark:text-[#F7DF1E]" /></TechItem> {/* JavaScript, amarillo (modo claro), amarillo (modo oscuro) */}
<TechItem><SiPostgresql className="w-6 h-6 text-blue-700 dark:text-[#ffffff]" /></TechItem> {/* PostgreSQL, azul oscuro (modo claro), azul oscuro (modo oscuro) */}
<TechItem><SiMongodb className="w-6 h-6 text-green-500 dark:text-[#47A248]" /></TechItem> {/* MongoDB, verde (modo claro), verde (modo oscuro) */}
<TechItem><SiTailwindcss className="w-6 h-6 text-sky-400 dark:text-[#38BDF8]" /></TechItem> {/* Tailwind CSS, azul claro (modo claro), azul claro (modo oscuro) */}
<TechItem><FaCss3Alt className="w-6 h-6 text-blue-600 dark:text-[#1572B6]" /></TechItem> {/* CSS3, azul (modo claro), azul (modo oscuro) */}
<TechItem><FaHtml5 className="w-6 h-6 text-orange-500 dark:text-[#E44D26]" /></TechItem> {/* HTML5, naranja (modo claro), naranja (modo oscuro) */}
<TechItem><SiNodedotjs className="w-6 h-6 text-green-600 dark:text-[#68A063]" /></TechItem> {/* Node.js, verde (modo claro), verde (modo oscuro) */}
<TechItem><SiPython className="w-6 h-6 text-blue-400 dark:text-[#3776AB]" /></TechItem> {/* Python, azul (modo claro), azul (modo oscuro) */}
<TechItem><SiMysql className="w-6 h-6 text-blue-600 dark:text-[#ffffff]" /></TechItem> {/* MySQL, azul (modo claro), azul (modo oscuro) */}

          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
