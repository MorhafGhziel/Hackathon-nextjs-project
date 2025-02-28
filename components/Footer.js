const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#230833] to-black pt-36 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm sm:text-base text-white/80 font-light tracking-wider order-2 sm:order-1">
            Copyright © 2024 DcodeBlock
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 order-1 sm:order-2">
            <a
              href="#"
              className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300"
            >
              Help Center
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a
              href="#"
              className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300"
            >
              Terms and Conditions
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a
              href="#"
              className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300"
            >
              Privacy policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
