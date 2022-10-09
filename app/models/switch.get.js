import { gql } from 'graphql-request'
import { makeGraphqlQuery } from '~/utils/graphql.utils'

const getIndividualSwitchQuery = gql`
  {
    switch(where: { id: "cl4e2eq4192av0c13lm3ee7ko" }) {
      switchName
      switchType
    }
  }
`

const getMultipleSwitchQuery = gql`
  {
    switches {
      id
      switchMount
      switchName
      switchType
    }
  }
`

export const getIndividualSwitch = async () => {
  const data = await makeGraphqlQuery(getIndividualSwitchQuery)
  return data
}

export const getMultipleSwitch = async () => {
  const data = await makeGraphqlQuery(getMultipleSwitchQuery)
  return data
}
