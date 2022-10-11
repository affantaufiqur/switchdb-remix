import { useLoaderData } from '@remix-run/react'
import { getMultipleSwitch } from '~/models/switch.get'
import SwitchCard from '~/components/switch-card.component'
import SearchBar from '~/components/search-bar.component'

export const loader = async () => {
  const { switches } = await getMultipleSwitch()
  return { switches }
}

export default function Index() {
  const { switches } = useLoaderData()

  return (
    <div className="xl:px-80 text-white-50">
      <section className="py-24">
        <div className="my-4">
          <SearchBar />
        </div>
        <section className="grid grid-cols-4 gap-4">
          <SwitchCard switchData={switches} />
        </section>
      </section>
    </div>
  )
}
