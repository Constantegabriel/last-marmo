import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Cozinhas Planejadas",
      description:
        "Soluções personalizadas em mármores e granitos para bancadas e ilhas de cozinha, combinando funcionalidade e design.",
      image: "/img/cozinha.jpg",
    },
    {
      title: "Banheiros de Luxo",
      description:
        "Crie ambientes relaxantes com bancadas, lavatórios e revestimentos elegantes para banheiros sofisticados.",
      image: "/img/banheiro.jpg",
    },
    {
      title: "Salas de Estar",
      description:
        "Mesas de centro, lareiras e detalhes em mármore para dar um toque de exclusividade à sua sala.",
      image: "/img/salas.jpg",
    },
    {
      title: "Espaços Comerciais",
      description:
        "Mármores e granitos de alto padrão para recepções, escritórios e ambientes corporativos que impressionam.",
      image: "/img/espacos-com.jpg",
    },
    {
      title: "Escadas e Corrimãos",
      description:
        "Proporcione sofisticação e durabilidade com escadas revestidas em mármore ou granito.",
      image: "/img/escadas.jpg",
    },
    {
      title: "Áreas Externas",
      description:
        "Materiais resistentes e elegantes para áreas gourmet, piscinas e varandas.",
      image: "/img/externas.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 mt-[69px] min-h-screen py-16 px-8 md:px-20">
      {/* Título da página */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Nossos Serviços
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Explore nossos serviços e veja como transformamos ambientes com
          materiais de alta qualidade e design sofisticado.
        </p>
      </div>

      {/* Serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            {/* Imagem */}
            <div className="relative h-64 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index === 0} // Prioriza o carregamento da primeira imagem
              />
            </div>
            {/* Detalhes */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="block w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-medium rounded-lg hover:opacity-90 transition">
                Saiba Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
