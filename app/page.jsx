import HeroSection from "@/components/HeroSection";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaPaintBrush,
} from "react-icons/fa";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

export default function Home() {
  const title =
    "Nous créons des Sites web modernes & applications performantes pour booster votre activité";
  const content =
    "Dev Agency conçoit des sites vitrines et des applications sur-mesure pour vous rendre visible, attirer plus de clients et valoriser votre image — sans prise de tête technique.";
  const image = "/11.jpg";

  const services = [
    {
      icon: FaLaptopCode,
      title: "Sites web sur-mesure",
      text: "Vitrines, e-commerce ou plateformes métier, pensés pour convertir vos visiteurs en clients.",
    },
    {
      icon: FaMobileAlt,
      title: "Applications web & mobiles",
      text: "Des produits rapides et fiables, conçus pour accompagner la croissance de votre activité.",
    },
    {
      icon: FaSearch,
      title: "SEO & visibilité",
      text: "Optimisation technique et éditoriale pour vous positionner durablement sur Google.",
    },
    {
      icon: FaPaintBrush,
      title: "Identité & design",
      text: "Une image de marque cohérente qui inspire confiance dès le premier regard.",
    },
  ];

  const reasons = [
    "Un interlocuteur unique, du brief à la mise en ligne",
    "Des délais clairs et respectés",
    "Un code propre, documenté et évolutif",
    "Un accompagnement après-livraison",
  ];

  return (
    <main>
      {/* Hero */}
      <HeroSection title={title} content={content} image={image} />

      {/* Présentation de l'agence — fond sombre */}
      <section className="relative z-10 mx-auto py-20 px-6 text-white text-center bg-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Dev Agency, votre partenaire digital de confiance
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Création de sites web, développement d&rsquo;applications web et
          mobiles, optimisation SEO/SEM... Boostez votre présence en ligne
          avec notre équipe d&rsquo;experts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-transparent border-2 border-gray-500 text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all"
          >
            Nous contacter
          </a>
          <a
            href="/contact#devis"
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all"
          >
            Devis gratuit
          </a>
        </div>
      </section>

      {/* Services — fond blanc */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Nos services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Tout ce qu&rsquo;il vous faut pour réussir en ligne
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                  <service.icon className="text-orange-600" size={20} />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir — fond sombre */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Pourquoi Dev Agency
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Une agence qui parle votre langage, pas seulement celui du code
            </h2>
            <p className="text-gray-400 mb-8">
              Nous savons que la technique doit rester au service de vos
              objectifs business. C&rsquo;est pour ça que chaque projet
              commence par une discussion sur vos besoins réels, pas sur nos
              outils.
            </p>
          </div>
          <ul className="space-y-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 bg-gray-800/50 border border-gray-700 rounded-xl p-4"
              >
                <FaCheck className="text-orange-400 mt-1 shrink-0" size={16} />
                <span className="text-gray-200">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Statistiques — fond blanc */}
      <section className="bg-white py-16 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50+", label: "Sites livrés" },
            { value: "30+", label: "Clients accompagnés" },
            { value: "5+", label: "Années d'expertise" },
            { value: "98%", label: "Clients satisfaits" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-orange-600">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appel à l'action final — fond orange */}
      <section className="bg-orange-500 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Vous avez un projet ?
        </h2>
        <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
          Chez <strong>Dev Agency</strong>, nous transformons vos idées en
          solutions digitales sur-mesure. Parlons-en dès maintenant !
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
          >
            Nous contacter
          </a>
          <a
            href="/contact#devis"
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all inline-flex items-center gap-2"
          >
            Devis gratuit <FaArrowRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
