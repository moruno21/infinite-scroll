import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import POSTS from '~/graphql/queries/posts'
import { PostsQuery } from '~/graphql/types'
import Post from '~/models/post'

const usePosts = () => {
  const { data, loading } = useQuery<PostsQuery>(POSTS)

  const posts = useMemo(
    () => (data ? data.posts?.data?.map(Post.fromDto) ?? [] : []),
    [data],
  )

  return { loading, posts }
}

export default usePosts
