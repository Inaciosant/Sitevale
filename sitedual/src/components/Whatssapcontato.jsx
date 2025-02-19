import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "5511910760369"; // Substitua pelo número correto
  const message = encodeURIComponent("Olá, gostaria de mais informações sobre o Valle Centro Empresarial.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="text-center mt-6 mb-6" id="form">
      <h2 className="text-3xl font-bold text-dark-600 mb-2 border-b-4 inline-block pb-2 border-blue-600">Entre em contato</h2>
      <div className="flex justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition mt-6 mb-6"
        >
          <FaWhatsapp size={24} />
          Fale Conosco no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WhatsappButton;
