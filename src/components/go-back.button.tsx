"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { PiArrowLeft as BackIcon } from "react-icons/pi";
import { Button } from "./ui/button";

const GoBack: React.FC = () => {
  const router = useRouter();
  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => router.back()}>
      <BackIcon className="w-5 h-5" />
    </Button>
  );
};

export default GoBack;
