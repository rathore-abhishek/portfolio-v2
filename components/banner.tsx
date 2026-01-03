"use client";

import Image from "next/image";

interface BannerSectionProps {
  quote?: string;
  bannerImage?: string;
}

export function Banner({
  quote = "I am gonna be hokage one day.",
  bannerImage = "/naruto.jpg",
}: BannerSectionProps) {
  return (
    <div className="w-full mb-2 relative mask-x-from-90% mask-radial-from-75% mask-b-from-95%">
      <div className="relative" style={{ height: "auto" }}>
        <Image
          alt="Banner"
          width={1240}
          height={900}
          className="rounded-none w-full h-[200px] sm:h-[270px] object-cover"
          src={bannerImage}
          style={{ color: "transparent", minHeight: "100px" }}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-white text-base sm:text-xl italic font-serif text-center">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}
