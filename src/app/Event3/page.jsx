'use client'
// import React from 'react';
// import Link from 'next/link';
import { FaRegCommentDots } from 'react-icons/fa';
// import Chat from '../Chat/page'
// import LiveUpdates from '../LiveUpdates/page';
import Link from 'next/link';

import V3TeaserSection from '../Component/Home/Teaser';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Event3() {
  const sponsors = ["alx.jpeg", "chappa.avif", "Cbe.avif", "tele.avif", "telebirr.avif"];

  return (
    <>
      <div>
        {/* Floating Chat Button */}
        <Link href="/Chat" className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
          <div className="flex items-center">
            <FaRegCommentDots className="text-green-500" size={24} />
            <span className="ml-2">Your comment here</span>
          </div>
        </Link>

        {/* Hero Section */}
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="text-center p-6 md:p-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-bounce">Dev Meet Up 3!</h1>
            {/* <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-bounce">🚀 Coming Soon!</h1> */}
            <V3TeaserSection />
            <p className="text-lg md:text-2xl mb-6 opacity-90">Exciting things are on the way. Stay tuned!</p>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-white rounded-lg animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Live Updates Section */}
        {/* <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-center mb-6">📢 Live Updates</h2>
            <p className="text-center text-lg mb-4 opacity-90">Stay updated with real-time event news!</p>
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md max-h-96 overflow-y-auto">
              <LiveUpdates />
            </div>
          </div>
        </section> */}

        {/* Sponsors Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-16 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Sponsors</h2>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
              {sponsors.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg text-center">
                    <img
                      src={`/Images/${image}`}
                      alt={`Sponsor ${index + 1}`}
                      className="w-32 h-32 mx-auto mb-4 rounded-lg"
                    />
                    <p className="text-gray-300">Sponsor {index + 1}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}

export default Event3;
