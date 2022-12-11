import FeedStories from "./FeedStories"
import FeedPost from "./FeedPosts"
import FeedMiniProfile from "./FeedMiniProfile"
import FeedSuggestions from "./FeedSuggestions"

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
        <div className="fixed w-[380px]">
          {/* Mini Profile */}
          <FeedMiniProfile />
          {/* Suggestions */}
          <FeedSuggestions />
        </div>
      </section>
    </main>
  )
}
