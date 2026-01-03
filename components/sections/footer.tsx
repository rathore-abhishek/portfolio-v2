import React from "react";

const Footer = () => {
  return (
    <section className="px-8 flex justify-between items-center">
      <p className="text-sm text-black/40 dark:text-white/40">
        © 2026 All rights reserved.
      </p>
      <p className="text-sm text-black/40 dark:text-white/40 font-medium">
        You are the{" "}
        <span className="text-black dark:text-white">
          1<sup className="text-[0.65em]">st</sup>
        </span>
        visitor
      </p>
    </section>
  );
};

export default Footer;
