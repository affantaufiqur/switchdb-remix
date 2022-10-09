import { GraphQLClient } from 'graphql-request'

export const makeGraphqlQuery = async (queryName) => {
  const graphql = new GraphQLClient(process.env.HYGRAPH_URL)
  const data = await graphql.request(queryName)
  return data
}
