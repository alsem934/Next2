import { FaLinkedin } from "react-icons/fa";

const organizersData = [
  {
    name: "Temkin Mengistu",
    role: "Lead Organizer",
    description: "DevMeetup Lead Organizer",
    image: "/assets/10001.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/chapimenge/"
    }
  },
  {
    name: "Meron Abate",
    role: "Lead Organizer",
    description: "DevMeetup Lead Organizer",
    image: "/assets/10002.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/meronabate/"
    }
  },
  {
    name: "Mulu Tsega",
    role: "Guest Coordinator",
    description: "Coordinating guest speakers and attendees",
    image: "/assets/10003.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/mulu-tsega943/"
    }
  },
  {
    name: "Simon Asaye",
    role: "Agenda Coordinator",
    description: "Managing event schedule and activities",
    image: "/assets/10004.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/simon-asnake/" 
    }
  },
  {
    name: "Muhammed Ibrahim ",
    role: "Guest Coordinator",
    description: "Coordinating guest speakers and attendees",
    image: "/assets/10005.jpg",
    social: {
      linkedin:"https://www.linkedin.com/in/mohammed-ibrahim-45a1b9247/" 
    }
  },
  {
    name: "Lydia Firew",
    role: "Logistic Coordinator",
    description: "Managing event logistics and operations",
    image: "/assets/10006.jpg",
    social: {
      linkedin:"https://www.linkedin.com/in/lydiaabrahamfirew/" 
    }
  }
];

const Organizers = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-2xl font-bold text-center mb-3">Event Organizers</h2>
      <p className="text-gray-600 text-center text-sm mb-8 max-w-3xl mx-auto">
        Meet the dedicated team behind DevMeetup
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizersData.map((organizer, index) => (
            <div key={index} className="w-full md:w-[250px]">
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="w-24 h-24 md:w-32 md:h-32 mb-4 overflow-hidden rounded-full">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {organizer.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-2">
                  {organizer.role}
                </p>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  {organizer.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={organizer.social.linkedin}
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

export default Organizers;
