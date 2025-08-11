import { teamMembers } from '../services/mockData';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';

export default function Time() {
  return (
    <div className="py-16">
      <AnimatedSection className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nossa Equipe
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          A alma da nossa empresa são as pessoas. Conheça os talentos que transformam ideias em realidade.
        </p>
      </AnimatedSection>
      
      <AnimatedSection className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              imageUrl={member.imageUrl}
              title={member.name}
              description={`${member.role} — ${member.bio}`}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}