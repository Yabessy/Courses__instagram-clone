export default function FeedMiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991280.png&w=350&h=254"
        alt=""
        className="h-16 w-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">CodeWithYabess</h2>
        <h3 className="text-sm text-gray-400">Welcome</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">signOut</button>
    </div>
  )
}
