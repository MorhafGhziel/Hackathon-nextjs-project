"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { logos } from "@/constants";

const LogoTicker = () => {
  return (
    <div className="bg-white w-full h-[120px] flex items-center justify-center">
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex items-center"
          animate={{
            x: [-10, -3920],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <div
              key={`logo-1-${i}`}
              className="shrink-0 h-[100px] flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner Logo ${i + 1}`}
                width={980}
                height={100}
                className="object-contain w-auto h-[100px]"
                priority={i === 0}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, i) => (
            <div
              key={`logo-2-${i}`}
              className="shrink-0 h-[100px] flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner Logo ${i + 1}`}
                width={980}
                height={100}
                className="object-contain w-auto h-[100px]"
              />
            </div>
          ))}
          {/* Third set for safety */}
          {logos.map((logo, i) => (
            <div
              key={`logo-3-${i}`}
              className="shrink-0 h-[100px] flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner Logo ${i + 1}`}
                width={980}
                height={100}
                className="object-contain w-auto h-[100px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
