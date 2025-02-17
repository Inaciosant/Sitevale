import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Galeria = () => {
    return (
        <div className="max-w-4xl mx-auto py-10" id='galery'>
                            <h1 className='text-center text-4xl mb-4 font-bold border-b-4 border-blue-600   pb-2'>Nossa galeria de imagens</h1>

            <Swiper
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper rounded-lg shadow-lg"
            >
                <SwiperSlide>
                    <img src="./1.webp" alt="Imagem 1" className="w-full h-96 object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./2.webp" alt="Imagem 2" className="w-full h-96 object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./3.webp" alt="Imagem 3" className="w-full h-96 object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./4.webp" alt="Imagem 4" className="w-full h-96 object-cover rounded-lg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Galeria;
