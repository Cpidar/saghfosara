import gql from 'graphql-tag'

export default function (ctx) {
  return {
    httpEndpoint: "http://localhost/api/graphql",
    typeDefs: gql`
    type Home {
      id: ID!,
      category: String!,
      PropertyType: String!,
      title: String!,
      description: String!,
      price: Float!,
      pics: [String],
      status: String!,
      address: String!,
      phone: Int!
    }
    `,
    resolvers: {
      Mutation: {
        connectedSet: (root, { value }, { cache }) => {
          const data = Object.assign(root, value)
          cache.writeData({ data })
        }
      }
    },
    onCacheInit: cache => {
      const data = {
        connected: false
      }
      cache.writeData({ data })
    }
  }
}
