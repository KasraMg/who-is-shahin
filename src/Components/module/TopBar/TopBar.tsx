"use client";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { HiArrowLongDown, HiArrowLongRight } from "react-icons/hi2";
import { AiOutlineInstagram } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import i18n from "@/i18n/index";
import Link from "next/link";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function TopBar() {
  const { t } = useTranslation();
  return (
    <div className="topbar bg-[top] bg-fullSize bg-[#1d192c] border-b-2 border-red-600 border-solid sm-x2:pb-20">
      <section
        className={`${
          i18n.language == "fa" ? null : "pl-44"
        } px-36 relative z-20  sm-x2:overflow-hidden  pb-[70px] lg:px-10 pt-28 md:pt-10`}
      >
        <Image
          width={500}
          height={500}
          src="/Images/mobile-img.jfif"
          className="me-image-2 z-[9999] relative sm-x2:w-60  sm-x2:h-64  sm-x2:relative  sm-x2:z-50 hidden md:block object-cover w-72 h-80 mx-auto mb-4 rounded-full"
          alt=""
        />
        <div
          className={`md:text-center sm:w-full  sm-x2:mt-8 md:w-full w-max relative text-white font-swap font-extrabold`}
        >
          <p
            className={`${
              i18n.language == "fa"
                ? "text-[7rem] mt-4 leading-[1]"
                : "text-9xl"
            }  text-9xl sm-x3:!text-[23px] sm:mx-auto  md:text-6xl z-20 relative`}
          >
            {t("topbar.title")}
          </p>
          <Image
            width={144}
            height={106}
            className={`${
              i18n.language == "fa"
                ? "md:left-40 sm-x3:!left-0  left-10"
                : " md:right-40 sm-x3:!right-0  right-2"
            } absolute top-4 md:top-0 w-36  z-10`}
            src="/Images/title.png"
            alt=""
          />
        </div>
        <p
          className={`${
            i18n.language == "fa"
              ? " !font-vazirlight font-thin  relative "
              : " font-swap"
          } text-5xl md:text-3xl md:text-center top-4 md:w-full mt-4 w-max relative  sm-x2:!text-2xl text-white font-extrabold z-10`}
        >
          {" "}
          {t("topbar.myJob")}
        </p>
        <div
          className={`${
            i18n.language == "fa" ? "justify-start " : ""
          } pt-12 md:text-center gap-3 sm-x2:flex-col md:!justify-center flex items-center`}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-thin text-white font-swap w-[90px]">
              {t("topbar.hire")}
            </span>
            <Link href="#footer" className="z-[999] relative">
              <button className="bg-red-600 text-2xl relative top-1 rounded-full p-4 text-white">
                <HiArrowLongRight />
              </button>
            </Link>
          </div>

          <div className="mx-4 flex items-center gap-2">
            <span className="text-2xl font-thin text-white font-swap w-[90px]">
              {t("topbar.resume")}
            </span>
            <Link href="#footer" className="z-[999] relative">
              <button className="bg-red-600 text-2xl relative top-1 rounded-full p-4 text-white">
                <IoCloudDownloadOutline />
              </button>
            </Link>
          </div>
        </div>
        <Image
          width={317}
          height={798}
          className={`${
            i18n.language == "fa"
              ? "sm-x2:right-0 TopBar-logo-fa"
              : "sm-x2:left-0 TopBar-logo"
          }  absolute  sm-x2:w-full`}
          src="/Images/vertical_logo.png"
          alt=""
        />
        <Image
          width={420}
          height={100}
          src="/Images/shomal2.jpg"
          className={`${
            i18n.language == "fa"
              ? "left-[220px] lg:left-28"
              : "right-[220px] lg:right-28"
          } me-image absolute h-auto  w-[420px] -top-[74px]  md:hidden`}
          alt=""
        />
        <Image
          width={91}
          height={100}
          src="/Images/dot-texture.png"
          className={`${
            i18n.language == "fa"
              ? " md:!left-[45%]  lg:left-3 left-[97px] "
              : " md:!right-[45%]  lg:right-3 right-[97px]"
          } dot-bg  md:z-[-1] md:-top-20 top-32 absolute max-w-full h-auto`}
          alt=""
        />
      </section>
      <div className="flex justify-between items-center">
        <Link
          href="#footer"
          onClick={() => window.scrollTo(500, 7900)}
          className={` z-50 cursor-pointer sm-x2:hidden`}
        >
          <p className="scrollDown text-white ">
            {t("topbar.scroll")}{" "}
            <Image
              width={16}
              height={23}
              className=" absolute z-50 cursor-pointer w-4 top-0 -left-10"
              src="/Images/scroll.png"
              alt=""
            />
          </p>
        </Link>
        <div
          className={`${
            i18n.language == "fa" ? "mr-auto ml-14" : " ml-auto "
          } flex gap-5 w-11 sm-x2:!gap-10 sm-x2:relative sm-x2:flex-row sm-x2:right-auto sm-x2:mx-auto sm-x2:w-full sm-x2:justify-center  sm-x2:top-12 relative top-3 right-4 pb-10 flex-col text-2xl text-white`}
        >
          <Link
            href="https://instagram.com/_ka.s.ra_?igshid=ZDc4ODBmNjlmNQ=="
            target="_blank"
          >
            <AiOutlineInstagram className="ml-auto mr-7 sm-x2:mx-auto " />
          </Link>
          <Link href="https://t.me/MrShahiin" target="_blank">
            <BiLogoTelegram className="ml-auto mr-7 sm-x2:mx-auto " />
          </Link>
          <Link href="https://github.com/KasraMg" target="_blank">
            <BsGithub className="ml-auto mr-7 sm-x2:mx-auto " />
          </Link>
          <Link href="https://discord.com/users/shahin#6613" target="_blank">
            <BsDiscord className="ml-auto mr-7 sm-x2:mx-auto " />
          </Link>
        </div>
      </div>
    </div>
  );
}
