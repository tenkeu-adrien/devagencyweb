import BlogSection from "@/components/BlogSection";
import ContactForm2 from "@/components/ContactForm2";
import CustomSolution from "@/components/CustomSolution";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhoChoseUse";

export default function Home() {

let title =" Nous créons  des Sites web modernes & applications performantes pour booster votre activité "
let content ="Dev Agency conçoit des sites vitrines et des applications sur-mesure pour vous rendre visible, attirer plus de clients et valoriser votre image — sans prise de tête technique."
let image ="/11.jpg"

  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!recaptchaToken) {
  //     alert('Veuillez compléter le reCAPTCHA');
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   try {
  //     const response = await fetch('/api/send-email', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ ...formData, recaptchaToken })
  //     });
      
  //     if (response.ok) {
  //       alert('Message envoyé avec succès!');
  //       setFormData({
  //         fullName: '',
  //         subject: '',
  //         phone: '',
  //         email: '',
  //         service: '',
  //         otherOption: '',
  //         message: ''
  //       });
  //     } else {
  //       throw new Error('Erreur lors de l\'envoi');
  //     }
  //   } catch (error) {
  //     alert('Erreur: ' + error.message);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <main>
    <HeroSection  title={title} content={content} image={image} />
    {/* Tu peux ajouter d'autres sections ici */}

    <WhyChooseUs />


<ServicesSection />
<div className="relative z-10  mx-auto  py-20 px-6  text-white text-center mb-10 bg-gray-900">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md ">
    Dev Agency, votre partenaire digital de confiance
  </h1>
  <p className="text-lg md:text-xl mb-8 ">
    Création de sites web, développement d’applications web et mobiles, optimisation SEO/SEM...
    Boostez votre présence en ligne avec notre équipe d’experts.
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
  
    <a 
  href="/contact" 
  className="bg-transparent border-2 border-gray-500 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
>
  Nous contacter
</a>
  </div>
</div>

<Testimonials />

    <CustomSolution />



   <ContactForm2 />
<BlogSection />

    <div className="bg-orange-500 py-16 text-center mt-8">
  <h2 className="text-3xl font-bold mb-4">Vous avez un projet ?</h2>
  <p className="text-lg mb-8">Chez <strong>Dev Agency</strong>, nous transformons vos idées en solutions digitales sur-mesure. Parlons-en dès maintenant !</p>
  <div className="flex justify-center gap-4 flex-wrap">
    <a href="/contact" className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
      Nous contacter
    </a>
    <a href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700">
      Devis gratuit
    </a>
  </div>
</div>

    <Footer />
  </main>
  );
}
