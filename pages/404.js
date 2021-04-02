import Link from 'next/link'

const NotFound = () => {
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
