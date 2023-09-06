import { useQuery } from '@apollo/client'

import POSTS from '~/graphql/queries/posts'
import { PostsQuery } from '~/graphql/types'

import Post from './Post'
import {
  Container,
  Content,
  Description,
  Header,
  PageTitle,
  Posts,
  Title,
} from './styles'

const PostsList = () => {
  const { data } = useQuery<PostsQuery>(POSTS)

  return (
    <Container>
      <PageTitle>Infinite Scroll</PageTitle>
      <Content>
        <Header>
          <Title>100 Most rated posts</Title>
          <Description>Check them all by scrolling down!</Description>
        </Header>
        <Posts>
          {data?.posts?.data?.map(({ id, title }) => (
            <Post key={id} id={id ?? ''} title={title ?? ''} />
          ))}
        </Posts>
      </Content>
    </Container>
  )
}

export default PostsList
