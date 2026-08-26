"use client";

import Image from "next/image";

import Container from "./container";

import { CloudShader } from "./ui/cloud-shader";

interface BannerSectionProps {
  quote?: string;
  bannerImage?: string;
}

export function Banner({
  quote = "I am gonna be hokage one day.",

  bannerImage = "/naruto.png",
}: BannerSectionProps) {
  return (
    <Container className="py-0">
      <div className="relative mb-2 h-[200px] w-full mask-t-from-95% mask-x-from-90% mask-b-from-75% sm:h-[270px]">
        <Image
          alt="Banner"
          src={bannerImage}
          fill
          priority
          className="z-10 object-cover"
        />

        <CloudShader className="absolute inset-0 min-h-0" />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <p className="text-center font-serif text-base text-white italic sm:text-xl">
            {quote}
          </p>
        </div>
      </div>
    </Container>
  );
}
