import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WhatsappModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '+55' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const myPhoneNumber = '5513999998888'; 
    
    const message = `Olá! Meu nome é ${formData.name}. Gostaria de iniciar uma conversa. (Email: ${formData.email}, Telefone: ${formData.phone})`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-neutral-900 rounded-lg p-8 shadow-2xl w-full max-w-md border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Studio Incantare</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
            </div>
            <p className="text-slate-400 mb-6">Olá! Preencha os campos abaixo para iniciar a conversa no WhatsApp</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Nome *" required className="w-full p-3 bg-neutral-800 rounded-md border border-neutral-700 focus:ring-gold focus:border-gold" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email *" required className="w-full p-3 bg-neutral-800 rounded-md border border-neutral-700 focus:ring-gold focus:border-gold" onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Telefone (ex: +55 13 99999-8888)" value={formData.phone} required className="w-full p-3 bg-neutral-800 rounded-md border border-neutral-700 focus:ring-gold focus:border-gold" onChange={handleChange} />
              
              <button type="submit" className="w-full bg-gold hover:opacity-80 text-white font-bold py-3 rounded-md transition-opacity duration-300">
                Iniciar a conversa
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}