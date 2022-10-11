import { Link } from '@remix-run/react'

export default function Navigation() {
  return (
    <div className="xl:px-80 text-white-50">
      <section className="flex justify-between items-center min-w-screen py-5">
        <div>
          <Link
            to="/"
            className="text-2xl"
          >
            SwitchDb
          </Link>
        </div>
      </section>
    </div>
  )
}
