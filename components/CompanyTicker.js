"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companies } from "@/constants";

const CompanyTicker = () => {
  // Calculate total width for animation
  const totalWidth = companies.length * 200 + companies.length * 96; // logo width + gap

  return (
    <div className="bg-white w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[95px] flex items-center justify-center">
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex items-center gap-16 md:gap-24"
          animate={{
            x: [0, -totalWidth],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* Four sets of companies for smoother loop */}
          {[1, 2, 3, 4].map((setNum) =>
            companies.map((company, i) => (
              <div
                key={`company-${setNum}-${i}`}
                className="shrink-0 h-[50px] sm:h-[70px] md:h-[90px] lg:h-[100px] flex items-center justify-center"
              >
                <Image
                  src={company}
                  alt={`Company Logo ${i + 1}`}
                  width={980}
                  height={100}
                  className="object-contain w-auto h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px]"
                  priority={setNum === 1 && i === 0}
                />
              </div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyTicker;
