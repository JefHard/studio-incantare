import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsappButton from './WhatsappButton';
import WhatsappModal from './WhatsappModal';

export const AppLayout = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Nossos novos componentes */}
      <WhatsappButton onClick={() => setIsModalOpen(true)} />
      <WhatsappModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};