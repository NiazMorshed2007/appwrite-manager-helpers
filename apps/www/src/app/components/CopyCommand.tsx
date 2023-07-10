"use client";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const CopyCommand = () => {
  const [isCopied, setIsCopied] = useState(false);
  const commandString = "pnpx appwrite-manager init";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(commandString);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="p-2 shadow-3xl border border-pink-400/30 px-4 flex items-center justify-center text-gray-400 rounded-md bg-black">
      <span className="text-gray-500 mr-2">$</span> pnpx appwrite-manager init
      {isCopied ? (
        <CheckIcon className="w-4 h-4 ml-7 text-green-500" />
      ) : (
        <CopyIcon
          onClick={handleCopyClick}
          className="w-4 h-4 ml-7 text-pink-700 cursor-pointer hover:text-pink-500 transition-all"
        />
      )}
    </div>
  );
};

export default CopyCommand;
