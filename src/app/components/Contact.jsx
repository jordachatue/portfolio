const About = () => {
  const Info = [
    { text: "Années d&apos;expérience", count: "10" },
    { text: "Projets réalisés", count: "50" },
    { text: "Clients satisfaits", count: "1000" },
  ];
  
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>A PROPOS DE</h3>
        <h3 className="text-cyan-600">NOUS</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold">Votre électricien de confiance</p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
          En tant que ;électricien professionnel, nous nous engageons à fournir des services de qualité pour tous vos besoins en électricité. Que ce soit pour installation, la maintenance ou la réparation électrique, nous sommes là pour vous offrir des solutions fiables et efficaces.
          Notre équipe expérimentée est dédiée à assurer la sécurité et le bon fonctionnement de vos installations électriques, tout en respectant les normes en vigueur. Faites confiance à notre expertise pour tous vos projets électriques, grands ou petits.
        </p>
        <ul className="mt-10 flex items-center justify-center md:gap-48 gap-6">
          {Info?.map((content, i) => (
            <li key={i} className="flex md:flex-row md:gap-2">
              <div className="flex-col">
                <div className="flex">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">{content?.count}</h3>
                  <h3 className="text-cyan-600 font-bold text-2xl">+</h3>
                </div>
                <h3 className="md:text-base text-xs">{content?.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
