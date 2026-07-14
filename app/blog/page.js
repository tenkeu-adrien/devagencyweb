import Image from "next/image";
import { FaLaptopCode, FaPenFancy } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export const metadata = {
  title: "Blog | Dev Agency",
  description: "Découvrez nos analyses, tutoriels et bonnes pratiques en développement web, design UX/UI et stratégie digitale.",
};

export default function BlogPage() {
  return (
    <>
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="relative h-full flex items-center bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <a href="/" className="group">
                  <span className="flex items-center space-x-2 mb-6 transition-all group-hover:translate-x-1">
                    <IoMdArrowRoundBack className="text-2xl text-white group-hover:text-orange-500 transition-colors" />
                    <span className="text-white text-xl md:text-2xl">
                      Retour à l&rsquo;accueil
                    </span>
                  </span>
                </a>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Le Blog Tech de Dev Agency
                </h1>

                <p className="text-xl mb-8 max-w-lg">
                  Découvrez nos analyses, tutoriels et bonnes pratiques en développement
                  web, design UX/UI et stratégie digitale.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-opacity-10 rounded-full px-6 py-3 backdrop-blur-sm">
                    <FaPenFancy className="mr-3 text-orange-400" />
                    <span>+10 articles experts</span>
                  </div>
                  <div className="flex items-center bg-opacity-10 rounded-full px-6 py-3 backdrop-blur-sm">
                    <FaLaptopCode className="mr-3 text-orange-400" />
                    <span>Conseils pratiques</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block relative h-80">
                <Image
                  src="/blog.jpg"
                  alt="Blog Dev Agency"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="px-4 md:px-16 py-12 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">
          Nos Articles
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Retrouvez nos conseils, guides pratiques et analyses pour réussir vos projets
          digitaux.
        </p>

        <section className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Les tendances React en 2025
            </h2>
            <p className="text-gray-600">
              Découvrez les nouvelles fonctionnalités de React et comment les implémenter
              dans vos projets.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Optimisation des performances web
            </h2>
            <p className="text-gray-600">
              Nos techniques avancées pour réduire le temps de chargement de vos
              applications.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              UX Design pour applications SaaS
            </h2>
            <p className="text-gray-600">
              Comment concevoir des interfaces qui boostent l&rsquo;engagement utilisateur.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
