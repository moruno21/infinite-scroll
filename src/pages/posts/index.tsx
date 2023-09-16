import Spinner from '~/components/Spinner'

import useLayout from './hooks'
import Post from './Post'
import {
  Container,
  Content,
  Description,
  Header,
  List,
  PageTitle,
  Title,
} from './styles'

const Layout = () => {
  const { loading, posts, thresholdElementRef } = useLayout()

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
          <List>
            {posts.map(({ id, title }, index) => (
              <Post
                id={id}
                key={id}
                ref={
                  index === posts.length - 1 ? thresholdElementRef : undefined
                }
                title={title}
              />
            ))}
          </List>
        )}
      </Content>
    </Container>
  )
}

export default Layout
