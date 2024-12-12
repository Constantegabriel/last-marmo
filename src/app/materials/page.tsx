"use client";

import { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

interface Material {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const materials: Material[] = [
  {
    id: 1,
    title: "Granito Preto Absoluto",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/pretoabs.jpg",
    category: "Granito",
  },
  {
    id: 2,
    title: "Quartzo Wakanda",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/waka.jpg",
    category: "Quartzo",
  },
  {
    id: 3,
    title: "Quartzito Taj Mahal",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/tajmahal.jpeg",
    category: "Quartzito",
  },
  {
    id: 4,
    title: "Mármore Branco Paraná",
    description: "Mármore raro com fundo branco puro e veios grossos dourados ou cinzas.",
    imageUrl: "/img/brancopr.jpg",
    category: "Mármore",
  },
  {
    id: 5,
    title: "Mármore Travertino",
    description: "Mármore raro com fundo branco puro e veios grossos dourados ou cinzas.",
    imageUrl: "/img/travertino.jpg",
    category: "Mármore",
  },  
  {
    id: 6,
    title: "Granito itaunas",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/itaunas.jpg",
    category: "Granito",
  },
  {
    id: 7,
    title: "Granito Branco Dallas",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/branco-dallas.jpg",
    category: "Granito",
  },
  {
    id: 8,
    title: "Granito Via Lactea",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/via-lactea.jpg",
    category: "Granito",
  },    
  {
    id: 9,
    title: "Quartzo Calacatta",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/calactt.jpg",
    category: "Quartzo",
  },
  {
    id: 10,
    title: "Quartzo Calacatta Gold",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/gold.jpg",
    category: "Quartzo",
  },
  {
    id: 11,
    title: "Quartzo Kensho",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/kensho.webp",
    category: "Quartzo",
  },    
  {
    id: 12,
    title: "Quartzito San Rafaello",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/rafaello.jpeg",
    category: "Quartzito",
  },
  {
    id: 13,
    title: "Quartzito Arabescasatto",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/arabes.jpg",
    category: "Quartzito",
  },
  {
    id: 14,
    title: "Quartzito Mont Blanc",
    description: "Pedra natural com tons bege e veios delicados, conhecida pela durabilidade e sofisticação.",
    imageUrl: "/img/mont.jpeg",
    category: "Quartzito",
  },   
  {
    id: 15,
    title: "Granito São Gabriel",
    description: "Granito preto uniforme, conhecido pela resistência e beleza discreta.",
    imageUrl: "/img/sao-gabriel.webp",
    category: "Granito",
  },       
  {
    id: 16,
    title: "Quartzo Arene",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/arene.jpg",
    category: "Quartzo",
  },   
  {
    id: 17,
    title: "Quartzo White Led",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/white led.jpg",
    category: "Quartzo",
  },    
  {
    id: 18,
    title: "Quartzo Branco Stellar",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/stellar.jpg",
    category: "Quartzo",
  },     
  {
    id: 19,
    title: "Quartzo White Led",
    description: "Quartzo de tonalidade preta com veios prateados, ideal para ambientes modernos e sofisticados.",
    imageUrl: "/img/white.jpeg",
    category: "Quartzo",
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
        (item) => `*${item.title}*\nDescrição: ${item.description}`
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
  
      {/* Subnavbar */}
      <nav className="hidden lg:grid w-full pt-[160px] bg-gray-100 shadow-md py-4">
        <ul className="flex justify-around px-[10px] xl:px-[10%] mr-[350px] space-x-6">
          {["Granito", "Quartzo", "Quartzito", "Mármore"].map((category) => (
            <li key={category}>
              <a
                href={`#${category}`}
                className="text-white bg-gray-800 px-10 py-2 rounded-full font-medium hover:text-gray-300 transition-colors"
              >
                {category}s
              </a>
            </li>
          ))}
        </ul>
      </nav>
  
      <div className="flex-1 pt-[160px] lg:pt-[20px] md:mr-[350px] bg-gray-50">
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-left text-gray-800 mb-6">
            Descubra Alguns dos nossos Materiais Exclusivos
          </h1>
          <p className="text-left text-gray-600 text-lg max-w-3xl mb-12">
            Selecione as pedras que você gostou e adicione ao carrinho. Em
            seguida, vá até seu carrinho e clique em <b>'Enviar para WhatsApp'</b> para que possamos consultar e preparar
            seu orçamento personalizado!
          </p>
  
          {/* Renderização por categorias */}
          {["Granito", "Quartzo", "Quartzito", "Mármore"].map((category) => (
            <section key={category} id={category} className="mb-12">
              <h2 className="text-3xl font-bold text-center border-b-[4px] w-[50%] lg:w-[30%] pb-4 border-gray-800 mx-auto text-gray-800 mt-20 mb-20">
                {category}s
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {materials
                  .filter((material) => material.category === category)
                  .map((material) => (
                    <div key={material.id} className="rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
                      <div className="w-full h-56 relative">
                        <Image src={material.imageUrl} alt={material.title} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">{material.title}</h3>
                        <p className="text-gray-500 text-sm mt-2">{material.description}</p>
                        <button
                          onClick={() => addToCart(material)}
                          className="w-full bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium mt-4 py-2 rounded-md flex items-center justify-center transition-colors"
                        >
                          <AiOutlineShoppingCart className="mr-2" /> Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
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
                <li key={item.id} className="bg-white p-3 rounded shadow flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
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
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl">
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
                    <li key={item.id} className="bg-white p-3 rounded shadow flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
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