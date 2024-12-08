"use client";

import { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

interface Material {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

const materials: Material[] = [
  {
    id: 1,
    title: "Mármore Travertino",
    price: 500.0,
    description: "Bege com veios, popular em áreas externas, como bordas de piscina.",
    imageUrl: "/img/marm1.webp",
  },
  {
    id: 2,
    title: "Mármore Carrara",
    price: 1200.0,
    description: "Branco com veios cinzas, clássico e elegante, ideal para bancadas e pisos.",
    imageUrl: "/img/marmo2.jpeg",
  },
  {
    id: 3,
    title: "Mármore Calacatta",
    price: 2500.0,
    description: "Branco puro com veios dourados ou cinza, altamente sofisticado para ambientes internos.",
    imageUrl: "/img/marmo3.jpeg",
  },
  {
    id: 4,
    title: "Granito Preto Absoluto",
    price: 900.0,
    description: "Preto uniforme, resistente, ideal para cozinhas e banheiros modernos.",
    imageUrl: "/img/marmo4.jpeg",
  },
];

export default function MaterialsPage() {
  const [cart, setCart] = useState<Material[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const showTemporaryAlert = () => {
    setShowAlert(true);
    setIsExiting(false);
    setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
        setShowAlert(false);
        }, 500); // Tempo igual à duração da animação de saída
    }, 2000); // Alerta visível por 2 segundos
  };

  
  const addToCart = (material: Material) => {
    if (!cart.find((item) => item.id === material.id)) {
      setCart([...cart, material]);
      showTemporaryAlert(); // Mostra o alerta
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return "";
    return cart
      .map(
        (item) =>
          `*${item.title}* - R$ ${item.price.toFixed(
            2
          )}\nDescrição: ${item.description}`
      )
      .join("\n\n");
  };

  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/48998143419?text=${encodeURIComponent(
      `Olá, gostaria de um orçamento para as seguintes pedras:\n\n${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="relative flex flex-col min-h-screen">
        {showAlert && (
        <div
        className={`fixed top-[140px] left-0 z-50 bg-gray-800 rounded-r border-white border-r-[3px] border-b-[3px] shadow-lg text-white px-4 py-2 ${
          isExiting ? "animate-slide-out" : "animate-slide-in"
        }`}
      >
        Material adicionado ao carrinho!
      </div>
      
        )}
      <div className="flex-1 md:mr-[350px] bg-gray-50 pt-[150px]">
        <div className="p-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-left text-gray-800 mb-6">
            Descubra Nossos Mármores Exclusivos
          </h1>
          <p className="text-left text-gray-600 text-lg max-w-2xl mb-12">
            Selecione as pedras que você gostou e adicione ao carrinho. Em
            seguida, clique em 'Enviar para WhatsApp' para que possamos consultar e preparar
            seu orçamento personalizado!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-[1152px]:grid-cols-2 gap-8">
            {materials.map((material) => (
              <div
                key={material.id}
                className="rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="w-full h-56 relative">
                  <Image
                    src={material.imageUrl}
                    alt={material.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {material.title}
                  </h2>
                  <p className="text-gray-600 mt-2">Preço por m²:</p>
                  <p className="text-xl font-bold text-gray-900">
                    R$ {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(material.price)}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {material.description}
                  </p>
                  <button
                    onClick={() => addToCart(material)}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium mt-4 py-2 rounded-md flex items-center justify-center transition-colors"
                  >
                    <AiOutlineShoppingCart className="mr-2" /> Adicionar ao
                    Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="md:hidden fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
        onClick={() => setIsModalOpen(true)}
      >
        <AiOutlineShoppingCart className="text-2xl mt-[-2px]" />
        Meu Carrinho
      </button>

      <div className="hidden md:flex w-[350px] bg-gray-100 border-l border-gray-300 fixed top-0 right-0 h-full shadow-lg flex-col">
        <h2 className="text-2xl flex font-bold text-gray-800 mb-4 px-4 mt-[150px]">
        <AiOutlineShoppingCart className="mr-2 mt-[3px]" /> Carrinho de Materiais
        </h2>
        <div className="flex-1 overflow-y-auto px-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="bg-white p-3 rounded shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      R$ {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <AiOutlineDelete className="text-2xl" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && (
          <button
            onClick={sendToWhatsApp}
            className="m-5 bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 rounded-md flex items-center justify-center transition-colors px-4"
          >
            Enviar para WhatsApp
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed pt-[145px] inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-full h-full p-6 relative overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl"
            >
              &times;
            </button>
            <h2 className="text-2xl flex font-bold text-gray-800 mb-4">
                <AiOutlineShoppingCart className="mr-2 mt-[3px]" /> Carrinho de Materiais
            </h2>
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500">Seu carrinho está vazio.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="bg-white p-3 rounded shadow flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          R$ {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <AiOutlineDelete className="text-2xl" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {cart.length > 0 && (
              <button
                onClick={sendToWhatsApp}
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 rounded-md flex items-center justify-center transition-colors"
              >
                Enviar para WhatsApp
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
