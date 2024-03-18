const About = () => {
  const CompanyInfo = [
    { text: "Années d'expérience", count: "15" },
    { text: "Projets réalisés", count: "100" },
    { text: "Clients satisfaits", count: "1500" },
  ];
  
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>A PROPOS DE </h3>
        <h3 className="text-cyan-600">NOTRE EXPERTISE</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold">Votre partenaire en électricité depuis 15 ans</p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
          Notre entreprise est spécialisée dans les services électriques résidentiels et industriels depuis plus de 15 ans. Nous avons réalisé avec succès plus de 100 projets et avons satisfait plus de 1500 clients grâce à notre expertise et notre dévouement.
        </p>
        <ul className="mt-10 flex items-center justify-center md:gap-48 gap-6">
          {CompanyInfo?.map((content, i) => (
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
