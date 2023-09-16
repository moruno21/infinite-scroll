import { forwardRef, memo } from 'react'

import { Container, Id, Title } from './styles'
import { PostProps } from './types'

const Post = forwardRef<HTMLDivElement, PostProps>(
  ({ id, title, ...props }, ref) => (
    <Container ref={ref} {...props}>
      <Id>{id}</Id>
      <Title>{title}</Title>
    </Container>
  ),
)
export default memo(Post)
