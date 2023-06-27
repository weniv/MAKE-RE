import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'

export default function GithubApi() {
  const endpoint = `https://api.github.com/graphql`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  })

  const query = gql`
    {
      repository(name: "material-ui", owner: "mui-org") {
        issue1: issue(number: 2) {
          title
          createdAt
        }
      }
    }
  `
  const getApi = async () => {
    const data = await graphQLClient.request(query)
    console.log(data)
  }

  return (
    <div
      onClick={() => {
        getApi()
      }}
    >
      githubApi
    </div>
  )
}
