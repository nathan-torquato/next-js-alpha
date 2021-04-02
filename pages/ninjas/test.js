import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function NestedNinja() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NestedNinja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        A nested Ninja
      </main>
    </div>
  )
}
