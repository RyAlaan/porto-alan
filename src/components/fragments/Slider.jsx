import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faLaravel,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

// export default Slider
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  const mySkills = [
    {
      icon: faHtml5,
      name: "HTML",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#E44D26]",
    },
    {
      icon: faCss3Alt,
      name: "CSS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#1A6FB4]",
    },
    {
      icon: faJs,
      name: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#E8D44D]",
    },
    {
      icon: faReact,
      name: "React",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#58D2F3]",
    },
    {
      icon: faLaravel,
      name: "Laravel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#F72617]",
    },
    {
      icon: faBootstrap,
      name: "Bootstrap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#6D11EE]",
    },
    {
      icon: faSass,
      name: "Sass",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim optio amet hic suscipit officiis.",
      color: "group-hover:text-[#C76395]",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="max-w-[310px] aspect-square p-4 bg-slate-700 group group-hover:cursor-pointer text-secondary my-8">
          <div
            className={
              "icon items-center flex flex-row gap-x-6 group-hover:text-[#38BDF8]"
            }
          >
            <h1 className={"text-2xl font-semibold"}>Tailwindcss</h1>
          </div>
          <div className="text pt-4 pr-2 group-hover:text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto id molestiae rem aspernatur asperiores quidem culpa
            </p>
          </div>
        </SwiperSlide>
        {mySkills.map((skill, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[310px] aspect-square p-4 bg-slate-700 group group-hover:cursor-pointer text-secondary my-8"
          >
            <div
              className={
                "icon items-center flex flex-row gap-x-6 " + skill.color
              }
            >
              <FontAwesomeIcon icon={skill.icon} className={"text-4xl"} />
              <h1 className={"text-2xl font-semibold"}>{skill.name}</h1>
            </div>
            <div className="text pt-4 pr-2 group-hover:text-white">
              <p>{skill.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
