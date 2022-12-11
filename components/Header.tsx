import Image from "next/image"
import React from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* left */}
      <div className="cursor-pointer w-24 h-24 relative hidden lg:inline-grid">
        <Image
          alt="Instagram Logo"
          layout="fill"
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png`}
          className="object-contain"
        />
      </div>
      <div className="cursor-pointer w-10 h-24 relative lg:hidden">
        <Image
          alt=""
          layout="fill"
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png`}
          className="object-contain"
        />
      </div>
      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:border-black rounded"
        />
      </div>
      {/* Right */}
      <div>
        <div></div>
      </div>
    </div>
  )
}
