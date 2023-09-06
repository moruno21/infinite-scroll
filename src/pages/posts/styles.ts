import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 6rem;
  padding: 4.5rem 3rem;
  justify-items: center;
`

export const Content = styled.div`
  border-radius: 0.5rem;
  box-shadow:
    0rem 0.6875rem 0.9375rem -0.4375rem rgba(55, 40, 102, 0.1),
    0rem 1.5rem 2.375rem 0.1875rem rgba(55, 40, 102, 0.07),
    0rem 0.5625rem 2.875rem 0.5rem rgba(55, 40, 102, 0.06);
  display: grid;
  gap: 4rem;
  justify-items: center;
  max-width: 43.75rem;
  padding: 2rem;
  width: 100%;
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
`

export const Header = styled.div`
  display: grid;
  gap: 2rem;
`

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`

export const Posts = styled.div`
  display: grid;
  gap: 4rem 2rem;
  grid-template-columns: 1fr 1fr;
  height: 22rem;
  justify-items: center;
  padding: 1rem;
  overflow-y: scroll;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`
