import FeedStories from "./FeedStories"
import FeedPost from "./FeedPosts"
import FeedMiniProfile from "./FeedMiniProfile"
import FeedSuggestions from "./FeedSuggestions"
import { useRecoilState } from "recoil"
import { userState } from "../atom/userAtom"

export default function Feed() {
  const [currentUser] = useRecoilState(userState)

  return (
    <main
      className={`grid ${
        currentUser
          ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
          : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"
      }`}>
      <section className="md:col-span-2">
        {/* Stories */}
        <FeedStories />
        {/* Post */}
        <FeedPost />
      </section>
      {currentUser && (
        <section className="hidden md:grid md:col-span-1">
          <div className="fixed w-[380px]">
            {/* Mini Profile */}
            <FeedMiniProfile />
            {/* Suggestions */}
            <FeedSuggestions />
          </div>
        </section>
      )}
    </main>
  )
}
