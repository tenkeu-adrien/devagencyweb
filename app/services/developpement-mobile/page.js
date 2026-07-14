import HeroWithNavbar from "@/components/HeroSection";

export default function DeveloppementMobilePage() {
  const title = "Création d&rsquo;applications mobiles Android &amp; iOS";
  const content = "Faites développer votre application mobile fluide, intuitive et 100% personnalisée.";
  const image = "/mobile.jpg";

  return (
    <>
      <HeroWithNavbar title={title} content={content} image={image} />
      <main className="px-4 md:px-16 py-12 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">
          Développement Mobile
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Chez Dev Agency, nous concevons des applications mobiles performantes pour iOS
          et Android. Que vous ayez besoin d&rsquo;une application métier, d&rsquo;une app
          grand public ou d&rsquo;une solution sur-mesure, notre équipe vous accompagne
          de la conception au déploiement.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Applications iOS</h2>
            <p className="text-gray-600">
              Développez votre présence sur iPhone et iPad avec une application native
              optimisée pour l&rsquo;écosystème Apple.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Applications Android</h2>
            <p className="text-gray-600">
              Créez une application Android performante, compatible avec tous les appareils
              et publiée sur le Play Store.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Applications cross-platform</h2>
            <p className="text-gray-600">
              Une seule base de code pour iOS et Android grâce à React Native et Flutter,
              réduisant les coûts et les délais.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Technologies utilisées</h2>
            <p className="text-gray-600">
              React Native, Flutter, Swift, Kotlin, Firebase, et plus encore selon le
              projet.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white font-medium px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Demander un devis gratuit
          </a>
        </div>
      </main>
    </>
  );
}
