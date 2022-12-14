import { GraphQLClient } from 'graphql-request'

export const makeGraphqlQuery = async (queryName, variable = null) => {
  const graphql = new GraphQLClient(process.env.HYGRAPH_URL)
  const data = await graphql.request(queryName, variable)
  return data
}
