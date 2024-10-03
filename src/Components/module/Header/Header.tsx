"use client";
import React, { useState, useEffect, useRef } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/index";
import i18next from "i18next";
import Link from "next/link";

export default function Header() {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [language, setLanguage] = useState("en");
  const drawer = useRef<any>();
  useEffect(() => {
    i18n.changeLanguage(language);
    i18n.language == "en"
      ? (document.documentElement.dir = "ltr")
      : (document.documentElement.dir = "rtl");
    drawer.current.style.display = "none";
    setTimeout(() => {
      drawer.current.style.display = "block";
    }, 1000);
    window?.addEventListener("scroll", () => {
      const currentScroll = window?.pageYOffset;
      if (currentScroll > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, [language]);

  return (
    <div className="h-[72px]">
      <header
        style={{
          animation: isSticky ? " slideDown 0.35s ease-out" : "none",
          boxShadow: isSticky ? "0 5px 16px rgba(0, 0, 0, 0.1)" : "none",
        }}
        className={`${
          isSticky &&
          ` !top-0 !fixed z-[99999] !py-2 left-0 w-full !text-[#1d192c] bg-white !max-w-full`
        } bg-full bg-[top] bg-fullSize bg-[#1d192c] sm-x2:px-3 text-white items-center flex justify-between flex-row-reverse py-4 px-10    `}
      >
        <div className="flex z-[999] sm-x3:mx-3">
          <div>
            <div className="flex items-center justify-center">
              <div className=" relative inline-block text-left dropdown  mt-1">
                <span className="rounded-md shadow-sm">
                  <button
                    style={{ boxShadow: "none" }}
                    className={`${
                      isSticky && "!text-[#1d192c]"
                    } outline-none border-0 inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5  transition duration-150 ease-in-out   text-white active:text-gray-800`}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span
                      style={{
                        marginLeft:
                          i18next.language === "fa" ? (".5rem" as any) : null,
                      }}
                    >
                      {i18next.language == "fa" ? "فارسی" : "en"}
                    </span>
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    className="absolute right-0   mt-2 origin-top-right cursor-pointer bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    role="menu"
                  >
                    <div className="mx-5 py-2">
                      <p
                        onClick={() =>
                          setLanguage(i18next.language == "en" ? "fa" : "en")
                        }
                        className="text-sm font-medium px-3 leading-5 text-gray-900 truncate"
                      >
                        {i18next.language == "en" && "fa"}{" "}
                        {i18next.language == "fa" && <>انگلیسی</>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isSticky && " !w-[48px]"} relative w-[64px]`}>
            <svg
              className="w-full cursor-pointer absolute "
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 226.75 211.94"
            >
              <path
                fill="red"
                d="M229,358.24l27.07-4,.36,1.73c-6.93.78-13.18,2.85-17.9,9.23l15.26-1.64a31.83,31.83,0,0,0-13.47,16.31l15.12-8.06.48,1c-4.42,6.81-9,13.54-13.19,20.47-2.38,3.9-3.89,8.14.41,13.57-1.38-9.39,3.7-14.41,8.88-19.61,2.09-2.09,3.12-5.24,4.61-7.92,1.25-2.24,2.47-4.5,3.51-6.4l2.48,10.64,1.25.55,2.11-4.48c0,11.26-4.31,16-13.19,16.52l5.82-8.75-.76-.58c-2.38,2.18-4.85,4.28-7.12,6.57-7.33,7.36-6.65,12.45,2.26,17.47-5.23,3-9.82,2.77-13.6-1.06-6.38-6.46-4.58-13.18-.55-20.42a67.39,67.39,0,0,1-6.68,4.45,62.41,62.41,0,0,1-7.42,2.75l12.11-14.3-1-1.24-6.19,1.47,6.34-9-.93-.67-12.83,9.39-.91-1.11,7.67-9.74-.71-1.64-10.86,1.52,10-8.85-15.39-3,18.8-5.2c-2.51-1.87-5.05-3.12.47-5.46l-2.72-.79L215.87,352l-.67-.66,9.76-9.1-9.25.43-.4-.65,9.94-5c-6.51-3.37-14.79-2.05-26.83,3.54a67.67,67.67,0,0,1,5.24-5.71,45.8,45.8,0,0,1,6.48-4.65c2.37-1.46,4.9-2.67,7.39-4-3.75-5-6.94-6.27-14.36-5.52,6.33-5.46,13.18-4.82,21.1-3.09l-15.42-18,.24-.54,15,9.46c-2.81-6.6-5-11.74-7.19-16.9l13.88,10.07c-2.11-8.06-5.94-11.83-12.94-14.05l.43-1.2c3.05,1.14,7.08,1.42,9,3.57,12.49,14,29.67,17.72,46.58,22.22a31.83,31.83,0,0,1,9.21,3.84l-40.76-9.42c10.26,14.3,24.37,21,42,21-6.82,1.77-13.33.87-19.63-1.61-3.55-1.39-6.92-3.26-10.47-4.69-9-3.63-18.09-7.13-27.15-10.69l-1.2,2.17c3.71,2.51,7.12,5.83,11.2,7.36,8.23,3.06,16.83,5.14,25.27,7.66a28.7,28.7,0,0,1,5.94,2.41c-17.11-3.19-34.1-2.68-51.08.38,11.59,2.88,23.11,6,35.39,3.15l-8-2.15.11-1,19,1.16.17,1.36-33.57,11.26.07.81,24.81,2.06-26.55,9.7ZM224.49,300c3.5,8,7.91,10.62,14.16,8.19Zm-7.87,18.71c4.93,6.29,7.75,6.91,16,3.56Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M368.53,364.2l-1.39-1c2.3-2,5-3.45,7.45-.81,8.15,8.8,16.08,17.81,12.48,31.45l1.53.36c.79-2,2.63-4.34,2.21-6.09a180.17,180.17,0,0,0-6.8-23.36c-2.85-7.36-8.6-12.42-17.67-15.43,12.4-.5,20.6,5.83,29.44,10.58a34.65,34.65,0,0,0-19.93-14l.53-1.74,22.77,5.07c-4.34-8.81-14.68-7.8-22.43-11.05l.93-1.62,16.06-1.12.31-1.59-14-5.51,20.49-4-.45-2.68-27,3.87,33.35-14.67c-11.27-3.8-21.22.47-31.68,3.71l19.49-14.4-.58-1.32-22.33,5.82,8.85-7.84C374,295.78,346,312,341,318.08l-.6-2.79-6.3,1.12-.22-.7c6.72-3.16,13.46-6.28,20.16-9.49,13.18-6.32,25.12-14.34,35.11-25.17,3.25-3.52,6.5-7.7,11.23-6.95l-13,13c7.16,1.09,10.14-3.66,13.42-8l1.33.72-6.71,15.59,17.46-9.72.58.76L395.2,303l7.27-.89-4.23,4.52c9.61,1.21,19.23-.89,26.93,4.41L403,313l0,1.67,5,2-3.75,1.49,1,1.95L421,317.24l.34,1.07L400.47,326l7.31,1.55L403,331.21l.27,1.24,14.8-1.88.34,1.16c-3,.84-5.94,1.89-9,2.48s-6.46.79-11,1.31l6.84,5.67L399,342.94c6.17,7.12,11,15,21.06,16.68l-.52,1.53-11.21-2.39,2.39,2.55-6.87-1.21c2.42,4.78,4.93,6.19,13.15,8-9,2.68-16.1-3.74-25.56-6,2.3,4.31,4.09,7.64,6.11,11.41l-8.38-5.75c3.92,10.26,7.61,19.83.36,29.07-3.61,4.61-8.45,7.31-15.35,7.59,3-2.67,5.51-4.67,7.73-7,4.46-4.63,6-10.25,3-16a97.61,97.61,0,0,0-10.22-15.28c-1.11-1.39-4.14-1.24-6.29-1.8ZM381.87,297l1.37,2,9.14-6.55-1.19-1.7Zm8.73,31.28c6,3.87,7.56,3.75,9.68,0Zm7.19,13.29.75-2.59-8.65-2.26-.58,1.92Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M343.7,326.31c4,1.54,8.15,2.7,11.88,4.69,5.64,3,10.9,6.77,16.48,9.92,2.33,1.32,5.07,1.9,7.27,2.69-6.9,3.66-11.73,3.39-26.75,1.56-13.17-1.6-26.51-1.74-40.09-1.71,4.68,5.32,6.92,12.53,15,14.06a35.42,35.42,0,0,1,12,4.73c2,1.26,4.13,4.7,3.76,6.71s-3.55,4.37-5.9,4.94c-4.91,1.18-10.09,1.27-15.39,1.84,10.8,14.85,28.55,22,39.18,36.53l-1,1.29c-2.15-1.52-4.28-3.05-6.44-4.55-5.31-3.7-10.29-8.07-16-10.9-8.28-4.09-13.54-.24-12.66,9a79.48,79.48,0,0,0,3.56,17c4.29,13.11,9,26.11,13.77,39.05,2.5,6.76,2.55,13-1.71,19.5-1-6.47-1.56-12.56-3-18.43-2-8.16-6-14.82-15.56-16.09-1-.13-1.67-2.09-2.49-3.2l1.15-1.29,13.81,8.69c-1.66-4.33-3.19-8.18-4.63-12.06-4.28-11.56-8.69-23.1-8.73-35.7,0-8.6,1.93-12.23,8.63-14.79l-21.57-17.74.71-1.77a44.65,44.65,0,0,1,4.9,1c8.46,2.6,16.18.92,24-3.42-4-5-9.38-5.07-14.25-6.47a13.11,13.11,0,0,1-5-3.18c-4.9-4.67-9.43-9.76-14.54-14.18-2.22-1.91-3.09-3.23-1.39-5.67l10.39,1.2c-3.4-9.81-.29-14.57,10.93-17.14-2-4.74-7.73-8.8-3-15.6,3.43,12.16,12.38,16.88,22.91,19.69Zm-14.15,13.17,35.56,2.16.47-2.29c-8.26-2.7-16.51-5.46-24.82-8a4.38,4.38,0,0,0-3.5.75C334.7,334.23,332.4,336.69,329.55,339.48Zm-9.14-1.26c3.3-1.41,6.15-2.08,8.25-3.72,1.75-1.35,2.61-3.84,3.86-5.82-2.34-.75-4.66-2-7-2.11-2.2-.14-4.92.26-6.6,1.51-1.85,1.38-3.71,4-3.75,6.08C315.11,335.46,318.47,336.82,320.41,338.22Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M271.56,335.18c5.21-1.06,10.46-1.95,15.62-3.23,5.65-1.4,10-4.42,10.84-9.82-8.13-1-16.15-1.94-24.11-3.19-1.33-.2-2.43-1.88-3-2.37,8.82.21,17.84.53,26.87.58a18.72,18.72,0,0,0,6.29-1.47c7.16-2.63,8.77-5.58,7.92-14.35,4.11,3.72,3.54,8,1.09,11.79a46.27,46.27,0,0,1-7.87,9c-3.25,3-6.2,5.79-6.52,10.58-.11,1.7-1.28,3.33-2,5.17,5.91,6.34,7.15,13.64,7.62,22.53s-4.51,13.65-7.43,20.08c-1.69,3.74-4.14,7.13-6.37,10.88,12.34-.08,17,3.9,16,16.19-1.18,14.21-4.11,28.27-6.29,42.39-.25,1.64-.56,3.26-.88,5.11l16.23-11.34,1.57,1.72c-1.11,1-2.09,2.6-3.35,2.86-5.9,1.2-10.39,4.42-12.19,10-2.49,7.67-4,15.65-5.87,22.93-2.61-2.71-3.7-7.33-2.6-13.11,3-15.69,6.28-31.33,8.74-47.09a49.16,49.16,0,0,0-.46-18.26c-2.1-9.12-9.37-10.88-16-4.37-4.51,4.42-8.47,9.41-12.67,14.14a13.35,13.35,0,0,1-4.06,3.47c8.49-16.66,23.7-28.84,31.65-47.64-11.29,8-21.85,14-35.5,9.7.86-2.56,1.63-4.87,2.45-7.33-3.84-1.81-3.38-4.26-.34-7.51l1.73,2.91c4.32-3.55,8.51-7.81,13.46-10.84,5.68-3.47,11.52-1,17,1.94,1.6-8.63-1.41-15-7.89-17.23l4.23-7.32L267,342.2l.25,1.73,11.58,4.49.51-3.34c5.18,2.82,11.18-1.77,16.44.36l-.1,2.69-11.81,1.52.4,3.48c-8.11-.69-15.78-8-24.82-1.91l5.41-11.8Q268.21,337.29,271.56,335.18Zm-.31,39.46c11.89,1.87,22.79-4,25.45-13.54-4.22-3.55-8.85-5-14.11-2.27A20.25,20.25,0,0,0,271.25,374.64Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill="red"
                d="M369.35,365.34l4.28,1.49c-5.34,13.15-6.73,26.06-1.85,39.63-8.26-2.83-4.63-12.64-11.85-16.58.61,5,1.14,9.48,1.65,13.82-3.1-.51-3.87-1.49-4.81-6.69-.56-3.11-1.06-6.24-1.59-9.37l-1.37.21v6.22l-1.36.43-3.11-8.34-3.15,3.34-1.25-.28c.24-2.27,0-4.72.78-6.8a22.7,22.7,0,0,0-19.11-30.34c-2.2-.23-4.26-1.83-6.38-2.8l.49-2.32c7.71,0,15.42-.14,23.12.13,1.42.05,2.79,1.76,4.19,2.7l-.83,1.64-9.74-1.09L351,360.47l-1.59,2,1-6,1.35-.27c3.87,4.8-.48,11.92,4.4,17.59V359.1l2.14-.25,4,20.7,1.17,0,6.06-14.38Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M321.32,281.37l-4.11,1.93c1.79-8.26-5.7-12.9-17.12-9.83l2.82,1.34-4.08,1.9,9.14,1.14-4.46,3.31-7.77-.62-.38-5.48-9.76,12.18.45,1.13c4.42-1.46,9.49-3.24,12.5.8,2,2.73,1.88,7.1,2.64,10.46-9.48,1.61-6.9,12-14.18,14.64,3.46-5.59,6.77-11.29,10.46-16.74,1.89-2.78,1.71-6.18-1.45-7.3-2.47-.88-5.28-.79-8.52-1.2l1,5.9a8,8,0,0,1-1.36-12.79c1.08-1,2.47-1.78,3.14-3,3.85-6.94,10.3-8.66,17.4-8.39,6.75.25,11.42,4,14,10.26Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M343.86,326.48l-5.66-4.22,11.74-.91c.31,1,.31,2.38,1,2.82,3.94,2.67,9.29,1.18,14.68-4.06-.36,4-1.89,7-5.75,7.09-5.37.14-10.76-.56-16.14-.89Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M271.56,335.18q-3.35,2.11-6.68,4.24c-8.94,3.32-17.88,6.59-27.7,4.2,9,1.05,16.34-3.71,24.25-6.61C264.6,335.85,268.17,335.76,271.56,335.18Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                d="M321.73,281q4,12.51,8.11,25l-2.24.73c-.73-2.42-1.59-4.8-2.16-7.25-.61-2.66-.95-5.38-2.17-8.17l-1.61,6.82-.34-.07V281.37Z"
                transform="translate(-198.42 -270.73)"
                style={{ fill: "red" }}
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M302.21,287.78c2.58-.95,5.85-4.34,8.83,1.64,1,2,4.54,2.75,6.92,4.07l-.11,1.45c-1.85.26-4.23,1.38-5.47.63C308.74,293.36,305.55,290.42,302.21,287.78Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M269.66,318.48c-5.28,4.81-6.86-1.58-10-2.82C262.89,316.51,267.38,312.51,269.66,318.48Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M360.36,329.06l12.11-.7-4.23,3.58.75,1.64L360.26,331Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                d="M348.13,318.2c3.08-6.23,9-8,15.05-9.46Q355.67,313.48,348.13,318.2Z"
                transform="translate(-198.42 -270.73)"
                style={{ fill: " red" }}
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M373.16,320.2l18.11-6.3.47,1.29-17.83,6.56Z"
                transform="translate(-198.42 -270.73)"
              />
              <path
                d="M320.85,440.05l-3.2,3.64-4-2.85,3.22-4.09Z"
                transform="translate(-198.42 -270.73)"
                style={{ fill: "red" }}
              />
              <rect
                fill={isSticky ? "#1d192c" : "white"}
                x="330.55"
                y="376.01"
                width="4.96"
                height="4.96"
                transform="translate(196.97 -392.52) rotate(48.45)"
              />
              <rect
                fill={isSticky ? "#1d192c" : "white"}
                x="337.47"
                y="376.46"
                width="4.96"
                height="4.96"
                transform="translate(199.65 -397.55) rotate(48.45)"
              />
              <rect
                fill={isSticky ? "#1d192c" : "white"}
                x="350.14"
                y="350.15"
                width="4.16"
                height="4.16"
                transform="translate(183.79 -415.72) rotate(48.45)"
              />
              <rect
                fill={isSticky ? "#1d192c" : "white"}
                x="301.06"
                y="329.55"
                width="4.16"
                height="4.16"
                transform="translate(151.84 -385.93) rotate(48.45)"
              />
              <rect
                fill={isSticky ? "#1d192c" : "white"}
                x="357.22"
                y="350.46"
                width="4.16"
                height="4.16"
                transform="translate(186.4 -420.92) rotate(48.45)"
              />
              <rect
                fill={isSticky ? "#1d192c" : "white"}
                x="363.9"
                y="352.88"
                width="4.16"
                height="4.16"
                transform="translate(190.46 -425.1) rotate(48.45)"
              />
              <path
                fill={isSticky ? "#1d192c" : "white"}
                d="M255.59,315.13c5,.64,5.4,3.62,5.4,3.62v1.5"
                transform="translate(-198.42 -270.73)"
              />
            </svg>
          </div>
        </div>
        <ul className="flex gap-10 font-swap  sm:hidden  list-none z-30 relative">
          <Link href="#me">
            <li className="hover:text-red-500 transition-colors cursor-pointer  ">
              {t("header.whoAmI")}
            </li>
          </Link>
          <Link href="#skills">
            <li className="hover:text-red-500 transition-colors cursor-pointer  ">
              {t("header.skills")}
            </li>
          </Link>
          <Link href="#projects">
            <li className="hover:text-red-500 transition-colors cursor-pointer  ">
              {t("header.projects")}
            </li>
          </Link>
          <Link href="#footer">
            <li className="hover:text-red-500 transition-colors cursor-pointer  ">
              {t("header.talk")}
            </li>
          </Link>
        </ul>

        <button
          type="button"
          style={{ display: "none" }}
          className=" sm:!block text-3xl"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
        >
          <RiMenu5Fill />
        </button>

        <div
          id="drawer-example"
          ref={drawer}
          className={` ${
            i18n.language == "fa"
              ? "right-0 translate-x-full"
              : "left-0 -translate-x-full"
          } fixed z-[999] top-0 border-r bg-[url(/Images/projectBg.jpg)]  h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800`}
          tabIndex={-1}
          aria-labelledby="drawer-label"
        >
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
            <h3 className="font-bold text-white dark:text-white font-swap relative bottom-2">
              {t("header.menuTitle")}
            </h3>
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center h-8 relative bottom-2 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              data-drawer-hide="drawer-example"
              aria-controls="drawer-example"
            >
              <span className="sr-only">Close offcanvas</span>
              <svg
                className="w-3.5 h-3.5 text-white"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="px-2 py-10">
            <ul
              className="flex flex-col gap-10 font-swap     list-none z-30 relative"
              data-drawer-hide="drawer-example"
              aria-controls="drawer-example"
            >
              <Link href="#me">
                <li className="hover:text-red-500 transition-colors cursor-pointer text-white ">
                  {" "}
                  {t("header.whoAmI")}
                </li>
              </Link>
              <a
                data-drawer-hide="drawer-example"
                aria-controls="drawer-example"
                href="#skills"
              >
                <li className="hover:text-red-500 transition-colors cursor-pointer  text-white ">
                  {t("header.skills")}{" "}
                </li>
              </a>
              <Link
                data-drawer-hide="drawer-example"
                aria-controls="drawer-example"
                href="#projects"
              >
                <li className="hover:text-red-500 transition-colors cursor-pointer  text-white ">
                  {t("header.projects")}
                </li>
              </Link>
              <Link
                data-drawer-hide="drawer-example"
                aria-controls="drawer-example"
                href="#footer"
              >
                <li className="hover:text-red-500 transition-colors cursor-pointer  text-white ">
                  {t("header.talk")}
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex absolute w-full bottom-4 justify-between px-4 border-t-2 border-solid border-black pt-4 left-0">
            <p className="text-white  text-[14px]">{t("header.menuFooter")}</p>
          </div>
        </div>
      </header>
    </div>
  );
}
