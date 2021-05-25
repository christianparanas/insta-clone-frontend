import Head from 'next/head'


// components
import Nav from '../components/home/Nav';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Insta Power Pop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home_container">
        <Nav />

      </div>
    </div>
  )
}
