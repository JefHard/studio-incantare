import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const HamburgerIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> );
const CloseIcon = () => ( <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> );

const navLinks = [
  { name: 'Início', path: '/' }, { name: 'Sobre', path: '/sobre' }, { name: 'Projetos', path: '/projetos' }, { name: 'Time', path: '/time' }, { name: 'Contato', path: '/contato' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = "font-medium hover:text-gold transition-colors duration-300";
  const activeLinkClass = "text-gold";

  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl hover:text-gold transition-colors duration-300">
          Studio Incantare
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>
      <div className={`md:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}