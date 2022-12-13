import { getAuth, signOut } from "firebase/auth"
import { useRecoilState } from "recoil"
import { userState } from "../atom/userAtom"

export default function FeedMiniProfile() {
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const auth = getAuth()
  async function onSignOut() {
    setCurrentUser(null)
    await signOut(auth)
  }
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        //   @ts-ignore
        src={currentUser?.userImg}
        alt="User Photo"
        className="h-16 w-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        {/* @ts-ignore */}
        <h2 className="font-bold">{currentUser?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome</h3>
      </div>
      <button
        onClick={() => onSignOut()}
        className="font-semibold text-blue-400 text-sm">
        signOut
      </button>
    </div>
  )
}
