import type { NextPage } from "next"
import Head from "next/head"
import { Header, Feed, UploadModal } from "../components/@index"

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 max-w-screen min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <UploadModal />
    </div>
  )
}

export default Home
