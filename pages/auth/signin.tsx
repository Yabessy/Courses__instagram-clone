import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"

export default function signin({ providers }: any) {
  console.log(providers)
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
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://ict.unnes.ac.id/wp-content/uploads/sites/10/2019/01/instagram.png"
                alt=""
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purpose only
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign In {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}
