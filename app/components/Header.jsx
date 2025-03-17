import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image
          src={isDarkMode ? assets.profile_img_dark : assets.profile_img}
          alt=''
          className='rounded-full w-32' />
      </motion.div>
      <motion.h3 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.3}}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        ¡Hola! Soy Jose Luis Casarez
        <Image
          src={assets.hand_icon}
          alt=''
          className='w-6 animate-bounce' />
      </motion.h3>
      <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Desarrollador web <span className='font-Ovo dark:text-[#b28113]'>Full Stack</span>
      </motion.h1>
      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo'>Desarrollador Full Stack con más de 2 años de experiencia creando proyectos web completos y mejorando continuamente mis habilidades.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1}}
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          Contáctame <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
          href="/sample-resume.pdf" download 
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
            Mi resumen <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
      </div>
    </div>
  )
}

export default Header