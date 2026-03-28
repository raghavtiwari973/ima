import { motion, AnimatePresence } from 'framer-motion';
import { Network, TrendingUp, Users, Award, BookOpen, Globe, Check, Phone, Mail, X } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  {
    icon: Network,
    title: 'Networking',
    description: 'Connect with industry leaders and grow your professional network',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Access resources and strategies to scale your business',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a vibrant community of management professionals',
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Gain visibility through awards and excellence programs',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Continuous learning through workshops and seminars',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with international business opportunities',
  },
];

const membershipPlans = [
  {
    id: 'diamond',
    title: 'Diamond Premium Membership',
    badge: 'Ultimate Experience',
    annualFee: '₹50,000',
  },
  {
    id: 'platinum',
    title: 'Platinum Premium Membership',
    badge: 'Premium Experience',
    annualFee: '₹35,000',
  },
  {
    id: 'gold',
    title: 'Gold Membership',
    badge: 'Popular Package',
    annualFee: '₹15,000',
  },
  {
    id: 'silver',
    title: 'Silver Membership (Women)',
    badge: 'Standard Package',
    annualFee: '₹6,000',
  }
];

export const Benefits = () => {
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-[#FDFDFD] relative overflow-hidden">
      {/* Unique Theme: Abstract Geometric Shapes */}
      <motion.div 
        className="absolute top-20 -left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-[40px] rotate-45 blur-2xl pointer-events-none"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 -right-10 w-96 h-96 bg-[#E6C97A]/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-5" 
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #111111, #111111 1px, transparent 1px, transparent 10px)', backgroundSize: '14px 14px' }} 
        animate={{ backgroundPosition: ['0px 0px', '14px 14px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#111111]"
        >
          Membership <span className="text-[#D4AF37]">Benefits</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Unlock exclusive opportunities and resources
        </motion.p>

        {/* Membership Summary Cards */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8"
        >
          {membershipPlans.map((plan, index) => {
            const isDiamond = plan.id === 'diamond';
            const isPlatinum = plan.id === 'platinum';
            const isGold = plan.id === 'gold';
            return (
              <motion.div
                key={plan.id}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3 } }
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: isDiamond || isPlatinum ? '0 25px 60px -12px rgba(212, 175, 55, 0.5)' : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all flex flex-col h-full ${
                  isDiamond ? 'bg-[#111111] text-white border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)] z-20' : 
                  isPlatinum ? 'bg-gradient-to-br from-[#fdfdfd] to-[#e4e5e7] text-[#111111] border-2 border-[#b0b5b9] shadow-xl z-10' : 
                  isGold ? 'bg-gradient-to-b from-[#FFF9F0] to-white border border-[#D4AF37]/30' : 
                  'bg-white border border-gray-200 shadow-lg z-10'
                }`}
              >
                {isDiamond && (
                  <>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />
                    <motion.div
                      className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                    />
                  </>
                )}
                {isGold && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
                )}
                
                <div className="p-6 lg:p-8 text-center flex flex-col flex-1 relative z-10">
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-[10px] lg:text-xs shadow-sm ${
                      isDiamond ? 'bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] text-[#111111]' : 
                      isPlatinum ? 'bg-gradient-to-r from-[#b0b5b9] to-[#d1d5d8] text-[#111111]' :
                      isGold ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20' : 
                      'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-8 ${isDiamond ? 'text-white' : 'text-[#111111]'}`}>
                    {plan.title}
                  </h3>
                  
                  <div className="flex-1 flex flex-col justify-center mb-8">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className={`text-3xl lg:text-4xl font-bold ${
                        isDiamond || isGold ? 'text-[#D4AF37]' : 
                        isPlatinum ? 'text-[#5a6066]' : 
                        'text-[#111111]'
                      }`}>
                        {plan.annualFee}
                      </span>
                    </div>
                    <span className={`text-[10px] lg:text-xs uppercase tracking-wider ${isDiamond ? 'text-white/50' : 'text-gray-500'}`}>
                      / Annual (18% GST Extra)
                    </span>
                  </div>

                  <div className={`mt-auto py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    isDiamond ? 'bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] text-[#111111] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 
                    isPlatinum ? 'bg-gradient-to-r from-[#8e9399] to-[#b0b5b9] text-white hover:shadow-[0_0_20px_rgba(176,181,185,0.4)]' :
                    isGold ? 'bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white' : 
                    'bg-gray-50 text-gray-700 hover:bg-gray-200 border border-gray-100'
                  }`}>
                    View Details
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsViewMoreOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] text-white rounded-full font-medium shadow-lg transition-all"
          >
            View Core Benefits
          </motion.button>
        </motion.div>
      </div>

      {/* Selected Membership Popup Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPlan(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
                selectedPlan === 'diamond' ? 'max-w-5xl bg-[#111111] border border-[#D4AF37]/20' :
                selectedPlan === 'platinum' ? 'max-w-5xl bg-[#f4f5f7] border border-[#b0b5b9]/30' :
                selectedPlan === 'gold' ? 'max-w-2xl bg-gradient-to-b from-[#FFF9F0] to-white border border-[#D4AF37]/30' :
                'max-w-2xl bg-white border border-gray-200'
              }`}
            >
              <button
                onClick={() => setSelectedPlan(null)}
                className={`absolute top-4 right-4 z-50 p-2 rounded-full transition-colors backdrop-blur-md ${
                  selectedPlan === 'diamond'
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : selectedPlan === 'platinum'
                    ? 'bg-black/10 hover:bg-black/20 text-gray-800'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                <X className="w-6 h-6" />
              </button>

              {selectedPlan === 'silver' && (
                <div className="p-8">
                  <div className="text-center mb-8">
                    <span className="text-gray-500 font-semibold tracking-widest uppercase text-sm mb-2 block">Standard Package</span>
                    <h3 className="text-3xl font-bold text-[#111111] mb-6">Silver Membership (Women)</h3>
                    <div className="flex flex-col xl:flex-row justify-center items-center gap-3 text-gray-600">
                      <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                        <span className="text-3xl font-bold text-[#111111]">₹6,000</span>
                        <div className="text-left leading-tight">
                          <span className="text-xs uppercase tracking-wider block font-semibold text-gray-800">/ Annual</span>
                          <span className="text-[10px] text-gray-500 block whitespace-nowrap">(18% GST Extra)</span>
                        </div>
                      </div>
                      <div className="hidden xl:block text-gray-300 text-xl">+</div>
                      <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                        <span className="text-xl font-bold text-[#111111]">₹1,000</span>
                        <div className="text-left leading-tight">
                          <span className="text-xs uppercase tracking-wider block font-semibold text-gray-800">One-time</span>
                          <span className="text-[10px] text-gray-500 block">Registration</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "1 free ticket, yearly in Rendezvous CEOs' Dinner meet",
                      "1 free ticket, yearly in Management Development Programs (MDP) & training@doorstep",
                      "Free Evening Sessions and Tea Networking",
                      "Free HR's, IT's, Women's & Couple's Forum programs",
                      "1 free Copy of Annual Indore Manager Magazine Subscription",
                      "Complimentary 1 Chair in Executive Zone at IMA Conclaves & Events"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-gray-600" strokeWidth={3} />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-10 flex justify-center"
                  >
                    <a
                      href="https://www.imaindore.com/Individual-form.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Apply for Silver Membership
                    </a>
                  </motion.div>
                </div>
              )}

              {selectedPlan === 'gold' && (
                <>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="p-8 relative z-10">
                    <div className="text-center mb-8">
                      <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-2 block">Popular Package</span>
                      <h3 className="text-3xl font-bold text-[#111111] mb-6">Gold Membership</h3>
                      <div className="flex flex-col xl:flex-row justify-center items-center gap-3 text-gray-600">
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-[#D4AF37]/20 shadow-sm">
                          <span className="text-3xl font-bold text-[#D4AF37]">₹15,000</span>
                          <div className="text-left leading-tight">
                            <span className="text-xs uppercase tracking-wider block font-semibold text-gray-800">/ Annual</span>
                            <span className="text-[10px] text-gray-500 block whitespace-nowrap">(18% GST Extra)</span>
                          </div>
                        </div>
                      <div className="hidden xl:block text-[#D4AF37]/40 text-xl">+</div>
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-[#D4AF37]/20 shadow-sm">
                          <span className="text-xl font-bold text-[#D4AF37]">₹1,000</span>
                          <div className="text-left leading-tight">
                            <span className="text-xs uppercase tracking-wider block font-semibold text-gray-800">One-time</span>
                            <span className="text-[10px] text-gray-500 block">Registration</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="space-y-4">
                      {[
                        "1 free Nomination in each program for Rendezvous CEOs' Dinner meet",
                        "2 free tickets, yearly for Management Development Programs (MDP) & training@doorstep",
                        "Free Evening Sessions and Tea Networking",
                        "Free HR's, IT's, Women's & Couple's Forum programs",
                        "1 free Copy of Annual Indore Manager Magazine Subscription",
                        "Complimentary 1 Chair in Executive Zone at IMA Conclaves & Events"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#D4AF37]" strokeWidth={3} />
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-10 flex justify-center"
                    >
                      <a
                        href="https://www.imaindore.com/memberCorporate.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-[#111111] rounded-xl font-semibold shadow-lg transition-all duration-300"
                      >
                        Apply for Gold Membership
                      </a>
                    </motion.div>
                  </div>
                </>
              )}

              {selectedPlan === 'diamond' && (
                <div className="flex flex-col md:flex-row w-full min-h-[500px]">
                  {/* Left Column: Pricing and Contact */}
                  <div className="w-full md:w-2/5 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] p-6 md:p-10 text-[#111111] flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
                    
                    <div className="relative z-10">
                      <span className="text-[#111111]/70 font-bold tracking-widest uppercase text-sm mb-3 block">Ultimate Experience</span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white drop-shadow-md">Diamond Premium Membership</h3>
                      
                      <div className="space-y-6 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                        <div>
                          <span className="text-xs uppercase tracking-wider block text-[#111111]/80 font-bold mb-1">Annual Fee / Programs</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl lg:text-4xl font-bold text-white">₹50,000</span>
                            <span className="text-xs text-[#111111]/80 font-semibold">(18% GST Extra)</span>
                          </div>
                        </div>
                        <div className="h-px w-full bg-[#111111]/10" />
                        <div>
                          <span className="text-xs uppercase tracking-wider block text-[#111111]/80 font-bold mb-1">One-time Registration</span>
                          <span className="text-2xl font-bold text-white">₹2,000</span>
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-8 flex relative z-10"
                    >
                      <a
                        href="https://www.imaindore.com/memberCorporate.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-6 py-3.5 bg-[#111111] hover:bg-black text-white hover:shadow-xl rounded-xl font-semibold shadow-lg transition-all duration-300"
                      >
                        Apply for Diamond Membership
                      </a>
                    </motion.div>
                  </div>

                  {/* Right Column: Benefits List */}
                  <div className="w-full md:w-3/5 p-6 md:p-10 relative">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <div className="w-2 h-8 bg-[#D4AF37] rounded-full" />
                      Membership Privileges
                    </h4>
                    <div className="space-y-6">
                      {[
                        "2 free Nominations in each program: Rendezvous CEOs' Dinner meet Programs (CEOs'/ Top Management)",
                        "3 free Nominations in each program: Management Development Programs (MDP) in Indore & training@doorstep programs in Pithampur/Dewas/Ujjain (For any manager / HOD)",
                        "1 free session: Diksha In-House Program for Employees (Min 4 hrs each Training Session)",
                        "Free Evening sessions and Tea Networking",
                        "Free HR's, IT's, Women's & Couple's Forum programs",
                        "1 free Copies: Annual Indore Manager Magazine Subscription (Quarterly Circulation)",
                        "Complimentary: IMA International Management Conclave 2027/Women Conclave 2026 (Women Members)/Start-up Event",
                        "2 Chairs in Executive Zone at IMA Conclave"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-white transition-colors" strokeWidth={3} />
                          </div>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedPlan === 'platinum' && (
                <div className="flex flex-col md:flex-row w-full min-h-[500px]">
                  {/* Left Column: Pricing and Contact */}
                  <div className="w-full md:w-2/5 bg-gradient-to-br from-[#d1d5d8] to-[#b0b5b9] p-6 md:p-10 text-[#111111] flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
                    
                    <div className="relative z-10">
                      <span className="text-[#111111]/70 font-bold tracking-widest uppercase text-sm mb-3 block">Premium Experience</span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#111111] drop-shadow-md">Platinum Premium Membership</h3>
                      
                      <div className="space-y-6 bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-white/50">
                        <div>
                          <span className="text-xs uppercase tracking-wider block text-[#111111]/80 font-bold mb-1">Annual Fee / Programs</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl lg:text-4xl font-bold text-[#111111]">₹35,000</span>
                            <span className="text-xs text-[#111111]/80 font-semibold">(18% GST Extra)</span>
                          </div>
                        </div>
                        <div className="h-px w-full bg-[#111111]/10" />
                        <div>
                          <span className="text-xs uppercase tracking-wider block text-[#111111]/80 font-bold mb-1">One-time Registration</span>
                          <span className="text-2xl font-bold text-[#111111]">₹2,000</span>
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-8 flex relative z-10"
                    >
                      <a
                        href="https://www.imaindore.com/memberCorporate.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-6 py-3.5 bg-[#111111] hover:bg-black text-white hover:shadow-xl rounded-xl font-semibold shadow-lg transition-all duration-300"
                      >
                        Apply for Platinum Membership
                      </a>
                    </motion.div>
                  </div>

                  {/* Right Column: Benefits List */}
                  <div className="w-full md:w-3/5 p-6 md:p-10 relative bg-[#f4f5f7]">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#b0b5b9]/20 rounded-full blur-3xl pointer-events-none" />
                    <h4 className="text-xl md:text-2xl font-bold text-[#111111] mb-8 flex items-center gap-3">
                      <div className="w-2 h-8 bg-[#8e9399] rounded-full" />
                      Membership Privileges
                    </h4>
                    <div className="space-y-6 relative z-10">
                      {[
                        "1 free Nomination in each program: Rendezvous CEOs' Dinner meet Programs (CEOs'/ Top Management)",
                        "2 free Nominations in each program: Management Development Programs (MDP) in Indore & training@doorstep programs in Pithampur/Dewas/Ujjain (Any Manager / HOD)",
                        "50% Discount on Diksha In-House Program for Employees (Min 4 hrs each Training Session)",
                        "Free Evening sessions and Tea Networking",
                        "Free HR's, IT's, Women's & Couple's Forum programs",
                        "1 free Copies: Annual Indore Manager Magazine Subscription (Quarterly Circulation)",
                        "Complimentary: IMA International Management Conclave 2027/Women Conclave 2026 (Women Members)/Start-up Event",
                        "2 Chairs in Executive Zone at IMA Conclave"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="w-6 h-6 rounded-full bg-[#b0b5b9]/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#b0b5b9]/40 group-hover:bg-[#8e9399] transition-colors">
                            <Check className="w-3.5 h-3.5 text-[#5a6066] group-hover:text-white transition-colors" strokeWidth={3} />
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-[#111111] transition-colors">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isViewMoreOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">All <span className="text-[#D4AF37]">Benefits</span></h3>
                <button
                  onClick={() => setIsViewMoreOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="relative group"
                    >
                      <div className="bg-[#F8F8F8] rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white group-hover:shadow-xl border border-gray-100">
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          className="mb-6"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                            <benefit.icon className="w-8 h-8 text-white" />
                          </div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] rounded-b-2xl"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
