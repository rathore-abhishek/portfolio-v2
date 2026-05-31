"use client";

import Share from "@/components/icons/share";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  url: string;
}

const ShareButton = ({ title, url }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button variant="outline" size="icon" className="group" onClick={handleShare}>
      {copied ? (
        <span className="text-xs text-green-600 dark:text-green-400">✓</span>
      ) : (
        <Share className="size-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
      )}
    </Button>
  );
};

export default ShareButton;
