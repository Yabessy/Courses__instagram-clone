import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { db, app } from "../../firebase"
import Header from "../../components/Header"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { useRouter } from "next/router"

export default function signin() {
  const router = useRouter()
  async function onGoogleClick() {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (!docSnap.exists()) {
          await setDoc(docRef, {
            name: user.displayName,
            email: user.email,
            userImg: user.photoURL,
            uid: user.uid,
            timestamp: serverTimestamp(),
            username: user.displayName?.split(" ").join("").toLocaleLowerCase()
          })
        }
        router.push("/")
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          src="https://img.techarea.co.id/ig_mgm_1.webp"
          alt=""
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
        />
        <div className="">
          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover"
              src="https://ict.unnes.ac.id/wp-content/uploads/sites/10/2019/01/instagram.png"
              alt=""
            />
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purpose only
            </p>
            <button
              onClick={onGoogleClick}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
              Sign In Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
