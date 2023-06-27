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

  // 뭐가져올지 정하기
  const query = gql`
    {
      user(login: "min-bok") {
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                url
                openGraphImageUrl
                description
                languages(first: 10) {
                  edges {
                    node {
                      name
                      color
                    }
                  }
                }
                createdAt
              }
            }
          }
        }
        avatarUrl
        repositories(first: 100) {
          nodes {
            languages(first: 10) {
              nodes {
                name
                color
              }
            }
          }
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
