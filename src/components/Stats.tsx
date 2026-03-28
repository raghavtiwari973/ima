import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Building, Mic, Calendar, Handshake, Presentation, Trophy, UserCheck } from 'lucide-react';

const statsData = [
  { icon: Presentation, label: 'Conclaves', value: 33, suffix: '+' },
  { icon: Mic, label: 'Speakers', value: 500, suffix: '+' },
  { icon: Building, label: 'Corporate', value: 2000, suffix: '+' },
  { icon: Users, label: 'Participants', value: 200000, suffix: '+' },
  { icon: UserCheck, label: 'Members', value: 2000, suffix: '+' },
  { icon: Trophy, label: 'LMA Awards Won', value: 18, suffix: '+' },
  { icon: Handshake, label: 'Partner Companies', value: 100, suffix: '+' },
  { icon: Calendar, label: 'Events Annually', value: 150, suffix: '+' },
];

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  const formatNumber = (num: number) => {
    if (num >= 100000) return (num / 100000).toFixed(1).replace(/\.0$/, '') + 'L';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toString();
  };

  return <span ref={ref}>{formatNumber(count)}</span>;
};

export const Stats = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#FAFAFA] to-[#FFF9F0] relative overflow-hidden flex justify-center items-center">
      {/* Unique Theme: Floating Dots and Soft Gradients */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-2xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#E6C97A]/20 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated geometric background lines */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #111111 25%, #111111 26%, transparent 27%, transparent 74%, #111111 75%, #111111 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #111111 25%, #111111 26%, transparent 27%, transparent 74%, #111111 75%, #111111 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} 
        animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-[90rem] w-full mx-auto relative z-10 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-[#111111]"
        >
          Our <span className="text-[#D4AF37]">Impact</span>
        </motion.h2>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 lg:gap-4 xl:gap-5"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.5 } }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group w-[calc(50%-8px)] sm:w-[160px] lg:w-[115px] xl:w-[130px] 2xl:w-[150px]"
            >
              {/* Animated glowing border effect */}
              <motion.div
                className="absolute -inset-[2px] bg-gradient-to-r from-[#D4AF37] via-[#FFF9F0] to-[#D4AF37] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px]"
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% auto' }}
              />

              <div className="relative w-full h-full bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 xl:p-5 shadow-lg border border-[#D4AF37]/20 group-hover:border-transparent transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden z-10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-20 w-full flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                    className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-[#D4AF37] group-hover:to-[#E6C97A] rounded-2xl flex items-center justify-center mb-3 xl:mb-4 shadow-sm group-hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all duration-500 border border-gray-200 group-hover:border-transparent"
                  >
                    <stat.icon className="w-5 h-5 xl:w-6 xl:h-6 text-[#D4AF37] group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                  </motion.div>

                  <div className="text-2xl xl:text-3xl font-extrabold text-[#111111] group-hover:text-[#D4AF37] transition-colors duration-500 mb-1 xl:mb-2 flex items-baseline justify-center tracking-tight">
                    <CountUp end={stat.value} />
                    <span className="text-[#D4AF37] text-lg xl:text-xl font-bold ml-0.5">{stat.suffix}</span>
                  </div>

                  <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300 text-[10px] xl:text-xs font-bold uppercase tracking-widest leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
