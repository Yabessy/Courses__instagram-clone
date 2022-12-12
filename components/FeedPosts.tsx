import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import FeedPost from "./FeedPost"

export default function FeedPosts() {
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
        <FeedPost
          // @ts-ignore
          key={post.id}
          // @ts-ignore
          id={post.id}
          // @ts-ignore
          profileImg={post.data().profileImg}
          // @ts-ignore
          image={post.data().image}
          // @ts-ignore
          caption={post.data().caption}
          // @ts-ignore
          username={post.data().username}
        />
      ))}
    </div>
  )
}
