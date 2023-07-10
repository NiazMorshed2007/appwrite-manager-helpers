import Link from "next/link";
import CopyCommand from "./components/CopyCommand";

export default function Home() {
  return (
    <main className="flex min-h-screen relative gap-3 flex-col items-center justify-center p-24">
      <div className="shape1 -z-10"></div>
      <h1 className="text-[43px] font-semibold text-center leading-tight capitalize">
        Create admin panels for <br /> your Appwrite projects faster!
      </h1>
      <p className="w-8/12 text-center text-gray-400 font-normal">
        Appwrite Manager is a headless CMS designed to create admin panels
        quickly and efficiently, utilizing the power of Appwrite. It is
        Customizable 🎨, Configurable 📐 & has Sleek Design🔥
      </p>
      <div className="flex mt-6 items-center gap-4">
        <CopyCommand />
        <button className="p-3 text-xs px-5 bg-pink-800 rounded-md">
          View Demo
        </button>
      </div>
      <div className="absolute text-sm bottom-4 text-gray-400 left-1/2 -translate-x-1/2">
        Created by{" "}
        <Link
          className="underline"
          target="_blank"
          href={"https://niazmorshed.me"}
        >
          Niaz Morshed
        </Link>{" "}
        | Inspired by{" "}
        <Link
          className="underline"
          target="_blank"
          href={"https://github.com/Meldiron"}
        >
          Matej Bačo
        </Link>
      </div>
    </main>
  );
}
