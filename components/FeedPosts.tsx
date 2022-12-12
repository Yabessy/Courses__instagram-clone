import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import { useSession } from "next-auth/react"

export default function FeedPosts() {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot: any) => {
        setPosts(snapshot.docs)
      }
    )
    return unsubscribe
  }, [db])
  return (
    <div>
      {posts.map((post) => (
        // @ts-ignore
        <div key={post.data().image} className="w-full bg-white my-7 shadow">
          {/* PostHeader */}
          <div className="flex items-center border-b-2 p-3">
            <img
              // @ts-ignore
              src={post.data().profileImg}
              className="w-10  border-2 p-[1.5px]  rounded-full aspect-square object-cover"
            />
            {/* @ts-ignore */}
            <h1 className="text-lg ml-4">{post.data().username}</h1>
            <EllipsisHorizontalIcon className="h-5 ml-auto pr-1" />
          </div>

          {/* PostImage */}
          {/* @ts-ignore */}
          <img src={post.data().image} alt="" className="w-full aspect-square object-cover" />

          {/* PostButtons */}
          {session && (
            <div className="flex justify-between p-4">
              <div className="flex space-x-1">
                <HeartIcon className="btn" />
                <ChatBubbleLeftIcon className="btn" />
              </div>
              <BookmarkIcon className="btn" />
            </div>
          )}

          {/* PostComment */}
          <p className="px-5 py-2 truncate">
            {/* @ts-ignore */}
            <span className="font-medium mr-1">{post.data().username}</span>
            {/* @ts-ignore */}
            {post.data().caption}
          </p>

          {/* PostInputBox */}
          {session && (
            <form action="" className="flex relative items-center">
              <FaceSmileIcon className="btn absolute left-2" />
              <input
                type="text"
                placeholder="Enter your comment"
                name=""
                id=""
                className="pl-10 pr-12 border-none focus:ring-0 w-full"
              />
              <button className="absolute right-2 text-blue-500">post</button>
            </form>
          )}
        </div>
      ))}
    </div>
  )
}
