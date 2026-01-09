const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-between px-8 sm:flex-row">
      <p className="text-sm text-black/40 dark:text-white/40">
        © 2026 All rights reserved.
      </p>
      <p className="text-sm font-medium text-black/40 dark:text-white/40">
        Designed{" "}
        <span className="font-serif text-lg text-black italic dark:text-white">
          &
        </span>{" "}
        Developed by{" "}
        <span className="font-semibold text-black dark:text-white">
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
