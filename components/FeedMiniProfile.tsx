import { useSession, signOut } from "next-auth/react"

export default function FeedMiniProfile() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        //   @ts-ignore
        src={session?.user.image}
        alt="User Photo"
        className="h-16 w-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        {/* @ts-ignore */}
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome</h3>
      </div>
      <button onClick={() => signOut()} className="font-semibold text-blue-400 text-sm">
        signOut
      </button>
    </div>
  )
}
