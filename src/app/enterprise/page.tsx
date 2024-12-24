"use client";

import Image from "next/image";
import company from "../../../public/img/quarto.jpg";
import parceiro1 from "../../../public/img/parc2.jpg";
import parceiro2 from "../../../public/img/parc2.jpg";
import parceiro3 from "../../../public/img/parc2.jpg";
import parceiro4 from "../../../public/img/parc2.jpg";

export default function Empresa() {
  return (
    <section className="bg-gray-100 mt-[130px] min-h-screen py-16 px-8 md:px-20">
      {/* Título da página */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Sobre a Marmoraria Florianópolis
        </h1>
      </div>
      
      {/* Parceiros */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Parceiros
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro1}
                alt="Parceiro 1"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro2}
                alt="Parceiro 2"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro3}
                alt="Parceiro 3"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro4}
                alt="Parceiro 4"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
        </div>
      </div>

      {/* Imagem Inspiradora */}
      <div className="mt-12">
        <div className="w-full h-80 relative">
          <Image
            src={company}
            alt="Imagem da empresa"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
