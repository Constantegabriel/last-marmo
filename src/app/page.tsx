"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { PiGearDuotone } from "react-icons/pi";
import { GiBriefcase, GiStoneBlock } from "react-icons/gi";

export default function Home() {
  return (
    <section>
      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true }}
        className="h-screen text-white"
      >
        {/* Slide 1 */}
        <SwiperSlide
          className="relative flex items-center justify-start bg-cover bg-center h-screen"
          style={{ backgroundImage: `url('/img/fachada.jpg')` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
            }}
          ></div>
          <div className="absolute bottom-12 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Sua Marmoraria em Florianópolis
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Oferecemos uma ampla seleção de mármores e granitos nacionais e importados,
              com acabamento impecável e designs únicos.
            </p>
            <Link href="https://maps.app.goo.gl/NPSJPNp6B877nH396">
              <button className="px-6 py-2 bg-gray-800 hover:bg-gray-900 rounded-full text-sm md:text-lg font-semibold transition">
                Solicite um Orçamento
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          className="relative flex items-end justify-start bg-cover bg-center h-screen"
          style={{ backgroundImage: `url('/img/quarto.jpg')` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
            }}
          ></div>
          <div className="absolute bottom-12 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Excelência em Serviços de Marmoraria
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Realizamos serviços personalizados e de alta qualidade para transformar
              cada ambiente em uma obra de arte.
            </p>
            <Link href="/services">
              <button className="px-6 py-2 bg-gray-800 hover:bg-gray-900 rounded-full text-sm md:text-lg font-semibold transition">
                Veja Nossos Serviços
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide
          className="relative flex items-end justify-start bg-cover bg-center h-screen"
          style={{ backgroundImage: `url('/img/maquinario.avif')` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
            }}
          ></div>
          <div className="absolute bottom-12 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Tecnologia e Profissionalismo
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Utilizamos os melhores maquinários e contamos com uma equipe altamente
              qualificada para entregar resultados excepcionais.
            </p>
            <Link href="/about">
              <button className="px-6 py-2 bg-gray-800 hover:bg-gray-900 rounded-full text-sm md:text-lg font-semibold transition">
                Conheça Nossa Estrutura
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Serviços em destaque */}
      <div className="bg-gray-100 text-gray-700 py-12 px-6 md:px-20">
        <h2 className="text-center text-gray-700 text-2xl md:text-4xl font-bold mb-8">
          Serviços de Qualidade para Cada Projeto
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Serviço: Portfólio */}
          <div className="text-center bg-gray-700 p-8 rounded-lg hover:shadow-lg transition w-full sm:w-[450px]">
            <GiBriefcase className="mx-auto text-[50px]" />
            <h1 className="text-gray-100 font-bold">PORTFÓLIO</h1>
            <p className="text-gray-100 text-sm mt-2">
              Inspire-se com nossos projetos realizados, criados com precisão e
              dedicação.
            </p>
          </div>

          {/* Serviço: Produtos */}
          <div className="text-center bg-gray-700 p-8 rounded-lg hover:shadow-lg transition w-full sm:w-[450px]">
            <GiStoneBlock className="mx-auto text-[50px]" />
            <h1 className="text-gray-100 font-bold">PRODUTOS</h1>
            <p className="text-gray-100 text-sm mt-2">
              Trabalhamos com os melhores materiais para oferecer qualidade e
              sofisticação.
            </p>
          </div>

          {/* Serviço: Maquinário */}
          <div className="text-center bg-gray-700 p-8 rounded-lg hover:shadow-lg transition w-full sm:w-[450px]">
            <PiGearDuotone className="mx-auto text-[50px]" />
            <h1 className="text-gray-100 font-bold">MAQUINÁRIO</h1>
            <p className="text-gray-100 text-sm mt-2">
              Modernos equipamentos e uma equipe qualificada garantem resultados
              superiores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
