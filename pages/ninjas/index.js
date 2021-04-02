import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Ninjas() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninjas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>All Ninjas</h1>
      </main>
    </div>
  )
}
