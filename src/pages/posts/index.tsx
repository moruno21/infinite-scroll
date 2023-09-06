import Spinner from '~/components/Spinner'
import usePosts from '~/hooks/usePosts'

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
  const { loading, posts } = usePosts()

  return (
    <Container>
      <PageTitle>Infinite Scroll</PageTitle>
      <Content>
        <Header>
          <Title>100 Most rated posts</Title>
          <Description>Check them all by scrolling down!</Description>
        </Header>
        {loading ? (
          <Spinner />
        ) : (
          <Posts>
            {posts.map(({ id, title }) => (
              <Post key={id} id={id} title={title} />
            ))}
          </Posts>
        )}
      </Content>
    </Container>
  )
}

export default PostsList
