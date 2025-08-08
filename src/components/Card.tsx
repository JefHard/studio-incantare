type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export default function Card({ imageUrl, title, description }: CardProps) {
  return (
    
    <div 
      className="bg-black border border-gold/20 rounded-lg overflow-hidden shadow-lg 
                 transform hover:-translate-y-2 transition-transform duration-300 group"
    >
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Imagem do ${title}`} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}