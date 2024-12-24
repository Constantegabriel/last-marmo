import Link from "next/link";
import Image from "next/image";
import logo from "/public/img/logo_marmo.png"; // Caminho simplificado
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contato() {
  return (
    <section className="bg-gray-200 pt-[200px] min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Bloco de Contato e Formulário Unificados */}
        <div className="bg-gray-900 bg-opacity-90 text-white p-10 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Seção de Contato */}
          <div>
            <div className="w-[150px] mb-6">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Logo Marmoraria Florianópolis"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>
            <h2 className="text-3xl font-bold mb-6">Contate-nos</h2>
            <p className="mb-6 text-gray-300">
              Tem alguma ideia incrível ou precisa de um orçamento? Entre em contato, adoraríamos ouvir mais sobre o seu projeto e como podemos ajudar!
            </p>

            <div className="space-y-4">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contato@marmoraria.com" className="text-gray-300 hover:text-white">
                  contato@marmoraria.com
                </a>
              </p>
              <p>
                <strong>Telefone:</strong> (48) 3238-0505
              </p>
              <p>
                <strong>WhatsApp:</strong> (48) 99844-2768
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              <Link href="https://api.whatsapp.com/send?phone=48998143419" target="_blank">
                <FaWhatsapp size={30} className="hover:text-green-400 text-green-500 transition cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com/marmorariaflorianopolis" target="_blank">
                <FaInstagram size={30} className="hover:text-pink-400 text-pink-500 transition cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com/marmorariafpolis/" target="_blank">
                <FaFacebook size={30} className="hover:text-blue-400 text-blue-500 transition cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <form action="#" method="post">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-100 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome*"
                  className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-0 border border-white focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-100 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email*"
                  className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-0 border border-white focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="tel" className="block text-gray-100 font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Digite seu número de telefone*"
                  pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                  className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-0 border border-white focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-100 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Deixe uma mensagem para nossa equipe*"
                  className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-0 border border-white focus:outline-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="px-6 py-3 bg-opacity-0 border-2 border-white bg-gray-700 hover:bg-gray-900 text-white rounded-full transition">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Título do Mapa */}
        <div className="text-4xl text-gray-800 font-bold p-6 mt-16 text-center">Onde Estamos Localizados</div>

        {/* Mapa do Google */}
        <div className="shadow-lg mx-auto mt-4 overflow-hidden">
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.9135600586115!2d-48.6523692!3d-27.505828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95275338e43117e7%3A0x593940f8a5d7ac1c!2sMarmoraria%20Florian%C3%B3polis!5e0!3m2!1sen!2sbr!4v1690375038293!5m2!1sen!2sbr&z=12"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
