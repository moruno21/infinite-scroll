import { useQuery } from '@apollo/client'

import POSTS from '~/graphql/queries/posts'

const PostsList = () => {
  const { data } = useQuery(POSTS)

  console.log(data)

  return <></>
}

export default PostsList
