import { projectsData } from '../services/mockData';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';

export default function Projetos() {
  return (
    <div className="py-16">
      
      <AnimatedSection className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nossos Projetos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          Cada projeto é uma jornada, uma história de colaboração e inovação. Aqui estão alguns dos nossos trabalhos mais recentes.
        </p>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <Card 
              key={index}
              imageUrl={project.imageUrl}
              title={project.name}
              description={project.description}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}