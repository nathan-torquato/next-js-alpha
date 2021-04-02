import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Ninjas() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninjas</title>
      </Head>

      <main>
        <h1 className={styles.title}>All Ninjas</h1>
      </main>
    </div>
  )
}
