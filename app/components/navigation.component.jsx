import { Link } from '@remix-run/react'

export default function Navigation() {
  return (
    <section className="flex justify-between items-center min-w-screen py-5">
      <div>Logo</div>
      <div className="flex gap-x-8">
        <Link to="/switches">Switches</Link>
        <Link to="/brands">Brands</Link>
      </div>
    </section>
  )
}
