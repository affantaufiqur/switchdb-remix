import { useLoaderData } from '@remix-run/react'
import { getIndividualSwitch } from '~/models/switch.get'
import Navigation from '~/components/navigation.component'

export const loader = async () => {
  const { switch: switchItem } = await getIndividualSwitch()
  return { switchItem }
}

export default function Index() {
  const { switchItem } = useLoaderData()

  return (
    <div className="xl:px-80">
      <Navigation />
      <div className="pt-48">
        <p className="font-ubuntu">{switchItem?.switchName}</p>
      </div>
    </div>
  )
}
