import { motion } from 'framer-motion';
import { useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image_url: string;
  order_index: number;
}

const staticMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Mr. Navin Khandelwal',
    position: 'President',
    image_url: '../src/image/navinsir.jpeg',
    order_index: 1,
  },
  {
    id: 'member-2',
    name: 'Mr. Ashwin Palshikar',
    position: 'Vice President',
    image_url: '../src/image/ashwinsir.png',
    order_index: 2,
  },
  {
    id: 'member-3',
    name: 'Mr. Sapan Shah',
    position: 'Vice President',
    image_url: '../src/image/sapansir.jpeg',
    order_index: 3,
  },
  {
    id: 'member-4',
    name: 'Ms. Chani Trivedi',
    position: 'Secretary',
    image_url: '../src/image/chanimaam.jpg',
    order_index: 4,
  },
  {
    id: 'member-5',
    name: 'Mr. G.S. Juneja',
    position: 'Treasurer',
    image_url: '../src/image/junejasir.png',
    order_index: 5,
  }
];

export const Team = () => {
  const [members, setMembers] = useState<TeamMember[]>(staticMembers);

  return (
    <section className="py-24 px-4 bg-[#FAFAFA] relative overflow-hidden">
      {/* Unique Theme: Wavy Waves Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" width="100" height="20" patternUnits="userSpaceOnUse">
              <animate attributeName="x" from="0" to="100" dur="2s" repeatCount="indefinite" />
              <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="#111111" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <div className="max-w-[140rem] w-full mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#111111]"
        >
          Leadership <span className="text-[#D4AF37]">Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Visionaries driving excellence and innovation
        </motion.p>

        {/* Grid container to show all members visible at once */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 xl:gap-4 pt-8 pb-16">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              {/* Animated glowing border effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-[#D4AF37] via-[#FFF9F0] to-[#D4AF37] rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:animate-pulse" />

              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] flex flex-col z-10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                />

                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700" />
                </div>

                <div className="p-6 xl:p-8 flex flex-col flex-1 relative bg-white z-20 overflow-hidden">
                  <h3 className="text-xl xl:text-3xl font-bold text-[#111111] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[#D4AF37] font-bold mb-3 text-xs xl:text-sm tracking-widest uppercase">{member.position}</p>
                  
                  {/* Subtle background element inside card */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
