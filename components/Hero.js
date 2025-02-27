"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItems } from "@/constants";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <main className="min-h-screen text-white bg-gradient-to-b from-black to-[#230833]">
      <header className="p-4 md:p-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Image
            src="/assets/icons/HackIndia.svg"
            alt="HackIndia Logo"
            width={183}
            height={38}
            className="w-[140px] md:w-[183px]"
          />

          <div className="lg:hidden">
            <MobileMenu
              items={NavItems}
              activeNav={activeNav}
              setActiveNav={setActiveNav}
            />
          </div>

          <div className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-lg border border-[#D9D9D9]/15 bg-[#28083A]">
            {NavItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="relative group hover:cursor-pointer"
                onClick={() => setActiveNav(item)}
              >
                <div className="relative z-0">
                  <Image
                    src="/assets/icons/Box.svg"
                    alt="Button Box"
                    width={150}
                    height={53}
                    className="w-[120px] lg:w-[150px] object-contain"
                  />
                </div>
                <span
                  className={`absolute inset-0 z-10 flex items-center justify-center font-medium transition-colors duration-300 whitespace-nowrap hover:cursor-pointer ${
                    activeNav === item
                      ? "text-[#B026FF]"
                      : "text-white group-hover:text-[#B026FF]"
                  } ${
                    item === "Prizes & Sponsors"
                      ? "text-[9px] lg:text-[10px] leading-none px-0.5"
                      : "text-[10px] md:text-[11px] lg:text-sm px-1"
                  }`}
                >
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12 text-center">
        <Image
          src="/assets/icons/Singularity.svg"
          alt="SingularityNET"
          width={279}
          height={76}
          className="w-[200px] md:w-[279px] mx-auto brightness-200 contrast-200 mb-8 md:mb-16"
        />

        <div className="mb-8 md:mb-12">
          <Image
            src="/assets/icons/HackIndia2025.svg"
            alt="HackIndia2025"
            width={850}
            height={114}
            className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[850px] mx-auto"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 md:mt-10 font-medium tracking-wide">
            India&apos;s Biggest Web3 & AI Hackathon
          </h2>
        </div>

        <div className="inline-block px-6 md:px-12 py-3 md:py-4 text-lg md:text-xl font-medium tracking-wide border border-[#D9D9D9]/40 rounded-xl bg-gradient-to-r from-[#6A1799] to-[#230833] mb-8 md:mb-16">
          February 28 - September 28
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 mb-8 md:mb-16">
          {[
            ["$150+", "Price Pool"],
            ["150+", "University"],
            ["25,000+", "Students"],
          ].map(([number, label], i) => (
            <div key={label} className="flex items-center">
              {i > 0 && (
                <div className="hidden md:block text-white text-4xl px-6 lg:px-8">
                  |
                </div>
              )}
              <div
                className={`md:${i === 0 ? "pr" : i === 2 ? "pl" : "px"}-6 lg:${
                  i === 0 ? "pr" : i === 2 ? "pl" : "px"
                }-8 flex gap-3 items-center`}
              >
                <span className="text-[#F86720] text-xl md:text-2xl font-bold">
                  {number}
                </span>
                <span className="text-xl md:text-2xl">{label}</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/register"
          className="relative inline-block group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            console.log("Register clicked");
          }}
        >
          <Image
            src="/assets/icons/Box.svg"
            alt="Register Box"
            width={200}
            height={70}
            className="w-[160px] md:w-[200px] object-contain"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-lg md:text-xl transition-colors duration-300 group-hover:text-[#B026FF]">
            Register now!
          </span>
        </Link>
      </div>

      {/* Decorative gradients */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(81, 19, 173, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </main>
  );
};

export default Hero;
