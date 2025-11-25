"use client";
import React from "react";
import i18n from "@/i18n/index";
import { useTranslation } from "react-i18next";
import Image from "next/image";
export default function Intro() {
  const { t } = useTranslation();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className={` overflow-hidden  Intro relative   bg-[#1d192c] `}
      id="me"
    >
      <Image
        height={50}
        width={90}
        src="/Images/dot-texture.png"
        className="lg:bottom-12 absolute bottom-3 left-5"
        alt="shape"
      />
      <main className="px-[144px] lg:px-12 flex md:!pr-0 sm:!pl-0 border-b-2 sm:border-0 border-red-600 border-solid   sm:flex-col ">
        <Image
          height={1000}
          width={1000}
          src={"/Images/code.jpeg"}
          className="w-80 sm:!border-l-0 border-l border-white sm:!block sm:object-cover sm:!w-full xs:!h-[300px] sm:h-[430px] sm:rounded-none md:hidden object-cover lg:w-72 rounded-l-[20rem] relative z-30"
          alt="شاهین مشکل گشا"
        />
        <section
          dir={i18n.language == "fa" ? "rtl" : "ltr"}
          className={`${
            i18n.language == "fa" && "pr-5"
          } bg-center bg-[url(/Images/about-bg.jpg)] relative`}
        >
          <div className="overlay"></div>
          <div
            className={` ${
              i18n.language == "fa"
                ? " !font-vazirlight !font-thin"
                : "font-swap "
            } z-[9999] relative   mt-6 lg:text-[1.5rem] leading-[53px] ml-6 text-[2rem] text-white mix-blend-difference `}
          >
            {" "}
            {t("intro.text1")}
          </div>
          <div
            className={`${
              i18n.language == "fa"
                ? " mr-auto ml-5 font-vazirlight font-thin"
                : "font-swap ml-auto mr-2"
            }  w-80  leading-10 text-[22px] xs:!w-full xs:px-5 mix-blend-difference relative z-30  mt-16 text-justify text-white`}
          >
            {" "}
            {t("intro.text2")}{" "}
            <p className="text-red-600 !text-base mt-3"> {t("intro.text3")}</p>
          </div>
        </section>
        <Image
          height={1000}
          width={1000}
          src="/Images/photo_6023903289084594267_y.jpg"
          className="w-[250px] z-[99] object-cover sm:hidden lg:w-72"
          alt="شاهین مشکل گشا"
        />
      </main>
      <Image
        height={1000}
        width={1000}
        className="intro-shape absolute xs:bottom-32 bottom-0 right-1"
        src="/Images/shape.png"
        alt="shape"
      />
    </div>
  );
}
