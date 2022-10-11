import { useLoaderData } from '@remix-run/react'
import { getIndividualSwitch } from '~/models/switch.get'

export const loader = async ({ params }) => {
  const { switchName } = params
  const nameToSearch = switchName.replace(/-/g, ' ')
  const data = await getIndividualSwitch(nameToSearch)
  return data
}

export default function SwitchItem() {
  const { switch: switchItem } = useLoaderData()
  console.log(switchItem)

  return (
    <div className="xl:px-80 text-white-50">
      <section className="py-24">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-white-50 text-2xl">{switchItem?.switchName}</h1>
            <h3 className="text-white-300 text-lg">{switchItem?.switchType}</h3>
            <div className="mt-4 flex flex-col gap-y-2">
              <h2>bottom out force: {switchItem?.bottomOutForce}</h2>
              <h2>actuation force: {switchItem?.actuationForce}</h2>
              <h2>actuation travel: {switchItem?.actuationTravel}</h2>
              <h2>switch mount: {switchItem?.switchMount}</h2>
              <h2>top housing: {switchItem?.topHousing}</h2>
              <h2>stem: {switchItem?.stem}</h2>
              <h2>bottom housing: {switchItem?.bottomHousing}</h2>
            </div>
          </div>
          <div className="overflow-x-auto flex flex-row w-96 h-auto">
            {switchItem?.switchImage.map((image) => {
              const { url } = image
              return (
                <img
                  src={url}
                  alt={switchItem?.switchName}
                  key={url}
                  className="aspect-square object-contain w-96 h-96"
                />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
