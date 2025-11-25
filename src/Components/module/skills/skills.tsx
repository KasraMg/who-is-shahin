"use client";
import React, { useState } from "react";
import data from "@/utils/skills-data";
import Card from "@/Components/templates/skills/card";
import i18n from "@/i18n/index";
import ParticlesComponent from "@/Components/templates/particles/particles";
import { SkillType } from "@/types/Index.types";

export default function Skills() {
  const [skills, setSkill] = useState(data);

  return (
    <div
      id="skills"
      className="relative border-b-2 sm:border-0 border-red-600 border-solid bg-[#1d192c] pb-[160px] pt-10"
    >
      <p className="font-futura text-fill-transparent text-stroke font-bold text-[120px] uppercase sm:text-[80px] xs:!text-[50px] w-full text-center mb-20 ">
        {i18n.language == "fa" ? " تخصص ها" : " my skills"}
      </p>
      <div className=" relative h-full">
        <main
          dir="ltr"
          data-aos="flip-left"
          data-aos-duration="3000"
          className="skills-main z-[9999] relative flex justify-evenly mx-auto w-full md:flex-col max-w-[1346px] "
        >
          <div>
            {skills.slice(0, 6).map((data: SkillType) => (
              <Card key={crypto.randomUUID()} {...data} />
            ))}
          </div>

          <div className=" md:mt-0 mt-28">
            {skills.slice(6, 11).map((data: SkillType) => (
              <Card key={crypto.randomUUID()} {...data} />
            ))}
          </div>
        </main>

        <ParticlesComponent />
        <span
          className="
        before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-[#f43534] before:left-[-7px] before:top-0
        after:absolute after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-[#f43534] after:left-[-7px] after:bottom-0
        
        block w-[2px] xs:h-[101%] h-full bg-[#f43534] absolute left-1/2 -ml-[1px] -top-10"
        ></span>
      </div>
    </div>
  );
}
