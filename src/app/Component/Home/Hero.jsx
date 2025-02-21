


'use client';
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center relative">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-4 md:text-5xl lg:text-6xl">Welcome to DevMeetup!</h1>

        
        <div
        text='Connecting Developers, Building Communities.'
       className="text-lg mb-8 md:text-xl lg:text-2xl"
      
       ></div>
        
        



        <div className="justify-center flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
         <Link
  href="/past-events"
  className="bg-white text-blue-500 px-8 py-3 rounded-lg  transition duration-300 transform hover:scale-105 inline-block cursor-pointer max-w-xs break-words text-center"
>
            Explore Past Events
          </Link>
          <Link
          href="/event3"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition duration-300 transform hover:scale-105 inline-block max-w-xs  ml-15 "
          >
            Join Event 3
          </Link>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-opacity-30"></div> */}
    </section>
  );
};

export default HeroSection;
