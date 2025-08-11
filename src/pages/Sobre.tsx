import { manifestoFrases } from '../services/mockData';
import AnimatedSection from '../components/AnimatedSection';

export default function Sobre() {
  return (
    <div className="space-y-16 md:space-y-24 py-16">

      <AnimatedSection className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Nossa Missão
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
          Nossa missão é transcender o código. Acreditamos que a tecnologia deve ser uma extensão da intenção humana...
        </p>
      </AnimatedSection>

      <AnimatedSection className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Manifesto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manifestoFrases.map((frase, index) => (
              <div key={index} className="bg-black border border-gold/20 rounded-lg p-8 shadow-lg hover:shadow-gold/20 hover:-translate-y-2 transition-all duration-300 text-center flex items-center justify-center">
                <p className="text-xl italic text-slate-300">"{frase}"</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O Visionário</h2>
        <div className="bg-black border border-gold/20 rounded-lg p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img src="https://placehold.co/150x150/000000/D4AF37" alt="Foto do Fundador" className="w-36 h-36 rounded-full flex-shrink-0 border-4 border-gold/50" />
          <div>
            <h3 className="text-2xl font-bold">Alexandre Rios</h3>
            <p className="text-gold font-semibold">Fundador & Arquiteto de Software</p>
            <p className="text-slate-400 mt-4 italic">
              "Desde o início, a visão do Studio Incantare era clara..."
            </p>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}