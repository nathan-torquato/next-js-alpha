import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        heeey
      </main>
      <Link href="/ninjas">
        See Ninja Listing
      </Link>
      <Footer />
    </div>
  )
}
