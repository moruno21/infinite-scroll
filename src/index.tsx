import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { createRoot } from 'react-dom/client'

import client from '~/graphql/client'
import PostsLayout from '~/pages/posts'
import GlobalStyles from '~/styles/global'

const App = () => (
  <>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <PostsLayout />
    </ApolloProvider>
  </>
)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
