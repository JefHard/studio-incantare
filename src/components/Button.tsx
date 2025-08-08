import { Link } from 'react-router-dom';

type ButtonProps = {
  to: string;
  children: React.ReactNode;
};

export default function Button({ to, children }: ButtonProps) {
    
  const buttonClasses = "inline-block bg-gold hover:opacity-80 text-white font-bold py-3 px-8 rounded-full transition-opacity duration-300";

  return (
    <Link to={to} className={buttonClasses}>
      {children}
    </Link>
  );
}