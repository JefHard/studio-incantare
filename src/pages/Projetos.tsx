
const projectsData = [
  {
    name: 'Projeto Alpha',
    description: 'Uma plataforma inovadora de e-commerce construída com foco na experiência do usuário e performance.',

    imageUrl: 'https://placehold.co/600x400/000000/D4AF37',
  },
  {
    name: 'Projeto Beta',
    description: 'Aplicativo mobile para gerenciamento de finanças pessoais, com design intuitivo e sincronização na nuvem.',

    imageUrl: 'https://placehold.co/600x400/000000/D4AF37',
  },
  {
    name: 'Projeto Gamma',
    description: 'Sistema de agendamento online para clínicas, otimizando o fluxo de pacientes e a gestão de horários.',

    imageUrl: 'https://placehold.co/600x400/000000/D4AF37',
  },
];

export default function Projetos() {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nossos Projetos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          Cada projeto é uma jornada, uma história de colaboração e inovação. Aqui estão alguns dos nossos trabalhos mais recentes.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
  
            <div 
              key={index} 
              className="bg-black border border-gold/20 rounded-lg overflow-hidden shadow-lg 
                         transform hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={`Imagem do ${project.name}`} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="text-slate-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}