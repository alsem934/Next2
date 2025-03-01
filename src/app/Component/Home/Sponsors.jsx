


'use client';
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";


const Sponsors = () => {
  const sponsorsData = [
    {
      name: "ALX-Ethiopia",
      image: "/Images/alx.jpg",
      level: "Platinum",
      linkedin: "https://www.linkedin.com/company/alx-ethiopia",
      twitter: "https://www.instagram.com/alx_ethiopia",
    },
    {
      name: "SAND Technologies",
      image: "/Images/sand.jpg",
      level: "Platinum",
      linkedin: "https://www.linkedin.com/company/sand-technologies",
      twitter: "https://www.instagram.com/sand_technologies",
    },
    {
      name: "ICE Addis",
      image: "/Images/iceaddis.jpg-removebg-preview.png",
      level: "Platinum",
      linkedin: "https://www.linkedin.com/company/iceaddis",
      twitter: "https://www.instagram.com/iceaddis",
    },
    {
      name: "Chapa",
      image: "/Images/chapa.png",
      level: "Platinum",
      linkedin: "https://www.linkedin.com/company/chapa-financial-technologies",
      twitter: "https://www.instagram.com/chapa.et",
    },
    {
      name: "Convex",
      image: "/Images/convex-logo.png",
      level: "Platinum",
      linkedin: "https://www.linkedin.com/company/convex-tech/",
    },
    {
      name: "Yegara Host",
      image: "/Images/yegara.png",
      level: "Platinum",
      linkedin: "https://www.linkedin.com/company/yegarahost/",
    },
    {
      name: "Kuraz Tech",
      image: "/Images/kuraz.png",
      level: "Silver",
      linkedin: "https://www.linkedin.com/company/kuraztech",
      twitter: "https://www.instagram.com/kuraztech/?hl=en",
    },
    {
      name: "Horan Tech",
      image: "/Images/horan.png",
      level: "Silver",
      linkedin: "https://www.linkedin.com/company/horan-tech",
      twitter: "https://www.instagram.com/horan_tech",
    },
    {
      name: "Dagmawi Babi",
      image: "/Images/dagi-channel.jpg",
      level: "Individual",
      linkedin: "https://www.linkedin.com/in/dagmawi-babi",
      twitter: "https://www.instagram.com/dagmawi.babi",
    },
  ];
  const getLevelColor = (level) => {
    switch (level) {
      case "Platinum":
        return "bg-indigo-600";
      case "Silver":
        return "bg-gray-400";
      case "Individual":
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Sponsors
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {sponsorsData.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <div className="sponsor-card group transition-transform duration-300 hover:scale-105">
                <div className="h-20 pt-14 flex items-center justify-center">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-24 h-24 object-contain pb-2"
                  />
                </div>
                <div className="flex justify-center">
                  <span className={`inline-block px-3 py-1 my-4 rounded-full text-white text-sm ${getLevelColor(sponsor.level)}`}>
                    {sponsor.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold min-h-[4rem] text-gray-800 px-2 py-2 text-center">
                  {sponsor.name}
                </h3>
                <div className="flex justify-center space-x-4 mt-4">
                  {sponsor.linkedin && (
                    <a
                      href={sponsor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {sponsor.twitter && (
                    <a
                      href={sponsor.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Sponsors;
