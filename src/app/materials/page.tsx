"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

const materials = [
  {
    id: 1,
    title: "Mármore Travertino",
    price: 500.00,
    description: "Bege com veios, popular em áreas externas, como bordas de piscina.",
    imageUrl: "/img/marm1.webp", // Substitua pelas suas imagens
  },
  {
    id: 2,
    title: "Mármore Carrara",
    price: 1200.00,
    description: " Branco com veios cinzas, clássico e elegante, ideal para bancadas e pisos.",
    imageUrl: "/img/marmo2.jpeg", // Substitua pelas suas imagens
  },
  {
    id: 3,
    title: "Mármore Calacatta",
    price: 2500.00,
    description: "Branco puro com veios dourados ou cinza, altamente sofisticado para ambientes internos.",
    imageUrl: "/img/marmo3.jpeg", // Substitua pelas suas imagens
  },
  {
    id: 4,
    title: "Granito Preto Absoluto",
    price: 900.00,
    description: " Preto uniforme, resistente, ideal para cozinhas e banheiros modernos.",
    imageUrl: "/img/marmo4.jpeg", // Substitua pelas suas imagens
  },  
  // Adicione mais materiais conforme necessário
];

export default function MaterialsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Descubra Nossos Mármores Exclusivos
        </h1>

        {materials.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            Nenhum material encontrado.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {materials.map((material) => (
              <div
                key={material.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
              >
                {/* Imagem */}
                <div className="w-full h-56 relative">
                  <Image
                    src={material.imageUrl}
                    alt={material.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-t-lg object-cover"
                  />
                </div>

                {/* Detalhes */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {material.title}
                  </h2>
                  <p className="text-gray-600 mt-2">Preço por m²:</p>
                  <p className="text-xl font-bold text-green-600">
                    R$ {material.price.toFixed(2)}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {material.description}
                  </p>

                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium mt-4 py-2 rounded-md flex items-center justify-center transition-colors"
                  >
                    <AiOutlineShoppingCart className="mr-2" /> Adicionar ao
                    Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
