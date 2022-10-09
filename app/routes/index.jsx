import { useLoaderData } from '@remix-run/react'
import { getIndividualSwitch, getMultipleSwitch } from '~/models/switch.get'

export const loader = async () => {
  const { switch: switchItem } = await getIndividualSwitch()
  const { switches } = await getMultipleSwitch()
  return { switchItem, switches }
}

export default function Index() {
  const { switchItem, switches } = useLoaderData()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            {switchItem?.switchName}, {switchItem?.switchType}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            {switches?.map((switchItem) => {
              return (
                <div key={switchItem.id}>
                  <h1>{switchItem.switchName}</h1>
                </div>
              )
            })}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}
