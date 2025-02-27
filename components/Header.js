"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-black w-full h-[75px] flex items-center fixed top-0 z-50">
      <nav className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-6 lg:px-8">
        {/* Logo - with hover animation */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Link href="/">
            <Image
              src="/assets/icons/Logo.svg"
              alt="Logo"
              width={240}
              height={40}
              className="object-contain w-[180px] md:w-[240px]"
              priority
            />
          </Link>
        </motion.div>

        {/* Sign in button - with hover color transition */}
        <Link href="/" className="relative block group">
          <Image
            src="/assets/icons/Box.svg"
            alt="SignIn"
            width={150}
            height={53}
            className="object-contain w-[120px] md:w-[150px]"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm md:text-base transition-colors duration-300 group-hover:text-purple-400">
            Sign in
          </span>
        </Link>
      </nav>
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/assets/images/HeroEdge.png"
          alt="Hero Edge"
          width={1440}
          height={9}
          className="w-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
