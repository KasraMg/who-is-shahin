"use client";
import { SkillType } from "@/types/Index.types";
import i18n from "@/i18n/index";
export default function Card(props: SkillType) {
  return (
    <div
      dir={i18n.language == "fa" ? "rtl" : "ltr"}
      className="relative md:!w-3/4 md:mx-auto items-stretch md:z-[888] border-[#26272d] border-solid border-2 xs:px-4  pb-5 pt-4 px-8 rounded-md mb-12 bg-[#1c1d21] lg:w-[377px] w-[535px]"
    >
      <div className="font-swap text-3xl text-white flex gap-2">
        <p className="relative z-40 top-[2px]">{props.name}</p>
        <span className="bg-[linear-gradient(to_right,_#bb1717_0%,_#0f0f0f00_81%,_#00000000_100%)] block relative top-[20px] ml-8 h-[2px] w-full"></span>
      </div>
      <p
        className={`${
          i18n.language == "fa" ? "font-vazirlight" : "font-swap"
        }  text-1xl text-white mt-4 xs:mt-5 text-[15px]`}
      >
        {i18n.language !== "en" ? props.des_fa : props.des_en}
      </p>
      <div
        className={
          props.rotate
            ? "left-1 absolute md:left-1 md:right-auto md:w-full sm:!left-9 -top-5"
            : "absolute md:left-1 md:right-auto -top-5 right-1 md:w-full  sm:!left-9"
        }
      >
        <span
          className={
            props.rotate
              ? "shadow-[0_0_0_8px_#333] xs:top-[48px]  w-[18px] h-[18px] z-[2] bg-[#f43534]  rounded-full absolute top-[50px] md:-left-[61px] md:right-auto  -left-[61px]"
              : "shadow-[0_0_0_8px_#333] xs:top-[48px]  w-[18px] h-[18px] z-[2] bg-[#f43534] md:-left-[61px] md:right-auto   rounded-full absolute top-[50px] -right-[61px]"
          }
        ></span>
        <span
          className={
            props.rotate
              ? "bg-[linear-gradient(to_right,_#00000000_1%,_#4e4e4efc_99%,_#4e4e4e_100%)] xs:w-[105%] absolute w-[115px] h-8 md:-left-12 md:right-auto -left-12 top-[42px]"
              : "bg-[linear-gradient(to_right,_#00000000_1%,_#4e4e4efc_99%,_#4e4e4e_100%)] xs:w-[105%] absolute w-[115px] h-8 -right-12 top-[42px] md:-left-12 md:right-auto"
          }
        ></span>
      </div>
    </div>
  );
}
