import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()
  const timeToGoToHomePage = 3000;

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, timeToGoToHomePage);
  }, [])

  return (
    <section className="not-found">
      <h1>Oops...</h1>
      <h2>Nothing going on here :(</h2>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </section>
  )
}

export default NotFound
