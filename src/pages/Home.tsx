import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { projectsData } from '../services/mockData'; 

export default function Home() {

  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-24">
      
      <section className="text-center pt-16 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Tecnologia feita com alma.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-300">
          Criamos software como arte funcional.
        </p>
        <Button to="/sobre">
          Explorar
        </Button>
      </section>

      <section className="container mx-auto px-4">
      
      </section>

      <section className="container mx-auto px-4">
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
      </section>

      <section className="text-center py-16">
      
      </section>
    </div>
  );
}