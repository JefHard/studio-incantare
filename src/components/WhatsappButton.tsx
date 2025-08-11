import whatsAppIconUrl from '../assets/WhatsApp_Logo.png';

type WhatsappButtonProps = {
  onClick: () => void;
};

export default function WhatsappButton({ onClick }: WhatsappButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-transparent w-12 h-12 rounded-full
                 shadow-lg transform hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Iniciar conversa no WhatsApp"
    >
      <img src={whatsAppIconUrl} alt="WhatsApp" className="w-full h-full rounded-full" />
    </button>
  );
}