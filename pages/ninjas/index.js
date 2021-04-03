import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const ninjas = await res.json()

  return {
    props: {
      ninjas,
    }
  }
}

export default function Ninjas({ ninjas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas"/>
      </Head>

      <main>
        <h1 className={styles.title}>All Ninjas</h1>
        { ninjas.map(ninja => (
          <div key={ninja.id} className={styles.ninja}>
            <a>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        )) }
      </main>
    </div>
  )
}
