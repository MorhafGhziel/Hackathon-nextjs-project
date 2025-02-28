"use client";

import Image from "next/image";

const StatsSection = () => {
  return (
    <section className="w-full bg-[#1a1528] py-8 md:py-16 text-white overflow-hidden relative">
      {/* Lightning Image - Absolute positioned relative to section */}
      <div className="absolute left-0 top-10 opacity-80 w-48 h-48 hidden lg:block">
        <Image
          src="/assets/images/Lightning.png"
          alt="Lightning"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Stats Column */}
          <div className="space-y-8 md:space-y-12">
            {/* 150+ Universities */}
            <div className="pl-4 md:pl-12">
              <h2 className="text-5xl md:text-7xl font-bold tracking-wider text-white drop-shadow-lg">
                150<span className="text-4xl md:text-6xl">+</span>
              </h2>
              <p className="text-xl md:text-2xl tracking-wider mt-2">
                Universities participating
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 pl-4 md:pl-12">
              {/* 72+ Judges */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-white drop-shadow-lg">
                  72<span className="text-3xl sm:text-4xl md:text-5xl">+</span>
                </h2>
                <p className="text-lg md:text-xl tracking-wider mt-2">Judges</p>
              </div>

              {/* 21 Hackathons */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-white drop-shadow-lg">
                  21
                </h2>
                <p className="text-lg md:text-xl tracking-wider mt-2">
                  Hackathons
                </p>
              </div>

              {/* 36+ Great Speakers */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-white drop-shadow-lg">
                  36<span className="text-3xl sm:text-4xl md:text-5xl">+</span>
                </h2>
                <p className="text-lg md:text-xl tracking-wider mt-2">
                  Great Speakers
                </p>
              </div>
            </div>
          </div>

          {/* Video Column */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl mt-4 lg:mt-0">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="HackIndia 2024 Finals Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
