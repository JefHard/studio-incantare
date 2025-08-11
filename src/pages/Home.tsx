import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { projectsData } from '../services/mockData'; 
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-24">

      <AnimatedSection className="text-center pt-16 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug mb-4">
          Tecnologia feita com alma.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-300">
          Criamos software como arte funcional.
        </p>
        <Button to="/sobre" className="mt-8">
          Explorar
        </Button>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              imageUrl={project.imageUrl}
              title={project.name}
              description={project.description}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center py-16">
        <p className="text-3xl italic text-slate-400 max-w-4xl mx-auto">
          "Ideias são fáceis. O difícil é executá-las com alma."
        </p>
      </AnimatedSection>
    </div>
  );
}