import { Link } from '@remix-run/react'

export default function SwitchCard({ switchData }) {
  return (
    <>
      {switchData.map((switchItem) => {
        const { id, switchImage, switchName, switchType } = switchItem
        return (
          <Link
            to={switchName.replace(/\s+/g, '-')}
            className="flex flex-col p-4 border-2 border-cod-gray-800 hover:shadow-cod-gray-800 hover:shadow-2xl transition-all duration-250"
            key={id}
            prefetch="intent"
          >
            <img
              src={switchImage[0]?.url}
              alt={switchName}
            />
            <div className="flex flex-col mt-4">
              <h1 className="text-white-50">{switchName}</h1>
              <p className="text-cod-gray-300">{switchType}</p>
            </div>
          </Link>
        )
      })}
    </>
  )
}
