export default function Header() {
    return (
      <header className="relative bg-cover bg-center h-auto flex items-center justify-center text-white" style={{ backgroundImage: "url('./bg.webp')" }} id="inicio">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center max-w-2xl p-4">
          <img src="./logo.png" alt="Valle Empreendimento" className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold">VALLE CENTRO EMPRESARIAL</h1>
          <p className="mt-4 text-lg">Um espaço projetado para o sucesso do seu negócio em Bragança Paulista.</p>
          <a href="#form" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition">Saiba mais</a>
        </div>
      </header>
    );
  }
  