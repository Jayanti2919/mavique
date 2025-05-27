import React from "react";
import { services } from "../constants";
import { space } from "postcss/lib/list";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-secondary text-xl font-bold">{title}</h3>
      <p className="text-secondary text-base">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="mt-10 md:mt-0 md:px-20 px-10 flex gap-5 flex-col pb-10">
      <h2 className="text-secondary text-3xl font-bold open-sans">
        Our Services
      </h2>
      <p className="text-xl open-sans font-semibold text-secondary">
        We offer a range of services to help you achieve your goals.
      </p>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
      <p className="text-xl open-sans font-semibold text-secondary">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgHhlJ4Ryd6XoNZWZj6etIN4xmsenOddM9c52K5J0bmIsq1w/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:cursor-pointer"
        >
          Contact us{" "}
        </a>
        to learn more about how we can assist you.
      </p>
    </div>
  );
};

export default Services;
