"use client";

import { animate } from "motion/react";
import { TransitionRouter } from "next-transition-router";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const PAGE_SELECTOR = "[data-page-transition]";
const BLUR = "4px";
const LEAVE_OPACITY = 0.35;
const LEAVE_SCALE = 1.008;
const ENTER_SCALE = 0.997;
const LEAVE_DURATION = 0.12;
const ENTER_DURATION = 0.3;
const LEAVE_EASE: [number, number, number, number] = [0.4, 0, 1, 1];
const ENTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getPage = () => document.querySelector<HTMLElement>(PAGE_SELECTOR);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const prefetched = useRef(new Set<string>());

  useEffect(() => {
    const prefetch = (event: Event) => {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.hasAttribute("data-transition-ignore")
      ) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const href = `${url.pathname}${url.search}`;
      if (prefetched.current.has(href)) return;

      prefetched.current.add(href);
      router.prefetch(href);
    };

    document.addEventListener("pointerover", prefetch, { passive: true });
    document.addEventListener("focusin", prefetch);

    return () => {
      document.removeEventListener("pointerover", prefetch);
      document.removeEventListener("focusin", prefetch);
    };
  }, [router]);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        if (prefersReducedMotion()) {
          next();
          return;
        }

        const page = getPage();

        if (!page) {
          next();
          return;
        }

        page.style.transformOrigin = "50% 0%";
        page.style.willChange = "opacity, filter, transform";

        const animation = animate(
          page,
          {
            opacity: [1, LEAVE_OPACITY],
            filter: ["blur(0px)", `blur(${BLUR})`],
            scale: [1, LEAVE_SCALE],
          },
          {
            duration: LEAVE_DURATION,
            ease: LEAVE_EASE,
          },
        );

        animation.finished.then(next).catch(() => {});
        return () => animation.stop();
      }}
      enter={(next) => {
        if (prefersReducedMotion()) {
          next();
          return;
        }

        const page = getPage();

        if (!page) {
          next();
          return;
        }

        page.style.transformOrigin = "50% 0%";
        page.style.willChange = "opacity, filter, transform";
        page.style.opacity = `${LEAVE_OPACITY}`;
        page.style.filter = `blur(${BLUR})`;
        page.style.transform = `scale(${ENTER_SCALE})`;

        const animation = animate(
          page,
          { opacity: 1, filter: "blur(0px)", scale: 1 },
          {
            duration: ENTER_DURATION,
            ease: ENTER_EASE,
          },
        );

        animation.finished
          .then(() => {
            page.style.opacity = "";
            page.style.filter = "";
            page.style.transform = "";
            page.style.transformOrigin = "";
            page.style.willChange = "";

            next();
          })
          .catch(() => {});

        return () => animation.stop();
      }}
    >
      {children}
    </TransitionRouter>
  );
}
