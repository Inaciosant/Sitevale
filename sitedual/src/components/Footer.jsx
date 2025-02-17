import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-4">
          <img src="./logo.png" alt="Logo" className="mx-auto h-48" />
        </div>

        {/* Redes Sociais e Email */}
        <div className="flex justify-center mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-xl hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-xl hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="mailto:exemplo@dominio.com" className="mx-3 text-xl hover:text-red-500">
            <FaEnvelope />
          </a>
        </div>

        {/* Endereço */}
        <p className="text-sm text-gray-400 mb-4">
          Av José Gomes da Rocha Leal, nº 673, Centro, - Cep 12.900-301 - Bragança Paulista/SP
        </p>

        {/* Linha */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Texto de Desenvolvimento */}
        <p className="text-sm text-gray-400">
          Desenvolvido por Lote Mobile
        </p>
      </div>
    </footer>
  );
};

export default Footer;
