import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { TbBrandRedux } from "react-icons/tb";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiPostgresql,
    SiFirebase,
    SiVite,
    SiCloudsmith,
    SiMaterialdesign,
} from 'react-icons/si';

const techIcons = {
    React: <SiReact className="w-full h-full text-blue-300" />,
    JavaScript: <SiJavascript className="w-full h-full text-yellow-400" />,
    TypeScript: <SiTypescript className="w-full h-full text-blue-500" />,
    NextJS: <SiNextdotjs className="w-full h-full text-neonGreen" />,
    Tailwind: <SiTailwindcss className="w-full h-full text-sky-300" />,
    HTML: <SiHtml5 className="w-full h-full text-orange-400" />,
    CSS: <SiCss3 className="w-full h-full text-blue-400" />,
    NodeJS: <SiNodedotjs className="w-full h-full text-green-400" />,
    PostgreSQL: <SiPostgresql className="w-full h-full text-white" />,
    Redux: <TbBrandRedux className="w-full h-full text-[#c29cff]" />,           // Morado oficial de Redux
    Firebase: <SiFirebase className="w-full h-full text-[#FFCA28]" />,          // Amarillo oficial de Firebase
    Vite: <SiVite className="w-full h-full text-[#f7ff64]" />,                  // Azul-violeta principal de Vite
    Cloudinary: <SiCloudsmith className="w-full h-full text-[#3448C5]" />,      // Azul oficial de Cloudinary
    MaterialUI: <SiMaterialdesign className="w-full h-full text-[#007FFF]" />,  // Azul oficial de Material UI
       
};

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work"
            className="w-full px-[12%] py-10 scroll-mt-20 dark:bg-primary"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center mb-2 text-lg font-Outfit text-lightTextSecondary dark:text-textSecondaryDark"
            >
                Mi portafolio
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center text-5xl font-Outfit text-lightTextPrimary dark:text-textDark"
            >
                Mis últimos trabajos
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit text-[15px] sm:text-xs md:text-sm lg:text-base text-lightTextPrimary dark:text-textSecondaryDark"
            >
                ¡Bienvenido a mi portafolio de desarrollo web! Explora una colección de proyectos que muestran mi experiencia en el desarrollo frontend con backend.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 my-10 gap-7"
            >
                {workData.map((proyect, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="relative cursor-pointer group overflow-hidden shadow-soft dark:shadow-neon rounded-lg"
                    >
                        <div className="w-full aspect-[16/9] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${proyect.bgImage})` }}></div>

                        <div className="absolute inset-0 overflow-hidden">
                            <div className="h-full w-full backdrop-blur-sm bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 rounded-lg opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                <h2 className="font-Outfit font-bold mb-2 text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-sm">
                                    {proyect.title}
                                </h2>
                                <p className="mb-3 font-Outfit text-[10px] text-sm sm:text-xs md:text-sm lg:text-sm xl:text-[15px] text-center"> 
                                {proyect.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                                {proyect.technologies?.map((tech, i) => (
                                    <span
                                    key={i}
                                    className="flex items-center gap-1 px-2 py-1 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black dark:bg-transparent dark:border dark:border-neonGreen dark:text-textDark dark:hover:bg-neonGreen dark:hover:text-black transition duration-300 text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-[10px]"
                                    >
                                    <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4">
                                        {React.cloneElement(techIcons[tech] || <></>)}
                                    </span>
                                    {tech}
                                    </span>

                                ))}
                                </div>

                                <div className="flex gap-4">
                                    {proyect.demoLink && (
                                        <a
                                        href={proyect.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-Outfit text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-[10px] px-4 py-2 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black dark:bg-transparent dark:border dark:border-neonGreen dark:text-textDark dark:hover:bg-neonGreen dark:hover:text-black transition duration-300"
                                        >
                                        <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-4 xl:h-4" />
                                        Demo
                                        </a>

                                    )}
                                    {proyect.repoLink && (
                                        <a
                                        href={proyect.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-Outfit text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-[10px] px-4 py-2 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black dark:bg-transparent dark:border dark:border-neonMagenta dark:text-textDark dark:hover:bg-neonMagenta dark:hover:text-black transition duration-300"
                                        >
                                        <FiGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-4 xl:h-4" />
                                        Repo
                                        </a>

                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Work;
