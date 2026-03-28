import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');

  const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/IndoreManagementAssociation/', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/imaindore/', label: 'Instagram' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/indoremanagementassociation?originalSubdomain=in', label: 'LinkedIn' },
    { Icon: Youtube, href: 'https://www.youtube.com/@imaindore9655', label: 'YouTube' },
  ];

  useEffect(() => {
    const texts = [
      'Shaping Business Excellence Since 1963',
      'International Management Conclave',
      'HR Conclave',
      "Women's Conclave"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentText = texts[textIndex];
      
      setText(currentText.slice(0, charIndex));

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      let typingSpeed = isDeleting ? 30 : 80;

      if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at the end of typing
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing next word
      }

      timer = setTimeout(type, typingSpeed);
    };

    timer = setTimeout(type, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F8F8] via-white to-[#FFF9F0]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(../src/image/backdrop.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Cinematic Black Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 mix-blend-multiply" />
      </div>

      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-24 pt-20 md:pt-0">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="relative flex-shrink-0 mb-8 md:mb-0"
        >
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <img
              src="/image/logo.png"
              alt="Indore Management Association"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain relative drop-shadow-sm"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#111111] mb-4 md:mb-6 tracking-tight leading-tight"
          >
            INDORE MANAGEMENT
            <br />
            <span className="text-[#D4AF37] drop-shadow-[0_5px_25px_rgba(212,175,55,0.6)]">
              ASSOCIATION
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-600 h-8 sm:h-10 md:h-12 flex items-center justify-center md:justify-start"
          >
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-6 sm:h-8 md:h-10 bg-[#D4AF37] ml-1 align-middle"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 1.5 }
              }
            }}
            initial="hidden"
            animate="show"
            className="flex gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 flex-wrap justify-center md:justify-start"
          >
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                variants={{ hidden: { opacity: 0, y: 20, scale: 0.8 }, show: { opacity: 1, y: 0, scale: 1 } }}
                whileHover={{ scale: 1.15, y: -5, boxShadow: "0 15px 25px -5px rgba(212, 175, 55, 0.4)", borderColor: "rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#D4AF37] border border-gray-100 transition-colors"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
