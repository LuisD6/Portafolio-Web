import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline"; // Importación correcta para Heroicons v2
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa'; // Importamos los íconos de React Icons
import React from 'react';

const Footer = ({isDarkMode}) => {
  const [copied, setCopied] = useState(false); // Estado para manejar la notificación de "copiado"

  // Función para copiar el correo al portapapeles
  const copyEmail = () => {
    navigator.clipboard.writeText("casarezortiz@gmail.com")
      .then(() => {
        setCopied(true);  // Cambia el estado para mostrar que el correo fue copiado
        setTimeout(() => setCopied(false), 2000); // Resetea el estado después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el correo:", err);
      });
  };

  return (
    <div className='mt-20'>
      <div className="w-max flex items-center gap-2 mx-auto">
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
        <span>casarezortiz@gmail.com</span>

        <button
          onClick={copyEmail}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 duration-300"
        >
          {copied ? (
            <CheckIcon className="w-6 h-6 text-green-500" />  // Ícono de "copiado" (check)
          ) : (
            <ClipboardIcon className="w-6 h-6 text-gray-700" />  // Ícono de "copiar"
          )}
        </button>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>2025 Jose Luis Casarez Ortiz</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href="https://github.com/LuisD6" className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <FaGithub className="w-6 h-6 text-gray-700 dark:text-white" />
              GitHub
            </a>
          </li>
          <li>
            <a target='_blank' href="https://www.linkedin.com/in/jose-luis-casarez-ortiz" className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
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
