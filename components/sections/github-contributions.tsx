"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import React, { useState } from "react";

type Contribution = { date: string; count: number };

const GithubContributions: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [contribution, setContribution] = useState<Contribution | null>(null);

  const theme = {
    light: [
      "var(--color-zinc-100)",
      "var(--color-cyan-200)",
      "var(--color-cyan-300)",
      "var(--color-cyan-400)",
      "var(--color-cyan-500)",
    ],
    dark: [
      "var(--color-zinc-800)",
      "var(--color-cyan-200)",
      "var(--color-cyan-300)",
      "var(--color-cyan-400)",
      "var(--color-cyan-500)",
    ],
  };

  function formateContributionDate(dateString: string) {
    const date = new Date(dateString);

    const formattedDate = Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

    return formattedDate;
  }

  return (
    <div className="px-8 font-medium text-black/40 dark:text-white/40">
      <GitHubCalendar
        username={"rathore-abhishek"}
        colorScheme={resolvedTheme as "light" | "dark"}
        fontSize={12}
        blockSize={12}
        year={2026}
        blockRadius={4}
        theme={theme}
        labels={{
          totalCount: contribution
            ? `${contribution.count} contribution${contribution.count && "s"} in ${formateContributionDate(contribution.date)}`
            : "Total {{count}} contributions in {{year}}",
        }}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            onPointerEnter: () => {
              setContribution({ date: activity.date, count: activity.count });
            },
            onPointerLeave: () => {
              setContribution(null);
            },
          })
        }
      />
    </div>
  );
};

export default GithubContributions;
