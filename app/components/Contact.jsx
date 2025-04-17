import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Enviando...');
    const formData = new FormData(event.target);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_URL);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Formulario enviado con éxito', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        event.target.reset();
      } else {
        toast.error(`Error: ${data.message}`, {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('Ocurrió un error al enviar el formulario.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="w-full px-[12%] py-10 scroll-mt-20 dark:bg-primary"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-2 text-lg font-Outfit text-textSecondaryLight dark:text-textSecondaryDark"
      >
        Conéctate conmigo
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        className="text-center text-5xl font-Outfit text-textLight dark:text-textDark"
      >
        Ponte en contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit text-textSecondaryLight dark:text-textSecondaryDark"
      >
        ¡Me encantaría saber de ti! Si tienes alguna pregunta, comentario o sugerencia, utiliza el formulario a continuación.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white/90 dark:bg-secondary/30 backdrop-blur-md p-8 rounded-2xl shadow-soft dark:shadow-neon border border-gray-200 dark:border-neonGreen"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            type="text"
            placeholder="Ingrese su nombre"
            required
            name="name"
            aria-label="Nombre"
            autoComplete="name"
            className="flex-1 p-4 rounded-lg outline-none border border-gray-300 bg-white dark:bg-transparent dark:border-neonGreen/50 dark:text-textDark focus:ring-2 focus:ring-gray-400 dark:focus:ring-neonGreen focus:border-transparent transition-all duration-300 ease-in-out font-Outfit text-textLight"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3, ease: 'easeOut' }}
          />
          <motion.input
            type="email"
            placeholder="Ingrese su correo electrónico"
            required
            name="email"
            aria-label="Correo electrónico"
            autoComplete="email"
            className="flex-1 p-4 rounded-lg outline-none border border-gray-300 bg-white dark:bg-transparent dark:border-neonGreen/50 dark:text-textDark focus:ring-2 focus:ring-gray-400 dark:focus:ring-neonGreen focus:border-transparent transition-all duration-300 ease-in-out font-Outfit text-textLight"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3, ease: 'easeOut' }}
          />
        </div>
        <motion.textarea
          name="message"
          placeholder="Ingrese su mensaje"
          required
          rows="6"
          aria-label="Mensaje"
          className="w-full p-4 mt-6 rounded-lg outline-none border border-gray-300 bg-white dark:bg-transparent dark:border-neonGreen/50 dark:text-textDark focus:ring-2 focus:ring-gray-400 dark:focus:ring-neonGreen focus:border-transparent transition-all duration-300 ease-in-out mb-6 font-Outfit text-textLight"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3, ease: 'easeOut' }}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="py-3 px-6 w-max flex items-center justify-between gap-2 
                    bg-white dark:bg-transparent border border-gray-200 dark:border-neonMagenta 
                    text-gray-800 dark:text-textDark rounded-full mx-auto 
                    shadow-[0_8px_30px_rgba(0,0,0,0.05)] 
                    hover:bg-gray-50 dark:hover:bg-neonMagenta 
                    hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] 
                    dark:hover:text-black transition-all duration-300 
                    font-Outfit backdrop-blur-md"
        >
          Enviar ahora
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          >
            <Image
              src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
              alt="right arrow"
              className="w-4"
            />
          </motion.div>
        </motion.button>

      </motion.form>

      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
