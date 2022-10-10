import { useLoaderData } from '@remix-run/react'
import { getMultipleSwitch } from '~/models/switch.get'
import Navigation from '~/components/navigation.component'
import SearchBar from '~/components/search-bar.component'
import SwitchCard from '~/components/switch-card.component'

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
            <SearchBar />
          </section>
          <div className="grid grid-cols-4 gap-6">
            <SwitchCard switchData={switches} />
          </div>
        </div>
      </section>
    </div>
  )
}
