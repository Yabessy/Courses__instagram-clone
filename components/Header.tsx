import Image from "next/image"
import React from "react"

export default function Header() {
  return (
    <div>
    {/* left */}
      <div className="flex items-center justify-between max-w-6xl">
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
        <p>Right</p>
      </div>

      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}
