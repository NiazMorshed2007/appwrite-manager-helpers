"use client";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  const [stars, setStars] = React.useState(0);

  React.useEffect(() => {
    fetch("https://api.github.com/repos/NiazMorshed2007/appwrite-manager")
      .then((res) => res.json())
      .then((res) => {
        setStars(res.stargazers_count);
      });
  }, []);
  return (
    <header className="fixed z-50 top-0 w-full flex items-center justify-between py-6 px-[4%]">
      <img className="w-[50px] h-[50px]" src="/logo.svg" />
      <nav className="flex items-center gap-7">
        <Link href="/docs">Docs</Link>
        <Link
          target="_blank"
          className="flex text-sm p-2 px-3 items-center gap-2 bg-gray-800 rounded-full"
          href="https://github.com/NiazMorshed2007/appwrite-manager"
        >
          <GitHubLogoIcon className="w-5 h-5" />
          {stars} Stars
        </Link>
        <Link target="_blank" href="https://twitter.com/niazmorshed_">
          <TwitterLogoIcon className="w-5 h-5" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
