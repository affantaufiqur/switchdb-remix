import { useLoaderData } from '@remix-run/react'
import { getMultipleSwitch } from '~/models/switch.get'
import Navigation from '~/components/navigation.component'

export const loader = async () => {
  const { switches } = await getMultipleSwitch()
  return { switches }
}

export default function Index() {
  const { switches } = useLoaderData()

  return (
    <div className="xl:px-80 text-white-50">
      <Navigation />
      <section className="py-24">
        <div>
          <section className="my-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-white-50 border rounded-md outline-none bg-cod-gray-900 focus:bg-white focus:border-indigo-300"
              />
            </div>
          </section>
          <div className="grid grid-cols-4 gap-6">
            {switches.map(({ id, switchImage, switchName, switchType }) => {
              return (
                <div
                  className="flex flex-col p-4 border-2 border-cod-gray-800 hover:shadow-lg transition-all duration-250 hover:scale-105"
                  key={id}
                >
                  <img
                    src={switchImage[0]?.url}
                    alt={switchName}
                  />
                  <div className="flex flex-col mt-4">
                    <h1 className="text-white-50">{switchName}</h1>
                    <p className="text-cod-gray-300">{switchType}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
