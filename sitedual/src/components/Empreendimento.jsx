import { FaBuilding, FaDollarSign, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';

const SobreEmpreendimento = () => {
    return (
        <section className="bg-[#006bce] text-white py-16 px-6" id='emprend'>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold border-b-4 border-white inline-block pb-2">Sobre o Empreendimento</h2>
                    <p className="mt-4 text-lg">
                        Bem-vindo ao Loteamento Valle Centro Empresarial – 
                        O Futuro dos Negócios Começa Aqui! Estrategicamente localizado para impulsionar 
                        o crescimento da sua empresa, 
                        o Loteamento Valle Centro Empresarial é um empreendimento planejado para atender às demandas de 
                        indústrias, comércios, centros logísticos e prédios de escritórios Com infraestrutura com vias 
                        amplas, segurança e fácil acesso às principais rodovias e centro urbano , 
                        nosso loteamento oferece tudo o que sua empresa precisa para crescer com eficiência e 
                        sustentabilidade. O Valle Centro Empresarial é a escolha ideal para quem busca localização
                         privilegiada, comodidade e um ambiente preparado para o sucesso.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src="./logo.png" alt="Valle Empreendimento" className="h-40 md:h-48" />
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg text-center">
                    <FaBuilding className="text-3xl mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">Infraestrutura Moderna</h3>
                    <p className="text-sm">
                        Com uma infraestrutura moderna e planejada, o Valle Centro Empresarial garante que seu negócio tenha tudo o que precisa para crescer e prosperar. Além de espaços comerciais e industriais, o Valle Centro Empresarial será atendido com transporte coletivo, bicicletário e uma área de lazer completa.
                    </p>
                </div>
                <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg text-center">
                    <FaDollarSign className="text-3xl mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">Oportunidade de Investimento</h3>
                    <p className="text-sm">
                        O Valle Centro Empresarial é a oportunidade perfeita para investir em um empreendimento comercial e industrial de sucesso. Lotes a partir de R$175.000,00, com 20% de entrada e saldo em até 60 meses.
                    </p>
                </div>
                <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg text-center">
                    <FaMapMarkerAlt className="text-3xl mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">Localização Privilegiada</h3>
                    <p className="text-sm">
                        Situado na região de maior crescimento de Bragança Paulista, o Valle Centro Empresarial oferece uma localização privilegiada, com excelente acesso para as principais rodovias, ideal para empresas que buscam visibilidade e acessibilidade.
                    </p>
                </div>
                <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg text-center">
                    <FaClipboardList className="text-3xl mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">Lotes Comerciais</h3>
                    <p className="text-sm">
                        Lotes comerciais, industriais e para construção de prédios de escritórios, a partir de 600m², prontos para receber o seu empreendimento. As obras estão em ritmo acelerado e em breve você poderá conferir de perto.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-6">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all" onClick={() => window.location.href = 'https://www.google.com/maps?q=-22.890389,-46.540361'}  >
                    Localização
                </button>
                <a href="#form">
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition-all">
                        Quero Saber Mais
                    </button>
                </a>
            </div>
        </section>
    );
};

export default SobreEmpreendimento;
