import { HTMLAttributes } from 'react'

export type PostProps = Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'title'> & {
  id: string
  title: string
}
