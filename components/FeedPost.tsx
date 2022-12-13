import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc
} from "firebase/firestore"
import { useEffect, useState } from "react"
import Moment from "react-moment"
import { useRecoilState } from "recoil"
import { userState } from "../atom/userAtom"
import { db } from "../firebase"

export default function FeedPost({ id, profileImg, username, image, caption }: any) {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [liked, setLiked] = useState(false)
  const [currentUser] = useRecoilState(userState)
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")),
      (snapshot: any) => {
        setComments(snapshot.docs)
      }
    )
  }, [db, id])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts", id, "likes"), (snapshot: any) =>
      setLikes(snapshot.docs)
    )
  }, [db])
  useEffect(() => {
    setLiked(
      // @ts-ignore
      likes.findIndex((like) => like.id === currentUser.uid) !== -1
    )
  }, [likes])

  async function likePost() {
    if (liked) {
      // @ts-ignore
      await deleteDoc(doc(db, "posts", id, "likes", currentUser.uid))
    } else {
      // @ts-ignore
      await setDoc(doc(db, "posts", id, "likes", currentUser.uid), {
        // @ts-ignore
        username: currentUser.username
      })
      setLiked(true)
    }
  }
  async function sendComment(e: any) {
    e.preventDefault()
    const commentToSend = comment
    setComment("")
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      // @ts-ignore
      username: currentUser.username,
      // @ts-ignore
      profileImg: currentUser.userImg,
      timestamp: serverTimestamp()
    })
  }
  return (
    // @ts-ignore
    <div className="w-full bg-white my-7 shadow">
      {/* PostHeader */}
      <div className="flex items-center border-b-2 p-3">
        <img
          // @ts-ignore
          src={profileImg}
          className="w-10  border-2 p-[1.5px]  rounded-full aspect-square object-cover"
        />
        {/* @ts-ignore */}
        <h1 className="text-lg ml-4">{username}</h1>
        <EllipsisHorizontalIcon className="h-5 ml-auto pr-1" />
      </div>

      {/* PostImage */}
      {/* @ts-ignore */}
      <img src={image} alt="" className="w-full aspect-square object-cover" />

      {/* PostButtons */}
      {currentUser && (
        <div className="flex justify-between p-4">
          <div className="flex space-x-1">
            {liked ? (
              <HeartIconFilled onClick={likePost} className="btn text-red-400" />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
            <ChatBubbleLeftIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* PostComment */}
      <div className="p-5 py-2 truncate">
        {likes.length > 0 && <p className="font-bold mb-1 text-black">{likes.length} likes</p>}   
        {/* @ts-ignore */}
        <span className="font-medium mr-1">{username}</span>
        {/* @ts-ignore */}
        {caption}
      </div>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 scrollbar-thin overflow-y-scroll">
          {comments.map((comment: any) => (
            <div key={comment.id} className="flex items-center space-x-2 p-3">
              <img
                // @ts-ignore
                src={comment.data().profileImg}
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="font-medium">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/* PostInputBox */}
      {currentUser && (
        <form action="" className="flex relative items-center">
          <FaceSmileIcon className="btn absolute left-2" />
          <input
            type="text"
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="pl-10 pr-12 border-none focus:ring-0 w-full"
          />
          <button
            disabled={!comment.trim()}
            type="submit"
            // @ts-ignore
            onClick={sendComment}
            className="disabled:text-gray-200 absolute right-2 text-blue-500"
          >
            post
          </button>
        </form>
      )}
    </div>
  )
}
