import { gql } from '@apollo/client'

import POST_FRAGMENT from '~/graphql/fragments/post'

const POSTS = gql`
  ${POST_FRAGMENT}
  query Posts {
    posts {
      data {
        ...Post
      }
    }
  }
`

export default POSTS
