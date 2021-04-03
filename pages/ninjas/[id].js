import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const ninjas = await res.json()
  const paths = ninjas.map(ninja => ({
    params: {
      id: ninja.id.toString()
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const ninja = await res.json()

  return {
    props: {
      ninja,
    }
  }
}

export default function NinjaDetail({ ninja }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja List | { ninja.name }</title>
        <meta name="keywords" content="ninjas"/>
      </Head>

      <main>
        <h1 className={styles.title}>Details</h1>
        <p>{ninja.name}</p>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </main>
    </div>
  )
}
