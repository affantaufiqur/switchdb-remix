import { gql } from 'graphql-request'
import { makeGraphqlQuery } from '~/utils/graphql.utils'

const getIndividualSwitchQuery = gql`
  query getSwitchItem($switchName: String!) {
    switch(where: { switchName: $switchName }) {
      switchName
      switchType
      switchImage {
        url
      }
      topHousing
      totalTravel
      updatedAt
      switchMount
      stem
      brand {
        brandName
      }
      actuationForce
      actuationTravel
      bottomHousing
      bottomOutForce
      lube
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
      switchImage {
        url
      }
    }
  }
`

export const getIndividualSwitch = async (switchName) => {
  const data = await makeGraphqlQuery(getIndividualSwitchQuery, { switchName })
  return data
}

export const getMultipleSwitch = async () => {
  const data = await makeGraphqlQuery(getMultipleSwitchQuery)
  return data
}
