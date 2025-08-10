import { Link } from 'react-router-dom';
import { navLinks } from '../services/mockData';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-slate-400 py-4 border-t border-gold/20">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          

          <div>

            <Link to="/" className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Studio Incantare Logo" className="h-8" />

              <span className="font-bold text-sm text-white">Studio Incantare</span>
            </Link>
            <p className="text-xs italic mt-2">
              “Criado com intuição e propósito.”
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-white mb-2 text-sm">Navegação</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="hover:text-gold transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="text-center text-xs pt-4 mt-4 border-t border-neutral-800">
          <p>&copy; {new Date().getFullYear()} Studio Incantare. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}