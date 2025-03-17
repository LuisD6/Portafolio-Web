import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react'

import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiMongodb, SiTailwindcss } from 'react-icons/si';

const About = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='about' 
    className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Introducción</motion.h4>
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>Sobre <span className='font-Ovo dark:text-[#b28113]'>mí</span></motion.h2>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex flex-col lg:flex-row items-center gap-10 my-20'>
        <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={isDarkMode ? assets.user_image_dark : assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
          className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            Soy un desarrollador Full Stack con más de 2 años de experiencia trabajando en proyectos de comercio electrónico y desarrollo frontend, utilizando tecnologías como React, Next.js, Tailwind, JavaScript, PostgreSQL y Docker. He colaborado en equipo usando GitHub como repositorio, destacándome por mi capacidad de organización, liderazgo y enfoque en la priorización de tareas. Siempre busco mejorar y enfrentar nuevos desafíos con confianza.
          </p>

          <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li 
                whileHover={{scale: 1.05}}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.3, duration: 0.5}}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Herramientas que uso</motion.h4>

          <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.5, duration: 0.6}}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li 
                whileHover={{scale: 1.1}}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md' key={index}>
                <Image src={tool} alt='Herramientas' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>

          {/* Nueva sección: Tecnologías que manejo */}
          <motion.h4 
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.5, duration: 0.5}}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tecnologías que manejo</motion.h4>
          <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.6, duration: 0.6}} 
            className='flex flex-wrap items-center gap-3 sm:gap-5'>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <FaReact className="w-6 h-6 text-blue-500" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <FaJsSquare className="w-6 h-6 text-yellow-500" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <SiPostgresql className="w-6 h-6 text-blue-700 dark:text-[#e3e3e3]" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <SiMongodb className="w-6 h-6 text-green-500" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <SiTailwindcss className="w-6 h-6 text-sky-400" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <FaCss3Alt className="w-6 h-6 text-blue-600" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md'>
              <FaHtml5 className="w-6 h-6 text-orange-500" />
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
