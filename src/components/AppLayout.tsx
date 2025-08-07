import { Outlet } from 'react-router-dom';
import Header from './Header';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center mt-auto">
      <p>&copy; 2025 Studio Incantare. Todos os direitos reservados.</p>
    </footer>
  );
};

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};