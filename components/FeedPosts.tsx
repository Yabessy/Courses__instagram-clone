import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline"

export default function FeedPosts() {
  const posts = [
    {
      id: 1,
      userName: "johndoe",
      userImg: "https://i.pravatar.cc/150?img=14",
      img: "https://img.freepik.com/free-psd/social-media-instagram-post-template_47618-73.jpg",
      caption: "This is a caption"
    },
    {
      id: 2,
      userName: "ninggen",
      userImg: "https://i.pravatar.cc/150?img=19",
      img: "https://phantom-marca.unidadeditorial.es/36b733ae69cb4607319886fbce9a14d0/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/31/16672255275951.jpg",
      caption: "This is a caption to but too much much than the first one"
    }
  ]
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="w-full bg-white my-7 shadow">
          {/* PostHeader */}
          <div className="flex items-center border-b-2 p-3">
            <img
              src={post.userImg}
              className="w-10  border-2 p-[1.5px]  rounded-full aspect-square object-cover"
            />
            <h1 className="text-lg ml-4">{post.userName}</h1>
            <EllipsisHorizontalIcon className="h-5 ml-auto pr-1" />
          </div>
          {/* PostImage */}
          <img src={post.img} alt="" className="w-full aspect-square object-cover" />
          {/* PostButtons */}
          <div className="flex justify-between p-4">
            <div className="flex space-x-1">
              <HeartIcon className="btn" />
              <ChatBubbleLeftIcon className="btn" />
            </div>
            <BookmarkIcon className="btn" />
          </div>
          {/* PostComment */}
          <p className="px-5 py-2 truncate">
            <span className="font-medium mr-1">{post.userName}</span>
            {post.caption}
          </p>
          {/* PostInputBox */}
          <form action="" className="flex relative items-center">
            <FaceSmileIcon className="btn absolute left-2"/>
            <input type="text" placeholder="Enter your comment" name="" id="" className="pl-10 pr-12 border-none focus:ring-0 w-full"/>
            <button className="absolute right-2 text-blue-500">post</button>
          </form>
        </div>
      ))}
    </div>
  )
}
