"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between h-[57px] items-center bg-white px-4 absolute top-0 w-full z-10">
      <Image src="/Icons/FunnelSimple.svg" width="24" height="24" alt="" />
      <Image
        className="cursor-pointer"
        src="/oom-logo.png"
        width="132"
        height="32"
        alt=""
        onClick={() => {
          router.push("/");
        }}
      />
      <Image src="/Icons/ShoppingBag.svg" width="24" height="24" alt="" />
    </header>
  );
}
