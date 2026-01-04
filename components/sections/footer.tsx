const Footer = () => {
  return (
    <section className="px-8 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm text-black/40 dark:text-white/40">
        © 2026 All rights reserved.
      </p>
      <p className="text-sm text-black/40 dark:text-white/40 font-medium">
        Designed{" "}
        <span className="font-serif text-black dark:text-white italic text-lg">
          &
        </span>{" "}
        Developed by{" "}
        <span className="text-black dark:text-white font-semibold">
          Abhishek
        </span>
      </p>
      {/* <p className="text-sm text-black/40 dark:text-white/40 font-medium">
        You are the{" "}
        <span className="text-black dark:text-white">
          1<sup className="text-[0.65em]">st</sup>
        </span>
        visitor
      </p> */}
    </section>
  );
};

export default Footer;
