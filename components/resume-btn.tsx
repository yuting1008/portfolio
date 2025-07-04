"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Yu-Ting-Chen-Resume.pdf";
    link.download = "Yu-Ting-Chen-Resume.pdf";
    link.click();
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      className="cursor-pointer"
      onClick={handleDownload}
    >
      <Download /> Resume
    </Button>
  );
}
