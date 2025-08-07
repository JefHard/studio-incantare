import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      
      <section className="text-center pt-16 md:pt-24">
      
        <h1 className="text-4xl md:text-6xl font-bold leading-snug transition-transform duration-500 hover:scale-105">
          Tecnologia feita com alma.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-300">
          Criamos software como arte funcional.
        </p>
        <Link
          to="/sobre"
          className="mt-8 inline-block bg-gold hover:opacity-80 text-white font-bold py-3 px-8 rounded-full transition-opacity duration-300"
        >
          Explorar
        </Link>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
        
          <h2 className="text-3xl font-bold mb-6">Nossa Essência</h2>
          <div className="text-slate-400 space-y-4 text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p>
              Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
  
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black border border-gold/20 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="https://placehold.co/600x400/000000/FFFFFF" alt="Projeto 1" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Projeto Alpha</h3>
              <p className="text-slate-400">Uma breve descrição sobre o que torna este projeto especial.</p>
            </div>
          </div>
          <div className="bg-black border border-gold/20 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="https://placehold.co/600x400/000000/FFFFFF" alt="Projeto 2" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Projeto Beta</h3>
              <p className="text-slate-400">Uma breve descrição sobre o que torna este projeto especial.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <p className="text-3xl italic text-slate-400 max-w-4xl mx-auto">
          "Ideias são fáceis. O difícil é executá-las com alma."
        </p>
      </section>
    </div>
  );
}