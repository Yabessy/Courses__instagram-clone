import React from "react"
import FeedPost from "./FeedPosts"
import FeedStories from "./FeedStories"

export default function Feed() {
  return (
    <main>
      <section>
        {/* Stories */}
        <FeedStories />
        {/* Post */}
        <FeedPost />
      </section>
      <section>
        {/* Mini Profile */}
        {/* Sugesstion */}
      </section>
    </main>
  )
}
