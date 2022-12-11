import React from "react"
import minifaker from "minifaker"
import "minifaker/locales/en"

export default function FeedStories() {
  const [stories, setStories] = React.useState([])
  React.useEffect(() => {
    const stories = minifaker.array(20, (i: any) => ({
      username: minifaker.username({ locale: "en" }).toLocaleLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i
    }))
    // @ts-ignore
    setStories(stories)
  }, [])

  return (
    <div className="flex">
      {stories.map((user:any) => (
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
