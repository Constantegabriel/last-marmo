"use client";

import { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

interface Material {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const materials: Material[] = [
  {
    id: 1,
    title: "Granito Preto Absoluto",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/pretoabs.jpg",
  },
  {
    id: 2,
    title: "Quartzo Wakanda",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/waka.jpg",
  },
  {
    id: 3,
    title: "Quartzito Taj Mahal",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/tajmahal.jpeg",
  },
  {
    id: 4,
    title: "Mármore Calacatta",
    description: "Mármore raro com fundo branco puro e veios grossos dourados ou cinzas.",
    imageUrl: "/img/calagd.jpg",
  },
  {
    id: 5,
    title: "Mármore Calacatta",
    description: "Mármore raro com fundo branco puro e veios grossos dourados ou cinzas.",
    imageUrl: "/img/calagd.jpg",
  },  
  {
    id: 6,
    title: "Mármore Calacatta",
    description: "Mármore raro com fundo branco puro e veios grossos dourados ou cinzas.",
    imageUrl: "/img/calagd.jpg",
  },
  {
    id: 7,
    title: "Mármore Calacatta",
    description: "Mármore raro com fundo branco puro e veios grossos dourados ou cinzas.",
    imageUrl: "/img/calagd.jpg",
  },
  {
    id: 8,
    title: "Granito Preto Absoluto",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/pretoabs.jpg",
  },
  {
    id: 9,
    title: "Granito Preto Absoluto",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/pretoabs.jpg",
  },
  {
    id: 10,
    title: "Granito Preto Absoluto",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/pretoabs.jpg",
  },    
  {
    id: 11,
    title: "Quartzo Wakanda",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/waka.jpg",
  },
  {
    id: 12,
    title: "Quartzo Wakanda",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/waka.jpg",
  },
  {
    id: 13,
    title: "Quartzo Wakanda",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/waka.jpg",
  },    
  {
    id: 14,
    title: "Quartzito Taj Mahal",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/tajmahal.jpeg",
  },
  {
    id: 15,
    title: "Quartzito Taj Mahal",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/tajmahal.jpeg",
  },
  {
    id: 16,
    title: "Quartzito Taj Mahal",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/tajmahal.jpeg",
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
        }, 500);
    }, 2000);
  };

  const addToCart = (material: Material) => {
    if (!cart.find((item) => item.id === material.id)) {
      setCart([...cart, material]);
      showTemporaryAlert();
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
          `*•${item.title}*`
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
          className={`fixed top-[140px] left-0 z-50 bg-gray-800 rounded-r shadow-lg text-white px-4 py-2 ${
            isExiting ? "animate-slide-out" : "animate-slide-in"
          }`}
        >
          Material adicionado ao carrinho!
        </div>
      )}
      <div className="flex-1 md:mr-[350px] bg-gray-100 pt-[150px]">
        <div className="p-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-left text-gray-800 mb-6">
            Descubra Nossos Mármores Exclusivos
          </h1>
          <p className="text-left text-gray-600 text-lg max-w-2xl mb-12">
            Selecione as pedras que você gostou e adicione ao carrinho. Em seguida, clique em 'Enviar para WhatsApp' para que possamos consultar e preparar seu orçamento personalizado!
          </p>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Granitos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {materials
                  .filter((material) => material.title.includes("Granito"))
                  .map((material) => (
                    <div
                      key={material.id}
                      className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center text-center"
                    >
                      <Image
                        src={material.imageUrl}
                        alt={material.title}
                        width={250}
                        height={250}
                        className="rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">
                        {material.title}
                      </h3>
                      <p className="text-gray-600">{material.description}</p>
                      <button
                        onClick={() => addToCart(material)}
                        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quartzo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {materials
                  .filter((material) => material.title.includes("Quartzo"))
                  .map((material) => (
                    <div
                      key={material.id}
                      className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center text-center"
                    >
                      <Image
                        src={material.imageUrl}
                        alt={material.title}
                        width={250}
                        height={250}
                        className="rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">
                        {material.title}
                      </h3>
                      <p className="text-gray-600">{material.description}</p>
                      <button
                        onClick={() => addToCart(material)}
                        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quartzito</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {materials
                  .filter((material) => material.title.includes("Quartzito"))
                  .map((material) => (
                    <div
                      key={material.id}
                      className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center text-center"
                    >
                      <Image
                        src={material.imageUrl}
                        alt={material.title}
                        width={250}
                        height={250}
                        className="rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">
                        {material.title}
                      </h3>
                      <p className="text-gray-600">{material.description}</p>
                      <button
                        onClick={() => addToCart(material)}
                        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Mármore</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {materials
                  .filter((material) => material.title.includes("Mármore"))
                  .map((material) => (
                    <div
                      key={material.id}
                      className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center text-center"
                    >
                      <Image
                        src={material.imageUrl}
                        alt={material.title}
                        width={250}
                        height={250}
                        className="rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">
                        {material.title}
                      </h3>
                      <p className="text-gray-600">{material.description}</p>
                      <button
                        onClick={() => addToCart(material)}
                        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  ))}
              </div>
            </div>
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
