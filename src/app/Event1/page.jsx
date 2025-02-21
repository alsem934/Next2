

'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import EventSections from '../PastEvent/EventSection';
import { Autoplay } from 'swiper/modules';

const organizers = [
  { name: 'Temkin Mengestu', role: 'Senior Back-end Developer', image: '/Images/Chappi.avif' },
  { name: 'Yeabsra', role: 'Flutter Developer', image: '/Images/yeabsra.avif' },
];

const sponsors = ["alx.jpeg", "chappa.avif", "Cbe.avif", "tele.avif", "telebirr.avif"];

function Event1() {
  return (
    < >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">DevMeetup V1</h1>
          <p className="text-xl">The First brought energy and excitement!</p>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="container mx-auto px-6 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Organizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {organizers.map((org, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-8 transform hover:scale-105 transition">
              <Image 
                src={org.image} 
                alt={org.name} 
                width={128} 
                height={128} 
                className="rounded-full mx-auto mb-4 border-4 border-white" 
              />
              <h3 className="text-xl font-bold text-black">{org.name}</h3>
              <p className="text-black">{org.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section with Swiper */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Sponsors</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {sponsors.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/20 p-6 rounded-lg">
                  <Image 
                    src={`/Images/${image}`} 
                    alt={`Sponsor ${index + 1}`} 
                    width={128} 
                    height={128} 
                    className="mx-auto mb-4 rounded-lg" 
                  />
                  <p className="text-gray-300">Sponsor {index + 1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* <EventSections
        venue="Lideta Area Balcha Hospital Capstone Building, Addis Ababa"
        date="2"
      /> */}
    </>
  );
}

export default Event1;
