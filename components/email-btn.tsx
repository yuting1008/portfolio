import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";

export function EmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "chenyuting1008@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 顯示提示 2 秒後還原
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      className="cursor-pointer"
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <Check /> Email
        </>
      ) : (
        <>
          <Mail /> Email
        </>
      )}
    </Button>
  );
}
