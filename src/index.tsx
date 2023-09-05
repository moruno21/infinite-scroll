import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { createRoot } from 'react-dom/client'

import client from '~/graphql/client'
import PostsList from '~/pages/posts-list'

const App = () => (
  <ApolloProvider client={client}>
    <PostsList />
  </ApolloProvider>
)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)