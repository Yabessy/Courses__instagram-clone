import Image from "next/image"
import { MagnifyingGlassIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <div className="shadow-sm sticky top-0 border-b bg-white z-10 w-screen">
      <div className="flex items-center justify-between px-2 lg:px-10 mx-0 sm:mx-4 xl:mx-auto">
        {/* left */}
        <div className="cursor-pointer w-32 h-20 relative hidden lg:inline-grid">
          <Image
            alt="Instagram Logo"
            layout="fill"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png`}
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer my-5 mx-3 w-6 h-6 relative lg:hidden">
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
            className="bg-gray-50 pl-10 w-44 sm:w-72 md:w-96 lg:w-[30rem] border-gray-500 text-sm focus:border-black rounded"
          />
        </div>
        {/* Right */}
        <div className="flex flex-row space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 w-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out" />
          <PlusIcon className="hidden md:inline-flex h-6 w-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out" />
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991280.png&w=350&h=254"
            alt="User Photo"
            className="h-10 w-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  )
}
