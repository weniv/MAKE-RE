import React, { useEffect, useRef, useState } from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import styles from './api.module.css'
import axios from 'axios'

export default function GithubApi({ setResumeData, resumeData }) {
  const [queryString, setQueryString] = useState(window.location.search)
  const [userName, setUserName] = useState('')
  const [token, setToken] = useState({
    access_token: '',
    sexpires_in: '',
    refresh_token: '',
    refresh_token_expires_in: '',
  })
  const endpoint = `https://api.github.com/graphql`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token.access_token}`,
    },
  })

  const query = gql`
    {
      user(login: "${userName}") {
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
                languages(first: 6) {
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

  useEffect(() => {
    authReq()
  }, [queryString])

  useEffect(() => {
    if (token.access_token) {
      getUserInfo()
    }
  }, [token.access_token])

  useEffect(() => {
    if (token.access_token) {
      getApi()
    }
  }, [userName])

  /** 불러온 사용자 정보로 resumeData를 수정 - 현재는 테스트로 사진만 변경하도록 구현 */
  const handleUpdate = (profileImg) => {
    setResumeData((current) => {
      let newResumeData = { ...current }
      newResumeData['profileImg'] = profileImg
      return newResumeData
    })
  }

  /** 로그인한 사용자 정보로 api 통신하여 pinned repo, language 등 정보 가져옴 */
  const getApi = async () => {
    const data = await graphQLClient.request(query)
    handleUpdate(data.user.avatarUrl)
  }

  /** accesss_token을 이용해 사용자 정보 가져옴 */
  const getUserInfo = async () => {
    const url = `https://api.github.com/user`

    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: `token ${token.access_token}`,
        },
      })
      setUserName(result.data.login)
    } catch (err) {
      console.log(err)
    }
  }

  /** oauth 인증을 위해 redirect */
  const redirectAuth = () => {
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=Iv1.1353321326fecccd'
  }

  /** access_token 발급을 위한 code */
  const authReq = async () => {
    const code = queryString.replace('?code=', '')
    getUserToken(code)
  }

  /** code를 이용하여 token 발급 */
  const getUserToken = async (code) => {
    const url = `/access_token`
    const codeData = code
    const headers = {
      accept: 'application/json',
    }
    const data = {
      client_id: process.env.REACT_APP_clientID,
      client_secret: process.env.REACT_APP_clientSecret,
      code: codeData,
    }

    try {
      const result = await axios.post(url, data, headers)

      result.data.split('&').map((el) =>
        setToken((current) => {
          let newToken = { ...current }
          newToken[el.split('=')[0]] = el.split('=')[1]
          return newToken
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!queryString) {
      redirectAuth()
    } else {
      console.log('이미 인증됨')
    }
  }

  return (
    <div className={styles.cont}>
      <form onSubmit={handleSubmit}>
        <button type="submit">깃허브 정보 불러오기(테스트)</button>
      </form>
    </div>
  )
}
