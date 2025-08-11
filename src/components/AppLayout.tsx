
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


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