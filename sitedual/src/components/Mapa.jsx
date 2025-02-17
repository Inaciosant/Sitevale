import { useState } from 'react';
import { FaExpand } from 'react-icons/fa'; // Ícone de expandir
import { FaCompress } from 'react-icons/fa'; // Ícone de reduzir

const Mapa = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      const iframeElement = document.getElementById('map-iframe');
      if (iframeElement.requestFullscreen) {
        iframeElement.requestFullscreen();
      } else if (iframeElement.mozRequestFullScreen) { // Firefox
        iframeElement.mozRequestFullScreen();
      } else if (iframeElement.webkitRequestFullscreen) { // Chrome, Safari
        iframeElement.webkitRequestFullscreen();
      } else if (iframeElement.msRequestFullscreen) { // IE/Edge
        iframeElement.msRequestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="max-w-full mx-auto py-10 px-4 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">Veja nossa disponibilidade de lotes</h2>
      <h4 className="text-lg text-gray-600 mb-4">Clique nos lotes para mais informações</h4>
      <div className="relative w-full h-100 shadow-lg rounded-lg overflow-hidden">
        <iframe
          id="map-iframe"
          src="https://valleempreendimentos.ibsystem.com.br/mapa_site.php?empreendimento_id=1"
          className="w-full h-full"
          title="Mapa do empreendimento"
        ></iframe>
        <button 
          onClick={handleFullscreenToggle} 
          className="absolute top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          {isFullscreen ? <FaCompress size={24} /> : <FaExpand size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Mapa;
