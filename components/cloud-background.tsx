"use client";

import Image from "next/image";

export function CloudBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden dark:hidden">
      {/* Top Left Cluster */}
      <div className="absolute top-[-10%] left-[-15%] w-[800px] h-[600px] opacity-60">
        <div className="relative w-full h-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
          <Image
            src="/clouds/bigCloud.png"
            alt=""
            width={700}
            height={500}
            className="absolute top-[20%] left-[20%] w-[80%] h-auto opacity-80"
          />
        </div>
      </div>

      <div className="absolute top-[-20%] right-[-15%] w-[700px] h-[700px] opacity-60">
        <div className="relative w-full h-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            className="object-contain rotate-180"
            priority
          />
          <Image
            src="/clouds/bigCloud.png"
            alt=""
            width={700}
            height={500}
            className="absolute top-[20%] left-[20%] w-[80%] h-auto opacity-80 rotate-180"
          />
        </div>
      </div>

      {/* Bottom Right Cluster */}
      <div className="absolute bottom-[-20%] right-[-5%] w-[650px] h-[650px] opacity-50 rotate-[5deg]">
        <div className="relative w-full h-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            className="object-contain rotate-180"
          />
          <Image
            src="/clouds/bigCloud.png"
            alt=""
            width={800}
            height={600}
            className="absolute bottom-[20%] right-[10%] w-[90%] h-auto"
          />
        </div>
      </div>

      {/* Bottom Left Cluster */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[500px] opacity-40">
        <div className="relative w-full h-full">
          <Image
            src="/clouds/elipse.svg"
            alt=""
            fill
            className="object-contain"
          />
          <Image
            src="/clouds/cloud.png"
            alt=""
            width={500}
            height={400}
            className="absolute bottom-[10%] left-[10%] w-[70%] h-auto opacity-60"
          />
        </div>
      </div>
    </div>
  );
}
