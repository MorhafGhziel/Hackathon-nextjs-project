"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const MobileMenu = ({ items, activeNav, setActiveNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative z-50">
      {/* Menu Button */}
      <motion.button
        className="p-2 hover:opacity-80"
        onClick={toggleMenu}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={`/assets/icons/List${isOpen ? "Up" : "Down"}.svg`}
          alt="Menu"
          width={24}
          height={24}
          className="w-6 h-6 invert"
        />
      </motion.button>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute right-0 top-full mt-2 min-w-[200px] bg-[#28083A] border border-[#D9D9D9]/15 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="py-3 px-4 flex flex-col gap-3">
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href="#"
                    className={`text-sm font-medium transition-colors duration-300 block ${
                      activeNav === item
                        ? "text-[#B026FF]"
                        : "text-white hover:text-[#B026FF]"
                    }`}
                    onClick={() => {
                      setActiveNav(item);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
