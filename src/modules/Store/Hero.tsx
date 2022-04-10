import React from "react";
import Banner from "components/Banner/Normal";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 mb-10">
        <span className="header-one">Choose Store</span>
        <span className="text-[15px] text-gray-950">
          Your One-Stop-Shop for All Things Solana ...
        </span>
      </div>
      <div className="relative">
        <Banner imageUrl="/images/placeholder/store/hero.png" vr />
      </div>
      <div className="flex flex-col gap-4 px-10 mt-10">
        <span className="header-one">Money Boy Verse</span>
        <span className="text-[15px] text-gray-950">
          Dynamically embrace multimedia based schemas and resource maximizing
          synergy. Objectively grow value-added markets and just in time
          methodologies. Collaboratively generate client-centered growth
          strategies without business best practices. Interactively enhance
          interdependent vortals with visionary technology. Compellingly
          cultivate extensive value after real-time partnerships.
        </span>
      </div>
    </div>
  );
};

export default Hero;
