import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between p-3 bg-green-500 text-black-100">
        <h1 className="text-4xl">Cookide Stand Admin</h1>
        {/* <p className="text-xl">{ answeredQuestions.length } Question Answered</p> */}
      </header>
    </div>
  )
}
