import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xqeyvwdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-24 px-4 bg-[#FAFAFA] relative overflow-hidden">
      {/* Unique Theme: Immersive Mesh Gradient */}
      <motion.div
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#D4AF37]/10 via-[#E6C97A]/5 to-transparent rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#111111]/5 via-[#D4AF37]/5 to-transparent rounded-full blur-[80px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        animate={{ backgroundPosition: ['0px 0px', '24px 24px'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#111111]"
        >
          Get in <span className="text-[#D4AF37]">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          We'd love to hear from you. Reach out for any inquiries.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }} className="flex items-start gap-4 group">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 12 }}
                className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-[#111111] mb-1">Email</h3>
                <p className="text-gray-600">contact@imaindore.com</p>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }} className="flex items-start gap-4 group">
              <motion.div
                whileHover={{ scale: 1.15, rotate: -12 }}
                className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-[#111111] mb-1">Phone</h3>
                <p className="text-gray-600">+91 888-999-6133</p>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }} className="flex items-start gap-4 group">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 12 }}
                className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-[#111111] mb-1">Address</h3>
                <p className="text-gray-600"> 56/1, Jall Auditorium, South Tukoganj, Indore - 452001, Madhya Pradesh, India</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/40 group hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] transition-all duration-500"
          >
            <div className="space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all duration-300"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all duration-300"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'submitting'}
                className={`w-full px-6 py-4 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg transition-all ${
                  status === 'success' ? 'bg-green-500 hover:bg-green-600' :
                  status === 'error' ? 'bg-red-500 hover:bg-red-600' :
                  'bg-gradient-to-r from-[#D4AF37] to-[#E6C97A]'
                }`}
              >
                <span>
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                </span>
                {status === 'idle' && <Send className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
