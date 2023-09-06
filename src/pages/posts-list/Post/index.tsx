import { Container, Id, Title } from './styles'
import { PostProps } from './types'

const Post = ({ id, title }: PostProps) => (
  <Container>
    <Id>{id}</Id>
    <Title>{title}</Title>
  </Container>
)
export default Post
