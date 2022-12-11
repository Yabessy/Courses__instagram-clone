import React from "react"

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
      userImg: "https://i.pravatar.cc/150?img=14",
      img: "https://phantom-marca.unidadeditorial.es/36b733ae69cb4607319886fbce9a14d0/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/31/16672255275951.jpg",
      caption: "This is a caption to hehe"
    }
  ]
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="p-5 ">
          <h1>{post.userName}</h1>
          <div className="flex items-center w-96 aspect-square">
            <img src={post.img} className="w-96 aspect-square" />
          </div>
        </div>
      ))}
    </div>
  )
}
