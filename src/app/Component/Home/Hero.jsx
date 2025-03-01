'use client';
import Link from "next/link";
import { Sigmar, Kanit, Playfair_Display } from 'next/font/google';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r text-black py-20 text-center relative">
      <div className="container mx-auto px-6">
        <h1 className={`text-6xl mb-4 md:text-7xl lg:text-8xl txt-blue-600 `}>Dev Meetup 3!</h1>

        <h2 >Join us for an amazing event! </h2>
        <h2 >Don't miss out.</h2>
        <div className={`text-lg mb-8 md:text-xl lg:text-2xl `}>
          Connecting Developers, Building Communities.
        </div>

        <div className="justify-center flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link
            href="/past-events"
            className="bg-black text-blue-500 px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 inline-block cursor-pointer max-w-xs break-words text-center"
          >
            Explore Past Events
          </Link>
          <Link
            href="/event3"
            className="bg-black text-blue-500 px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 inline-block cursor-pointer max-w-xs break-words text-center"
          >
            Join Event 3
          </Link>
        </div>

        {/* Keynote Speakers Section */}
        <div className="mt-16 w-full">
  <h2 className="text-4xl font-bold mb-8">Keynote Speakers</h2>
  <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
    <div className="w-full md:w-1/2 text-center bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors shadow-sm flex flex-col items-center">
      {/* Image and Name Side by Side on Mobile */}
      <div className="flex items-center space-x-3 md:flex-col md:space-x-0 md:space-y-4 mb-2">
        <div className="w-16 h-16 overflow-hidden rounded-full flex-shrink-0">
          <img src="/Images/Addis Alemayehou.jpg" alt="Addis Alemayehou" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-lg font-semibold text-gray-800 text-left md:text-center mb-1">Addis Alemayehou</h3>
          <p className="text-indigo-600 text-xs text-left md:text-center mb-2">
            Chairman @Kazana Group | Strategy, African Affairs
          </p>
          <div className="flex gap-2 md:justify-center mt-1">
            <a href="https://www.linkedin.com/in/addis-alemayehou-18951039/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <FaLinkedin />
            </a>
            <a href="https://x.com/addisale" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm text-center mb-4 flex-grow">
        A visionary leader in African business development, Addis Alemayehou brings over two decades of strategic expertise as Chairman of Kazana Group and Co-founder of Dodai. His pioneering work in establishing robust partnerships and driving innovation across African markets has made him a transformative force in the region. As General Partner at Kazana Fund, Addis leverages deep market insights to foster sustainable growth and create lasting impact in Africa's business landscape.
      </p>
    </div>

    <div className="w-full md:w-1/2 text-center bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors shadow-sm flex flex-col items-center">
      {/* Image and Name Side by Side on Mobile */}
      <div className="flex items-center space-x-3 md:flex-col md:space-x-0 md:space-y-4 mb-2">
        <div className="w-16 h-16 overflow-hidden rounded-full flex-shrink-0">
          <img src="/Images/mirafe.jpg" alt="Mirafe Gebriel Marcos" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-lg font-semibold text-gray-800 text-left md:text-center mb-1">Mirafe Gebriel Marcos</h3>
          <p className="text-indigo-600 text-xs text-left md:text-center mb-2">
            Regional Director, African Leadership Group (ALG) / ALX
          </p>
          <div className="flex gap-2 md:justify-center mt-1">
            <a href="https://www.linkedin.com/in/mirafegmarcos/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <FaLinkedin />
            </a>
            <a href="https://x.com/GMirafe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm text-center mb-4 flex-grow">
        As General Manager of Sand Technologies Ethiopia, Mirafe Gebriel Marcos is a seasoned executive with over two decades of organizational leadership excellence. Known for his agile approach to business management, he excels in strategic planning and execution while building high-performing teams. His proven track record in managing diverse programs and cultivating dynamic organizational cultures makes him a compelling voice in technology leadership.
      </p>
    </div>
  </div>
</div>





      </div>
      {/* <div className="absolute inset-0 bg-opacity-30"></div> */}
    </section>
  );
};

export default HeroSection;