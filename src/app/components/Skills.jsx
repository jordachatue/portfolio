import { FaPlug, FaLightbulb, FaTools, FaBolt } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <FaPlug />, level: "Expertise en installations électriques" },
    { icon: <FaLightbulb />, level: "Connaissances en éclairage" },
    { icon: <FaTools />, level: "Compétences en maintenance électrique" },
    { icon: <FaBolt />, level: "Expérience en systèmes de distribution d'énergie" },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 mt-8 text-gray-100 text-center">
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>Mes</h3><h3 className="text-cyan-600">Compétences en Électricité</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg">Mes savoir-faire en électricité</p>
      <ul className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills?.map((skill, i) => (
          <li key={i}>
            <div className="text-5xl flex justify-center">{skill?.icon}</div>
            <div className="text-2xl">{skill?.level}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
