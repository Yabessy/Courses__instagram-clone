import React from "react"
import FeedPost from "./FeedPosts"
import FeedStories from "./FeedStories"

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Stories */}
        <FeedStories />
        {/* Post */}
        <FeedPost />
      </section>
      <section className="md:col-span-1">
        {/* Mini Profile */}
        {/* Sugesstion */}
      </section>
    </main>
  )
}
