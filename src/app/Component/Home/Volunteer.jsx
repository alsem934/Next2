import { FaLinkedin } from "react-icons/fa";

const volunteersData = [
    {
      name: "Eyob Tilahun",
      role: "Graphics Designer",
      description: "Create different graphics about DevMeet-up v3 to be shared across social media.",
      image: "/assets/10007.jpg",
      linkedin: "https://www.linkedin.com/in/eyobtilahun/",
    },
    {
      name: "Yeabsira Mekonnen",
      role: "Host and MC",
      description: "Engaging the audience and ensuring the DevMeetup runs smoothly.",
      image: "/assets/10008.jpg",
      linkedin: "https://www.linkedin.com/in/yeabsira-mekonnen-",
    },
    {
      name: "Yohana Mekuria",
      role: "Website Development",
      description: "Building the website for the DevMeetup-v3 campaign.",
      image: "/assets/10009.jpeg",
      linkedin: "https://www.linkedin.com/in/yohana-mekuria-90607a2ab/",
    },
    {
      name: "Abrham Tilksew",
      role: "WebDevelopment|Sponsorship",
      description: "Building a website for the DevMeetup-v3 campaign. Also volunteer in the sponsorship team.",
      image: "/assets/10010.jpeg",
      linkedin: "https://www.linkedin.com/in/abrham28/",
    },
    
    {
      name: "Sumeya Akmel",
      role: "Website Development",
      description: "Building the website for the DevMeetup-v3 campaign.",
      image: "/assets/10011.jpeg",
      linkedin: "https://www.linkedin.com/in/sumeya-akmel-2a3b9b270/",
    },
    {
      name: "Alamudin Seman",
      role: "Website Development",
      description: "Building the website for the DevMeetup-v3 campaign.",
      image: "/assets/10.jpg",
      linkedin: "https://www.linkedin.com/in/alamudin-seman-1654072b7/",
    },
    {
      name: "Medina Nesro",
      role: "Logistic Manager",
      description: "Oversees logistics and ensures smooth operations.",
      image: "/assets/10013.jpeg",
      linkedin: "https://www.linkedin.com/in/medina-nesro-297a44233/",
    },
    {
      name: "Ruth Mesfin ",
      role: "Logistic Manager",
      description: "Oversees logistics and ensures smooth operations.",
      image: "/assets/10014.jpeg",
      linkedin: "https://www.linkedin.com/in/ruth-mesfin-555073321/",
    },
    {
      name: "Ruth Abiti ",
      role: "Sponsorship Team",
      description: "Reasearching potential sponsers and reaching out with proposals.",
      image: "/assets/10012.jpeg",
      linkedin: "https://www.linkedin.com/in/ruth-abiti-b8b737313/",
    }
    
  ];
  
const Volunteers = () => {
  return (
    <div className="mx-auto bg-white-454 mt-13 py-16s">
      <h2 className="text-2xl font-bold text-center mb-3">Event Volunteers</h2>
      <p className="text-gray-600 text-center text-sm mb-8 max-w-3xl mx-auto">
        Meet the dedicated volunteers helping to make DevMeetup a success
      </p>

      <div className="max-w-6xl mx-auto bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {volunteersData.map((volunteer, index) => (
            <div key={index} className="w-full md:w-[250px] flex flex-col">
              <div className="flex flex-col items-center p-6 rounded-l bg-white shadow-lg transition-transform duration-300  flex-grow">
                <div className="w-14 h-14 md:w-32 md:h-32 mb-4 overflow-hidden rounded-full">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {volunteer.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-2">
                  {volunteer.role}
                </p>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  {volunteer.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={volunteer.linkedin}
                    className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
