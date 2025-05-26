import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import { testimonials } from "../constants";

const TestimonialCard = ({ name, text, image, instagram, youtube }) => {
  return (
    <div className="bg-secondary text-primary shadow-md h-fit flex items-center gap-5 p-5 rounded-lg pl-32">
      <img src={image} alt="client image" className="rounded-lg w-1/3" />
      <div>
        <span className="text-md">{text}</span>
        <h3 className="text-primary text-xl font-bold italic">- {name}</h3>
        <div className="flex items-center gap-2 mt-5">
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram
              className="inline text-primary cursor-pointer"
              size={24}
            />
          </a>
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube
              className="inline text-primary cursor-pointer ml-2"
              size={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="pt-20 md:px-20 px-10 bg-primary pb-10">
      <h2 className="text-secondary text-3xl font-bold open-sans mb-4">
        Client Testimonies
      </h2>
      <p className="mb-10 text-secondary text-xl font-semibold">
        Here's what our clients have to say about us...
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              name={testimonial.name}
              text={testimonial.text}
              image={testimonial.image}
              instagram={testimonial.instagram}
              youtube={testimonial.youtube}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
