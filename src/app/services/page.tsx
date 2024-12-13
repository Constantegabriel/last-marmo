"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../globals.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Services() {
  return (
    <section className="bg-gray-50">

      {/* Seção de Destaque (Entrada) */}
      <div className="relative flex flex-col lg:px-[10%] justify-center mt-[145px] bg-white py-[100px] h-[600px] px-8 md:px-20">
        
        {/* Background Menor com Texto à Esquerda */}
        <div className="absolute top-[50%] lg:mx-[5%] bg-opacity-95 left-4 transform -translate-y-1/2 w-[90%] md:w-[60%] lg:w-[40%] bg-gray-800 text-white p-6 md:p-8 rounded-lg shadow-2xl z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Explore Aqui Nossas Incríveis Obras
          </h2>
          <p className="text-lg mb-6">
            Descubra projetos únicos e inspiradores que transformaram ambientes com elegância e qualidade incomparáveis.
          </p>
        </div>

        {/* Imagem Grande da Área Principal à Direita */}
        <div className="absolute top-0 lg:mx-[5%] md:top-10 right-0 w-full h-[500px] md:w-[80%] lg:w-[60%] shadow-lg md:rounded-lg overflow-hidden">
          <Image
            src="/img/quarto.jpg"
            alt="Espaço com Mármores e Granitos"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>

      {/* Seção 1: Cozinhas Planejadas */}
      <div className="py-24 mt-[-90px] md:mt-[-70px] bg-white">
        <div className="container mx-auto flex flex-col items-center gap-8 px-[2%] md:px-[10%] relative">
          
          {/* Texto acima do Swiper */}
          <div className="text-center md:text-left w-full md:w-3/3 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Cozinhas Planejadas</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bancadas e ilhas de cozinha feitas sob medida, combinando funcionalidade e design sofisticado. Transforme sua cozinha em um ambiente de beleza e praticidade.
            </p>
            <Link href="/materials">
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-full font-semibold transition">
                Escolha o Mármore Ideal
              </button>
            </Link>
          </div>

          {/* Swiper com Imagens de Cozinhas */}
          <div className="w-full md:w-3/3 h-[400px] md:h-[600px] relative">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet custom-bullet" }}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
              className="rounded-lg shadow-lg"
            >
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz1.jpg"
                    alt="Cozinha Planejada 1"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz2.jpg"
                    alt="Cozinha Planejada 2"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz3.jpg"
                    alt="Cozinha Planejada 3"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz4.jpg"
                    alt="Cozinha Planejada 4"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz5.jpg"
                    alt="Cozinha Planejada 5"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz6.jpg"
                    alt="Cozinha Planejada 6"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz7.jpg"
                    alt="Cozinha Planejada 7"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/cozinha.jpg"
                    alt="Cozinha Planejada 8"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>

              {/* Botões de Navegação Personalizados */}
              <div className="swiper-button-prev custom-navigation text-gray-800"></div>
              <div className="swiper-button-next custom-navigation text-gray-800"></div>
            </Swiper>
          </div>

        </div>
      </div>

      <div className="text-[22px] lg:text-[35px] font-bold text-center text-white pt-8 bg-gray-800">
        <p className="p-2 border-b-4 w-[260px] md:w-[45%] mx-auto">Cubas de Banheiros Sob Medida</p>
      </div>
      <div className="bg-gray-800 flex flex-col lg:flex-row py-10 md:px-[10%] lg:px-12">
        <div className="flex flex-col lg:mt-24 px-8 gap-4 mb-4 lg:w-[50%]">
          <div className="relative">
            <Image
              src="/img/banheiro.jpg"
              alt="Imagem 1"
              width={500}
              height={300}
              className="object-cover border-2 border-white rounded-lg w-full h-auto"
            />
          </div>

          <div className="relative">
            <Image
              src="/img/ban1.jpg"
              alt="Imagem 2"
              width={500}
              height={300}
              className="object-cover border-2 border-white rounded-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col px-8 gap-4 mb-4 lg:w-[50%]">
          <div className="relative">
            <Image
              src="/img/ban2.jpg"
              alt="Imagem 3"
              width={500}
              height={300}
              className="object-cover border-2 border-white rounded-lg w-full h-auto"
            />
          </div>
          <div className="relative">
            <Image
              src="/img/ban3.jpg"
              alt="Imagem 4"
              width={500}
              height={300}
              className="object-cover border-2 border-white rounded-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col lg:mt-24 px-8 mb-4 gap-4 lg:w-[50%]">
          <div className="relative">
            <Image
              src="/img/ban5.jpg"
              alt="Imagem 5"
              width={500}
              height={300}
              className="object-cover border-2 border-white rounded-lg w-full h-auto"
            />
          </div>

          <div className="relative">
            <Image
              src="/img/ban6.jpg"
              alt="Imagem 6"
              width={500}
              height={300}
              className="object-cover border-2 border-white rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="h-[700px] bg-gray-100">
        Teste
      </div>
    </section>
  );
}
