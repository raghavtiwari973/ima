import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  isBot: boolean;
}

export const SYSTEM_PROMPT = `You are IMA-Helper, the official, friendly, knowledgeable, and enthusiastic virtual assistant of **Indore Management Association (IMA Indore)** — Central India’s leading management forum since 1962.

Your personality & tone:
- Warm, professional, confident, proud and approachable
- Speak with genuine pride about IMA’s legacy and impact
- Never pushy, salesy or aggressive — always benefit-focused and helpful
- Use short paragraphs for easy mobile reading
- Frequently highlight real value: networking with top leaders, learning from eminent speakers, leadership development, visibility, employee growth, youth empowerment
- End many responses with a gentle, soft call-to-action such as:
  “Would you like to know more about joining IMA?”
  “Shall I share the best contact for a quick membership discussion?”
  “What would be most helpful for you right now?”

Core mission & what you MUST do:
1. Enthusiastically introduce IMA and explain why it is valuable for professionals, companies and students in Central India
2. Help people understand membership categories and guide them to choose the best fit (never decide for them — help them decide)
3. Answer questions accurately about programs, events, benefits, student chapters, fees, contacts
4. Promote joining in a warm, value-driven way
5. Always showcase pride in:
   - 63+ years of existence (as of 2025–2026)
   - 18 times awarded **Best Local Management Association** by AIMA
   - Strong community impact across Indore and Central India

Key facts you MUST use exactly (do NOT invent, exaggerate or change numbers):
• Full name: Indore Management Association (IMA Indore)
• Non-profit organization, affiliated with All India Management Association (AIMA)
• Established in 1962 → 63+ years of glorious legacy
• 500+ corporate and individual members
• 3000+ management students associated through 21 Student Chapters
• 18× Best Local Management Association Award by AIMA
• Average 150+ programs per year (corporate + student combined)

Main programs & events:
• Flagship: IMA International Management Conclave (33 editions so far)
• Signature: Exclusive CEO / Rendezvous Dinner Meets
• Regular: Evening Sessions, Training Programs, Management Development Programs (MDPs), Training@Doorstep
• Specialized Forums: HR Forum, IT Forum, Women Forum, Couple’s Forum, etc.
• Student-focused: 60–70 annual programs across 21 Student Chapters
• Recent / popular initiatives (last 2–3 years):
  - AI Innovation Drive (1000+ participants)
  - AI & Innovation Summit
  - HR Conclave
  - Fintech Conclave
  - Women Brand Quiz
  - Ignite Series & Shine Circle (women empowerment)
  - Startup Incubation Drive & Startup Conclave

Achievements snapshot (use these numbers proudly):
• 33 International Management Conclaves
• 500+ eminent speakers hosted
• 2000+ corporate participants in conclaves
• Over 1 lakh professionals benefited overall
• 150+ programs/year on average recently

Membership categories – 2025–2026 fees (18% GST extra on all fees):
Mention clearly that fees are “as of 2025–2026” and subject to change.

Diamond Premium
Annual: ₹50,000 + one-time ₹2,000
Benefits:
• 2 free nominations per CEO Dinner Meet
• 3 free nominations per MDP / Training@Doorstep
• 1 free Diksha in-house training session
• Free entry to all Evening Sessions & Forums
• 1 complimentary copy of Indore Manager Magazine
• Complimentary International Conclave pass + 2 Executive Zone chairs

Platinum Premium
Annual: ₹35,000 + one-time ₹2,000
Benefits:
• 1 free nomination per CEO Dinner Meet
• 2 free nominations per MDP
• 50% discount on Diksha in-house session
• Free entry to all Evening Sessions & Forums
• 1 complimentary copy of Indore Manager Magazine
• Complimentary International Conclave pass + 2 Executive Zone chairs

Gold
Annual: ₹15,000 + one-time ₹1,000
Benefits:
• 1 free nomination per CEO Dinner Meet
• 2 free MDP tickets per year
• Free entry to all Evening Sessions & Forums
• 1 complimentary copy of Indore Manager Magazine
• Complimentary International Conclave pass + 1 Executive Zone chair
• Corporate / Institutional – Gold & above: https://www.imaindore.com/memberCorporate.php

Silver
Annual: ₹6,000 + one-time ₹1,000
Benefits:
• 1 CEO Dinner ticket per year
• 1 MDP ticket per year
• Free entry to all Evening Sessions & Forums
• 1 complimentary copy of Indore Manager Magazine
• Complimentary International Conclave pass + 1 Executive Zone chair
• Individual – especially Silver: https://www.imaindore.com/Individual-form.php

Common benefits for all members:
• Quarterly Indore Manager Magazine (opportunity to publish articles)
• Powerful networking with Indore’s top CEOs, business leaders & professionals
• Branding & visibility opportunities
• Access to employee development programs
• Opportunity to engage with and mentor young talent through student chapters

Student Chapters:
• Active in 21 reputed colleges/institutes
• 60–70 focused programs per year
• Focus: skill-building, industry exposure, leadership development, placements support

Official contact details (use EXACTLY these — do not change):
• Phone: +91 888 999 6133
• Email: contact@imaindore.com
• Website: www.imaindore.com

Membership application links (share when relevant):
• Corporate / Institutional – Gold & above: https://www.imaindore.com/memberCorporate.php
• Individual – especially Silver: https://www.imaindore.com/Individual-form.php

Response guidelines:
- If user is unsure about membership → ask 2–3 gentle qualifying questions:
  • What is your role / company size?
  • What is your main goal? (networking, CEO-level access, employee training, branding, student development…)
  • What is your approximate budget range?
- When comparing memberships → use clean bullet points or simple table format
- If asked about events beyond your knowledge → say: “For the latest event schedule and registrations, I recommend checking www.imaindore.com or contacting the team directly.”
- If asked anything you don’t know → politely say: “That’s a great question! Let me connect you with our team for the most accurate and updated information.”
- Never guess future events, dates, speakers or fee changes.
- Start new conversations with a short warm welcome unless the user jumps straight into a specific question.

You are proud to represent IMA Indore — now help every user with enthusiasm and care!`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello there! 👋 I am IMA-Helper, the official virtual assistant of Indore Management Association (IMA Indore).\n\nWith over 63 years of glorious legacy, we are Central India’s leading platform for leadership, learning, and networking!\n\nHow can I help you accelerate your growth today? Try using a command below!', isBot: true },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickCommands = ['/about', '/membership', '/events', '/recommend', '/join', '/help'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // This function acts as the Chatbot's "brain"
  const getBotResponse = (userInput: string) => {
    const text = userInput.trim().toLowerCase();

    // COMMAND MODE
    if (text.startsWith('/')) {
      switch (text) {
        case '/join':
          return "Ready to join our community? We’d be thrilled to welcome you! 🚀\n\nFor Individual Membership (especially Silver For Women), apply here:\n🔗 https://www.imaindore.com/Individual-form.php\n\nFor Corporate/Institutional Membership (Gold & above), apply here:\n🔗 https://www.imaindore.com/memberCorporate.php\n\nHere are our official contact details:\n\n📞 Phone: +91 888 999 6133\n✉️ Email: contact@imaindore.com\n🌐 Website: www.imaindore.com";
        case '/help':
          return "Here are the commands you can use:\n👉 /about - Discover our legacy\n👉 /membership - View 2025-2026 plans\n👉 /recommend - Find your perfect fit\n👉 /events - Explore our programs\n👉 /benefits - See member perks\n👉 /contact - Get in touch\n👉 /join - Apply for membership\n\n📞 Phone: +91 888 999 6133\n✉️ Email: contact@imaindore.com\n🌐 Website: www.imaindore.com\n\nWhat would be most helpful for you right now?";
        case '/about':
          return "We are so proud of our journey! 🌟\n\nEstablished in 1962, IMA Indore is a non-profit organization affiliated with AIMA. Over our 63+ years of legacy, we have grown to a family of 500+ corporate members and 3000+ management students across 21 Student Chapters.\n\n🏆 We are honored to have won the Best Local Management Association Award by AIMA 18 times!\n\nWould you like to know more about joining IMA?";
        case '/membership':
          return "We have fantastic membership categories to suit your goals! (Fees as of 2025–2026, 18% GST extra):\n\n💎 Diamond Premium: ₹50,000 + ₹2k one-time\n🏆 Platinum Premium: ₹35,000 + ₹2k one-time\n🥇 Gold: ₹15,000 + ₹1k one-time\n🥈 Silver: ₹6,000 + ₹1k one-time\n\nWould you like to know more about joining IMA or type /recommend for help choosing?";
        case '/recommend':
          return "I'd love to help you find the best fit! Let's figure this out together.\n\nCould you tell me a bit about yourself?\n• What is your role / company size?\n• What is your main goal? (networking, CEO-level access, employee training, branding, student development…)\n• What is your approximate budget range?\n\n(Tip: For students & individuals, Silver is great. For corporate teams, Gold, Platinum, or Diamond offer incredible value!)";
        case '/events':
          return "Our events are where the magic happens! We host over 150 programs annually.\n\n✨ Flagship: IMA International Management Conclave (33 editions so far!)\n🤝 Signature: Exclusive CEO / Rendezvous Dinner Meets\n📈 Regular: Evening Sessions, MDPs, Training@Doorstep\n👥 Forums: HR, IT, Women, and Couple's Forums\n🚀 Recent: AI Innovation Drive, Fintech Conclave & Startup Incubation\n\nWould you like to know more about joining IMA?";
        case '/benefits':
          return "Being an IMA member opens incredible doors! 🚪✨\n\n• Powerful networking with Indore’s top CEOs & business leaders\n• Access to employee development & MDPs\n• Branding & visibility opportunities\n• Quarterly Indore Manager Magazine\n• Engage with and mentor young talent through our 21 Student Chapters\n\nWhat would be most helpful for you right now?";
        case '/contact':
          return "We would absolutely love to hear from you! Here are our official contact details:\n\n📞 Phone: +91 888 999 6133\n✉️ Email: contact@imaindore.com\n🌐 Website: www.imaindore.com\n\nShall I share the best contact for a quick membership discussion?";
        default:
          return "Hmm, I don't quite recognize that command. Type /help to see all the ways I can assist you today!";
      }
    }

    // NORMAL CHAT MODE (Smart Fallbacks)
    if (/\b(hi|hello|hey)\b/.test(text)) {
      return "Hello! 👋 I am IMA-Helper. How can I help you discover the incredible networking and leadership opportunities at IMA Indore today? Try using /help to see what I can do!";
    }
    
    // Advanced Keyword Search based on the System Prompt Data
    if (text.includes('diamond')) {
      return "💎 Diamond Premium Membership\nAnnual: ₹50,000 + one-time ₹2,000 (18% GST extra)\n\n• 2 free nominations per CEO Dinner Meet\n• 3 free nominations per MDP / Training@Doorstep\n• 1 free Diksha in-house training\n• Free Evening Sessions & Forums\n• 1 complimentary Indore Manager Magazine\n• Complimentary International Conclave pass + 2 Executive Zone chairs\n\nApply here: https://www.imaindore.com/memberCorporate.php";
    }
    if (text.includes('platinum')) {
      return "🏆 Platinum Premium Membership\nAnnual: ₹35,000 + one-time ₹2,000 (18% GST extra)\n\n• 1 free nomination per CEO Dinner Meet\n• 2 free nominations per MDP\n• 50% discount on Diksha in-house session\n• Free Evening Sessions & Forums\n• 1 complimentary Indore Manager Magazine\n• Complimentary International Conclave pass + 2 Executive Zone chairs\n\nApply here: https://www.imaindore.com/memberCorporate.php";
    }
    if (text.includes('gold')) {
      return "🥇 Gold Membership\nAnnual: ₹15,000 + one-time ₹1,000 (18% GST extra)\n\n• 1 free nomination per CEO Dinner Meet\n• 2 free MDP tickets per year\n• Free Evening Sessions & Forums\n• 1 complimentary Indore Manager Magazine\n• Complimentary International Conclave pass + 1 Executive Zone chair\n\nApply here: https://www.imaindore.com/memberCorporate.php";
    }
    if (text.includes('silver')) {
      return "🥈 Silver Membership\nAnnual: ₹6,000 + one-time ₹1,000 (18% GST extra)\n\n• 1 CEO Dinner ticket per year\n• 1 MDP ticket per year\n• Free Evening Sessions & Forums\n• 1 complimentary Indore Manager Magazine\n• Complimentary International Conclave pass + 1 Executive Zone chair\n\nApply here: https://www.imaindore.com/Individual-form.php";
    }
    if (text.includes('student') || text.includes('college') || text.includes('youth') || text.includes('chapter')) {
      return "🎓 Student Chapters\n\nWe have 21 active Student Chapters in reputed colleges and institutes! We organize 60-70 focused programs per year for students, focusing on:\n• Skill-building\n• Industry exposure\n• Leadership development\n• Placements support\n\nWould you like to know how to start a chapter at your institute?";
    }
    if (text.includes('corporate') || text.includes('company') || text.includes('institutional') || text.includes('business')) {
      return "🏢 Corporate / Institutional Membership\n\nFor companies, we highly recommend our Gold, Platinum, or Diamond memberships. They offer fantastic value for your teams, including CEO Meets, MDPs, and in-house training!\n\nYou can apply directly here: https://www.imaindore.com/memberCorporate.php";
    }
    if (text.includes('individual') || text.includes('single') || text.includes('professional')) {
      return "💼 Individual Membership\n\nOur Silver Membership is perfect for individual professionals! It costs ₹6,000/yr (+ GST) and includes networking, MDP tickets, and a Conclave pass.\n\nYou can apply directly here: https://www.imaindore.com/Individual-form.php";
    }
    if (text.includes('ceo') || text.includes('rendezvous') || text.includes('meet')) {
      return "🤝 Rendezvous CEO Dinner Meets\n\nOur exclusive signature events! Depending on your membership tier (Diamond, Platinum, Gold, or Silver), you get complimentary nominations to dine and network with top industry leaders.\n\nWould you like to know which membership gives you the most access?";
    }
    if (text.includes('mdp') || text.includes('training') || text.includes('diksha')) {
      return "📈 Training & Development\n\nWe offer regular Management Development Programs (MDPs), Training@Doorstep, and Diksha in-house sessions for employees.\n\nDiamond members even get 3 free MDP nominations and 1 fully free Diksha session!\n\nWant to know more about our membership plans?";
    }
    if (text.includes('conclave') || text.includes('flagship')) {
      return "✨ IMA International Management Conclave\n\nOur flagship event! We have hosted 33 editions featuring 500+ eminent speakers and 2000+ corporate participants.\n\nAll our paid members get a complimentary pass to this incredible event. Shall I help you join?";
    }
    if (text.includes('award') || text.includes('best') || text.includes('aima')) {
      return "🏆 Best Local Management Association\n\nWe are extremely proud to have been awarded the 'Best Local Management Association' by AIMA 18 times! This reflects our consistency, excellence, and strong community impact across Central India.";
    }
    if (text.includes('history') || text.includes('established') || text.includes('legacy') || text.includes('since') || /\bold\b/.test(text)) {
      return "🕰️ Our Legacy\n\nEstablished in 1962, IMA Indore has a glorious legacy of over 63 years! We are a non-profit organization affiliated with AIMA, bringing together 500+ corporates and 3000+ management students.";
    }
    if (text.includes('contact') || text.includes('call') || text.includes('email') || text.includes('reach') || text.includes('number') || text.includes('help')) {
      return "We would absolutely love to hear from you!\n\n📞 Phone: +91 888 999 6133\n✉️ Email: contact@imaindore.com\n🌐 Website: www.imaindore.com\n\nShall I share the best contact for a quick membership discussion?";
    }
    if (text.includes('membership') || text.includes('fee') || text.includes('price') || text.includes('cost') || text.includes('plan')) {
      return "We have fantastic memberships including Silver, Gold, Platinum Premium, and Diamond Premium starting from ₹6,000/yr (plus GST).\n\n👉 Type /membership for a quick overview, or ask me about a specific tier (like 'Diamond' or 'Silver')!";
    }
    if (text.includes('event') || text.includes('program') || text.includes('forum')) {
      return "We host over 150 amazing programs annually!\n\nThis includes the famous International Management Conclave (33 editions!), CEO Meets, MDPs, and specialized forums (HR, IT, Women, Couple's).\n\n👉 Type /events for more info!";
    }
    if (text.includes('join') || text.includes('apply') || text.includes('register') || text.includes('form')) {
      return "Awesome! We'd love to have you in the IMA family. 🚀\n\nFor Women's Membership, apply here:\nhttps://www.imaindore.com/Individual-form.php\n\nFor Corporate Membership, apply here:\nhttps://www.imaindore.com/memberCorporate.php";
    }

    return "That’s a great question! While I know all about our memberships, events, and 63+ year legacy, I might need a bit more context for that specific query.\n\nLet me connect you with our team for the most accurate information. You can reach them at +91 888 999 6133 or contact@imaindore.com.\n\nWhat would be most helpful for you right now?";
  };

  const renderMessageText = (text: string, isBot: boolean) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-1 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
              isBot
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] text-white hover:shadow-md hover:scale-105'
                : 'bg-white/20 text-white underline'
            }`}
          >
            {part.includes('Individual') ? 'Individual & Women Form ↗' : part.includes('Corporate') ? 'Corporate Form ↗' : 'Visit Link ↗'}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const handleSend = (textToSend = input) => {
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { text: textToSend, isBot: false }]);
    setInput('');
    setIsTyping(true);

    // Simulate network delay / AI thinking time
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: getBotResponse(textToSend),
          isBot: true,
        },
      ]);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2s for realism
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] rounded-full shadow-2xl flex items-center justify-center text-white"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 sm:bottom-28 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#D4AF37]/20 overflow-hidden flex flex-col h-[500px] max-h-[70vh]">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#E6C97A] p-4 flex items-center gap-3 shrink-0 relative overflow-hidden">
                <motion.div
                  className="absolute -top-10 -right-10 w-24 h-24 bg-white/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">IMA-Bot</h3>
                  <p className="text-white/80 text-xs">Always here to help ⚡</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`whitespace-pre-wrap max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        message.isBot
                          ? 'bg-[#F8F8F8] text-[#111111] rounded-tl-sm border border-gray-100'
                          : 'bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] text-white rounded-tr-sm'
                      }`}
                    >
                      {renderMessageText(message.text, message.isBot)}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-[#F8F8F8] px-4 py-3 rounded-2xl rounded-tl-sm border border-gray-100 flex gap-1 items-center">
                      <motion.div className="w-2 h-2 bg-[#D4AF37] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                      <motion.div className="w-2 h-2 bg-[#D4AF37] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                      <motion.div className="w-2 h-2 bg-[#D4AF37] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                  {quickCommands.map(cmd => (
                    <button key={cmd} onClick={() => handleSend(cmd)} className="whitespace-nowrap px-4 py-1.5 bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full text-xs font-medium hover:bg-[#D4AF37] hover:text-white transition-all">
                      {cmd}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                    placeholder="Type a message or /command..."
                    className="flex-1 px-4 py-3 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition-all"
                  />
                  <motion.button
                    onClick={() => handleSend(input)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 bg-gradient-to-br from-[#D4AF37] to-[#E6C97A] text-white rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918889916133?text=Hello%20IMA!%20I%20would%20like%20to%20know%20more%20about%20memberships."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-[4.5rem] sm:bottom-8 sm:right-28 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#20bd5a] transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </>
  );
};
