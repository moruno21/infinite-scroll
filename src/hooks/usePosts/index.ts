import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'

import POSTS from '~/graphql/queries/posts'
import { PostsQuery, PostsQueryVariables } from '~/graphql/types'
import Post from '~/models/post'

import { MAX_NUMBER_OF_POSTS, POSTS_LIMIT } from './constants'

const usePosts = () => {
  const { data, fetchMore, loading } = useQuery<
    PostsQuery,
    PostsQueryVariables
  >(POSTS, {
    variables: {
      options: { paginate: { limit: POSTS_LIMIT, page: 1 } },
    },
  })

  const posts = useMemo(
    () => (data ? data.posts?.data?.map(Post.fromDto) ?? [] : []),
    [data],
  )

  const fetchMorePosts = useCallback(() => {
    if (posts.length === MAX_NUMBER_OF_POSTS) return

    fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev

        return Object.assign({}, prev, {
          posts: {
            data: [
              ...(prev.posts?.data ?? []),
              ...(fetchMoreResult.posts?.data ?? []),
            ],
          },
        })
      },
      variables: {
        options: { paginate: { page: posts.length / POSTS_LIMIT + 1 } },
      },
    })
  }, [fetchMore, posts])

  return { fetchMorePosts, loading, posts }
}

export default usePosts
