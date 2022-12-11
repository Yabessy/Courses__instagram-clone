import { useState, useEffect } from "react"
import minifaker from "minifaker"
import "minifaker/locales/en"

export default function FeedSuggestions() {
  const [suggestions, setSuggestions] = useState([])
  console.log(suggestions)
  useEffect(() => {
    const suggestions = minifaker.array(5, (i: any) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      job: minifaker.jobTitle({ locale: "en" }),
      id: i
    }))
    // @ts-ignore
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10 ">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((user: any) => (
        <div key={user.id} className="flex items-center justify-between mt-3">
          <img
            src={user.img}
            alt={user.username}
            className="h-10 w-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{user.username}</h2>
            <h3 className="text-sm text-gray-400">{user.job}</h3>
          </div>
          <button className="text-blue-400 text-sm font-semibold">Follow</button>
        </div>
      ))}
    </div>
  )
}
