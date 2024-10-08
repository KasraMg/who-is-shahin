"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import projectData from "@/utils/projectsData";
import { Navigation } from "swiper/modules";
import i18n from "@/i18n/index";
import { useTranslation } from "react-i18next";
import { ProjectType } from "@/types/Index.types.js";
import Card from "@/Components/templates/Projects/Card";
import Image from "next/image";

export default function Projects() {
  const [projects, _setProjects] = useState(projectData);
  const { t } = useTranslation();

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      style={{ background: "url(/Images/projectBg.jpg)" }}
      id="projects"
      className={`relative overflow-hidden border-b-2 border-solid border-red-600 pb-56 pt-36 md:pt-12 !bg-fixed !bg-center `}
    >
      <div className="bg-[#19182dd9] left-0 top-0 w-full h-full absolute"></div>
      <Swiper
        dir={"ltr"}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper !pb-5 xs:!pb-32 sm:border-t-2 sm:mt-5 border-0 pt-12 border-red-600 border-solid z-30 relative sm:pl-0 sm:!pt-20  ml-auto mr-0"
      >
        {projects &&
          projects.map((data: ProjectType) => (
            <SwiperSlide
              key={crypto.randomUUID()}
              className={` ${
                i18n.language == "fa" ? "dirRtl" : null
              } !flex md:flex-col-reverse  justify-between gap-8 bg-transparent `}
            >
              <Card {...data} />
            </SwiperSlide>
          ))}
      </Swiper>
      <p
        className={`${
          i18n.language == "fa"
            ? "!font-vazir xl:text-[180px] md:text-[130px] md:!-left-28 text-[150px] lg:bottom-[44%] lg:left-[5.5rem] bottom-[37%] left-60"
            : "bottom-[42%] text-[120px] md:!-right-48 lg:right-12 right-52"
        } projects-title sm:hidden font-bold uppercase absolute`}
      >
        {t("projects.title")}
      </p>
      <Image
        height={50}
        width={260}
        src="/Images/projectShape.png"
        className="bottom-0 -left-44 absolute"
        alt=""
      />
    </div>
  );
}
