import React, { useRef } from "react";
import { services } from "../constants";
import { motion, useInView } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ServiceCard = ({ title, description, image }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white shadow-md rounded-lg p-5"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-secondary text-xl font-bold">{title}</h3>
      <p className="text-secondary text-base">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-10 md:mt-0 md:px-20 px-10 flex gap-5 flex-col pb-10"
    >
      <motion.h2
        variants={itemVariants}
        className="text-secondary text-3xl font-bold open-sans"
      >
        Our Services
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-xl open-sans font-semibold text-secondary"
      >
        We offer a range of services to help you achieve your goals.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-5"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-xl open-sans font-semibold text-secondary"
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgHhlJ4Ryd6XoNZWZj6etIN4xmsenOddM9c52K5J0bmIsq1w/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:cursor-pointer"
        >
          Contact us{" "}
        </a>
        to learn more about how we can assist you.
      </motion.p>
    </motion.div>
  );
};

export default Services;
