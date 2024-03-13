import { AiOutlineMail, AiOutlinePhone, AiFillEnvironment } from 'react-icons/ai';

const Contact = () => {
  const contactInfo = [
    { icon: <AiOutlineMail />, text: 'yourname@gmail.com' },
    { icon: <AiOutlinePhone />, text: '1233455' },
    { icon: <AiFillEnvironment />, text: 'yourlocation' },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white text-center mt-8">
      <div className="text-4xl font-semibold flex gap-2 justify-center">
        <h3>Contact</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>

      <div className="flex flex-col items-center mt-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-2">
            {info.icon}
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
