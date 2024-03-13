import herou from "../assets/images/herou.jpg";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const social_media = [
    { icon: <FaInstagram /> },
    { icon: <FaFacebook /> },
    { icon: <FaLinkedin /> },
    { icon: <FaTwitter /> },
  ];

  return (
    <section id="home" className="min-h-screen flex py-10 gap-10 px-7 md:flex-row flex-col items-center">
      <Image src={herou} alt="Hero Image" className="md:w-11/12 object-cover flex-1 flex items-center justify-center h-full" />

      <div className="flex-1 flex-col text-center md:text-left">
        <h1 className="text-cyan-600 md:text-6xl text-5xl font-bold">Bonjour!</h1>
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">Je suis CHILDERIC</h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-300">Spécialiste en électricité résidentielle et industrielle</h4>
        <a href="#" className="bg-cyan-600 px-6 py-3 inline-block mt-8 rounded-full cursor-pointer text-white font-semibold hover:bg-cyan-700">Contactez-Moi</a>
        <ul className="mt-8 text-3xl flex justify-center md:justify-start text-gray-600 gap-5">
          {social_media?.map((icon, i) => (
            <li key={i} className="hover:text-cyan-600 cursor-pointer transition-colors duration-300">{icon?.icon}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
