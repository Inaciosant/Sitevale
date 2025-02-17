import { Circle } from 'rc-progress';
import { FaRoad, FaCloudRain, FaMap   } from 'react-icons/fa';
import { FaRoadCircleCheck } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa6";

const StatusObra = () => {
    const status = [
        { icon: <FaMap size={40} />, label: "TERRAPLANAGEM", percent: 95 },
        { icon: <FaRoad size={40} />, label: "ACESSO DER PARA ESTRADA", percent: 100 },
        { icon: <FaCloudRain size={40} />, label: "DRENAGEM PLUVIAIS", percent: 100 },
        { icon: <FaRoadCircleCheck   size={40} />, label: "GUIAS", percent: 100 },
        { icon: <FaTractor  size={40} />, label: "ASFALTO", percent: 45 },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block pb-2">Status da Obra</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-8">
                    {status.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-4 text-blue-600">{item.icon}</div>
                            <div className="relative w-24 h-24">
                                <Circle percent={item.percent} strokeWidth={8} strokeColor="#006bce" trailWidth={8} trailColor="#ddd" />
                                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">{item.percent}%</span>
                            </div>
                            <p className="mt-4 text-lg font-semibold">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatusObra;