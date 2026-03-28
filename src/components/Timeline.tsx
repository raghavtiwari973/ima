import { motion } from 'framer-motion';
import { Trophy, Star, Calendar, GraduationCap, Rocket, TrendingUp } from 'lucide-react';

const journeyPoints = [
  {
    title: '63 Years of Excellence',
    content: 'Affiliated with AIMA, IMA is Central India’s leading platform for leadership, learning, and networking, uniting 500+ corporates and 3000+ students.',
    icon: Trophy,
  },
  {
    title: 'Unmatched Recognition',
    content: 'Proud recipient of the Best Local Management Association award 18 times, reflecting our consistency and excellence.',
    icon: Star,
  },
  {
    title: 'Active Engagement',
    content: 'Conducting 60–70 programs annually, including the International Management Conclave, CEOs Meet, and specialized forums.',
    icon: Calendar,
  },
  {
    title: 'Empowering the Future',
    content: 'Developing future leaders through 21 student chapters with regular skill-building and industry-focused programs.',
    icon: GraduationCap,
  },
  {
    title: 'Driving Innovation',
    content: 'Leading initiatives like AI & Innovation Summit, HR & Fintech Conclaves, Women Empowerment programs, and Startup Event.',
    icon: Rocket,
  },
  {
    title: 'Massive Impact',
    content: 'With 33 conclaves, 500+ speakers, and 1 lakh+ professionals impacted, IMA continues to be a powerful platform for growth.',
    icon: TrendingUp,
  },
];

export const Timeline = () => {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Unique Theme: Animated Diagonal Stripes & Soft Blobs */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #111111 25%, transparent 25%, transparent 75%, #111111 75%, #111111)', backgroundSize: '60px 60px' }} 
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-gradient-to-r from-[#D4AF37]/10 to-[#E6C97A]/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-gradient-to-l from-[#D4AF37]/10 to-[#E6C97A]/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Legacy</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111]">
            A Journey of <span className="text-[#D4AF37]">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            {journeyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-500 flex gap-5 items-start group relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-[#F8F8F8] flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] shadow-inner text-[#D4AF37] relative z-10 group-hover:scale-110 group-hover:-rotate-12">
                  <point.icon className="w-7 h-7" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#D4AF37] transition-colors">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{point.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative group h-[350px] sm:h-[450px] lg:h-[600px] w-full mt-8 lg:mt-0">
              <div className="absolute top-8 right-4 w-[80%] h-[70%] bg-gradient-to-tr from-[#D4AF37] to-[#E6C97A] rounded-[2rem] transform rotate-3 opacity-20 blur-xl transition-transform duration-700 group-hover:rotate-6" />
              <div className="absolute top-8 right-4 w-[80%] h-[70%] bg-gradient-to-tr from-[#D4AF37] to-[#E6C97A] rounded-3xl transform -rotate-3 scale-105 opacity-30 transition-transform duration-500 group-hover:rotate-0" />
              
              {/* Image 1 - Top Right */}
              <div className="absolute top-0 right-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-3">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/image/oldima.png"
                  alt="IMA Journey 1963 to 2026"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Image 2 - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:-rotate-3">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/image/backdrop.jpg"
                  alt="IMA Leadership and Growth"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
                className="absolute bottom-4 right-0 sm:bottom-1/4 sm:-right-4 md:-right-8 z-30"
              >
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#111111]">18<span className="text-[#D4AF37]">x</span></div>
                      <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">Best LMA Award</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: -50, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute top-4 left-0 sm:top-1/4 sm:-left-4 md:-left-8 z-30"
              >
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotate: -5, scale: 1.05 }}
                  className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#111111]">1L<span className="text-[#D4AF37]">+</span></div>
                      <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Professionals<br/>Impacted</div>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
