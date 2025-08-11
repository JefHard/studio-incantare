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

const teamMembers = [
  {
    name: 'Alexandre Rios',
    role: 'Fundador & Arquiteto de Software',
    bio: 'Visionário apaixonado por transformar ideias complexas em soluções elegantes e funcionais.',
    imageUrl: 'https://placehold.co/400x400/000000/D4AF37',
  },
  {
    name: 'Beatriz Costa',
    role: 'Designer de UI/UX',
    bio: 'Especialista em criar interfaces intuitivas e memoráveis que conectam usuários e tecnologia.',
    imageUrl: 'https://placehold.co/400x400/000000/D4AF37',
  },
  {
    name: 'Carlos Silva',
    role: 'Desenvolvedor Full-Stack',
    bio: 'Engenheiro versátil que domina tanto o front-end quanto o back-end para construir sistemas robustos.',
    imageUrl: 'https://placehold.co/400x400/000000/D4AF37',
  },
];


export const getProjects = () => {
  return projectsData;
};

export const getTeamMembers = () => {
  return teamMembers;
};