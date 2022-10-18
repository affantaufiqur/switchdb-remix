import { useLoaderData } from '@remix-run/react'
import { getMultipleSwitch } from '~/models/switch.get'
import SwitchCard from '~/components/switch-card.component'
import SearchBar from '~/components/search-bar.component'
import { useEffect, useState } from 'react'

export const loader = async ({ request }) => {
  const { switches } = await getMultipleSwitch()
  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  return { switches, query }
}

export default function Index() {
  const { switches, query } = useLoaderData()
  const [filteredData, setFilteredData] = useState(switches)

  useEffect(() => {
    if (query) {
      const getSwitchbyName = switches.filter((item) => item.switchName.toLowerCase().includes(query))
      return setFilteredData(getSwitchbyName)
    }
    return setFilteredData(switches)
  }, [switches, query])

  return (
    <div className="xl:px-80 text-white-50">
      <section className="py-24">
        <div className="my-4">
          <SearchBar />
        </div>
        <section className="grid grid-cols-4 gap-4">
          {filteredData.length === 0 ? (
            <h1 className="mt-2 text-2xl">No switches found</h1>
          ) : (
            <SwitchCard switchData={filteredData} />
          )}
        </section>
      </section>
    </div>
  )
}
