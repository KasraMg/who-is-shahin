"use client";
import React, { useState, useEffect, useRef } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/index";
import i18next from "i18next";
import Link from "next/link";
import { IoLanguageOutline } from "react-icons/io5";
import Logo from "@/app/assets/svg/logo";

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
        } bg-full bg-[top] bg-fullSize bg-[#1d192c] xs:px-3 text-white items-center flex justify-between flex-row-reverse py-4 px-10    `}
      >
        <div className="flex z-[999] xxs:mx-3 gap-5">
          <p
            className="cursor-pointer flex gap-1 items-center"
            onClick={() => setLanguage(i18next.language == "en" ? "fa" : "en")}
          >
            {i18next.language == "fa" ? "En" : "Fa"}
            <IoLanguageOutline />
          </p>

          <div className={`${isSticky && " !w-[48px]"} relative w-[64px]`}>
            <Logo isSticky={isSticky} />
          </div>
        </div>
        <ul className="flex gap-10 font-swap  sm:hidden  list-none z-30 relative">
          <li className="hover:text-red-500 transition-colors cursor-pointer">
            <Link href="#me">{t("header.whoAmI")}</Link>
          </li>
          <li className="hover:text-red-500 transition-colors cursor-pointer">
            <Link href="#skills">{t("header.skills")}</Link>
          </li>
          <li className="hover:text-red-500 transition-colors cursor-pointer">
            <Link href="#projects">{t("header.projects")}</Link>
          </li>
          <li className="hover:text-red-500 transition-colors cursor-pointer">
            <Link href="#footer">{t("header.talk")}</Link>
          </li>
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
          {...{ inert: true }}
          id="drawer-example"
          ref={drawer}
          className={` ${
            i18n.language == "fa"
              ? "right-0 translate-x-full"
              : "left-0 -translate-x-full"
          } fixed z-[999] top-0 border-r bg-[url(/Images/projectBg.jpg)] h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800`}
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
              <span className="sr-only">Close</span>
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
              className="flex flex-col gap-[40px] font-swap list-none z-30 relative"
              data-drawer-hide="drawer-example"
              aria-controls="drawer-example"
            >
              <li className="hover:text-red-500 transition-colors cursor-pointer text-white ">
                <Link href="#me"> {t("header.whoAmI")}</Link>
              </li>
              <li className="hover:text-red-500 transition-colors cursor-pointer text-white">
                <Link
                  data-drawer-hide="drawer-example"
                  aria-controls="drawer-example"
                  href="#skills"
                >
                  {t("header.skills")}{" "}
                </Link>
              </li>
              <li className="hover:text-red-500 transition-colors cursor-pointer text-white">
                <Link
                  data-drawer-hide="drawer-example"
                  aria-controls="drawer-example"
                  href="#projects"
                >
                  {t("header.projects")}
                </Link>
              </li>
              <li className="hover:text-red-500 transition-colors cursor-pointer text-white">
                <Link
                  data-drawer-hide="drawer-example"
                  aria-controls="drawer-example"
                  href="#footer"
                >
                  {t("header.talk")}
                </Link>
              </li>
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
