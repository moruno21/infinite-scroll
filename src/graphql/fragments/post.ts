import { gql } from '@apollo/client'

const POST_FRAGMENT = gql`
  fragment Post on Post {
    id
    title
  }
`

export default POST_FRAGMENT
