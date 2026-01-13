export function Text() {
  return (
    <div className="relative z-10 mt-6 mb-4 flex w-full flex-col items-center justify-center select-none">
      <div className="border-border text-border relative h-8 w-full overflow-hidden border-t opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)",
            opacity: "0.15;",
          }}
        ></div>
      </div>

      <div className="relative inline-block cursor-help py-4">
        <span className="text-inner-shadow text-center text-9xl font-bold whitespace-nowrap text-black/10 italic transition-colors duration-300 hover:text-black dark:text-white/5 dark:hover:text-white">
          改善
        </span>
      </div>

      <div className="border-border text-border relative h-8 w-full overflow-hidden border-b opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)",
          }}
        ></div>
      </div>
    </div>
  );
}
