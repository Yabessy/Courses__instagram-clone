import { useState, useEffect } from "react"
import minifaker from "minifaker"
import "minifaker/locales/en"
import { PlusIcon } from "@heroicons/react/24/outline"
import { useRecoilState } from "recoil"
import { userState } from "../atom/userAtom"

export default function FeedStories() {
  const [stories, setStories] = useState([])
  const [currentUser] = useRecoilState(userState)

  useEffect(() => {
    const stories = minifaker.array(20, (i: any) => ({
      username: minifaker.username({ locale: "en" }).toLocaleLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i
    }))
    // @ts-ignore
    setStories(stories)
  }, [])

  return (
    <div className="flex space-x-2 p-3 sm:p-6 w-full bg-white mt-8 border-gray-200 border overflow-x-scroll rounded scrollbar-none">
      {currentUser && (
        <div className="relative group cursor-pointer">
          <img
            //   @ts-ignore
            src={currentUser?.userImg}
            alt="User Photo"
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer group-hover:scale-110 transition-transform duration-200 ease-in-out"
          />
          <PlusIcon className="h-6 w-6 absolute top-4 left-4 text-white opacity-60 group-hover:scale-150 group-hover:opacity-70 group-hover:rotate-90 transition-transform duration-700 ease-in-out" />
          <p className="text-xs w-14 truncate text-center">Your Story</p>
        </div>
      )}
      {stories.map((user: any) => (
        <div key={user.id}>
          <img
            src={user.img}
            alt={user.username}
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          />
          <p className="text-xs w-14 truncate text-center">{user.username}</p>
        </div>
      ))}
    </div>
  )
}
