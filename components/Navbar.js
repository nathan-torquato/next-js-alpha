import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">Ninja List</h1>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/ninjas">
        Ninja Listing
      </Link>
    </nav>
  )
}

export default Navbar
