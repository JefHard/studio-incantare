import { useState } from 'react';

// Ícones de redes sociais
const LinkedinIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.199 1.561-4.001 3.501-4.001s3.499 1.802 3.499 4.001v8.399h4.988v-10.131c0-4.87-3.37-8.869-7.875-8.869s-7.875 3.999-7.875 8.869v1.262z" /></svg> );
const FacebookIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg> );
const InstagramIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg> );

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name) newErrors.name = 'O nome é obrigatório.';
    if (!formData.email) newErrors.email = 'O e-mail é obrigatório.';
    if (!formData.message) newErrors.message = 'A mensagem é obrigatória.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Mensagem enviada com sucesso! (simulação)');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="py-16">
      <section className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">Fale Conosco</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele.
        </p>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        <div className="bg-neutral-900 p-8 rounded-lg border border-gold/20">
          <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 focus:ring-gold focus:border-gold" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">E-mail</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 focus:ring-gold focus:border-gold" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 focus:ring-gold focus:border-gold"></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-gold hover:opacity-80 text-white font-bold py-3 px-8 rounded-full transition-opacity duration-300">
              Enviar
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-neutral-900 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
            <div className="space-y-2 text-slate-300">
              <p>Rua da Inovação, 123, Sala 404</p>
              <p>Tecnopólis, SP - Brasil</p>
              <p>Email: contato@studioincantare.com</p>
              <p>Telefone: (13) 99999-8888</p>
            </div>
          </div>
          <div className="bg-neutral-900 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><LinkedinIcon /></a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><FacebookIcon /></a>
              <a href="#" className="text-slate-400 hover:text-gold transition-colors"><InstagramIcon /></a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}