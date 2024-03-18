import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-10 text-white">
      <div className="text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>CONTACTEZ-NOUS</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold">Besoin d'aide ? Contactez-nous dès aujourd'hui.</p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
          Pour toute demande d'information, de devis ou de support, n'hésitez pas à nous contacter. Notre équipe est là pour répondre à toutes vos questions et vous fournir l'aide dont vous avez besoin.
        </p>
        <div className="flex items-center justify-center mt-10">
          <div className="flex items-center gap-4">
            <FaEnvelope size={30} />
            <p>contact@votreentreprise.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone size={30} />
            <p>+1 234 567 890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
