import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { ProjectType } from "@/types/Index.types";
import i18n from "@/i18n/index";
import Link from "next/link";
import Image from "next/image";

const Card = (props: ProjectType) => {
  return (
    <>
      <main
        className={` ${
          i18n.language == "fa"
            ? "text-right sm:pr-16 xs:!pr-5 pr-24 lg:pr-16"
            : "text-left xs:!pl-5 pl-24 lg:pl-16"
        }  sm:px-5 xs:h-[350px] `}
      >
        <span className="text-red-600 text-2xl font-swap">
          {i18n.language == "fa" ? props.type_fa : props.type_en}
        </span>
        <p className="text-3xl mt-4 text-white font-swap font-bold ">
          {props.name_en}
        </p>
        <p className="text-justify sm:w-[100%] mt-3 text-[20px] font-swap w-96  text-[#ababab]">
          {i18n.language == "fa" ? props.description_fa : props.description_en}
        </p>
        <div
          className={` w-[366px] xs:!w-full flex-wrap flex gap-2 xs:flex-wrap sm:xs:justify-center xs:mt-10 !mt-4 xs:text-[13px] text-white`}
        >
          <span className="mt-[2px] xs:hidden">
            {i18n.language == "fa" ? "تکنولوژی ها :" : "Technologies :"}
          </span>
          <div className="flex overflow-x-scroll items-baseline gap-3 pb-3 tags">
            {props.tag.map((tag) => (
              <p
                key={crypto.randomUUID()}
                className="bg-red-200 text-black w-max rounded-sm px-2 py-1 whitespace-nowrap"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className={`${i18n.language == "fa" ? 'pl-3' : 'pr-7'} flex xs:w-full xs:justify-center xs:absolute xs:bottom-0 xxs:!-bottom-[2.25rem] items-center mt-5`}>
          <p className="text-white font-swap text-2xl">
            {" "}
            {i18n.language == "fa" ? "بریم ببینیم" : "View Live"}
          </p>
          <Link
            className={`${i18n.language == "fa" && "mr-2"}`}
            href={props.href}
          >
            <button className="bg-red-600 text-2xl relative top-1 rounded-full ml-3 xs:!p-2 xs:text-base p-4 text-white">
              <HiArrowLongRight />
            </button>
          </Link>
        </div>
      </main>
      <section
        className={`${
          i18n.language == "fa" ? " sm:pl-0 pl-24" : " sm:pr-0 pr-24"
        } lg:w-[600px] sm:!w-full`}
      >
        <Image
          loading="eager"
          priority={true}
          width={1000}
          height={1000}
          className={`${
            i18n.language == "fa"
              ? " md:mr-16  sm:ml-auto  ml-16"
              : " md:ml-16  sm:mr-auto  mr-6"
          } h-auto w-[700px] sm:!mx-auto sm:block sm:!w-[80%] xs:!mx-auto   rounded-md relative z-50`}
          src={props.image}
          alt=""
        />
      </section>
    </>
  );
};

export default Card;
