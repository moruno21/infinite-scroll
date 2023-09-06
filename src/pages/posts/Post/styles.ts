import { styled } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  border-radius: 1rem;
  box-shadow:
    0rem 0.1875rem 0.875rem 0.125rem rgba(55, 40, 102, 0.06),
    0rem 0rem 0.625rem 0.0625rem rgba(55, 40, 102, 0.08),
    0rem 0.3125rem 0.3125rem -0.1875rem rgba(55, 40, 102, 0.08);
  display: grid;
  justify-items: center;
  padding: 2rem;
  position: relative;
  width: 100%;
`

export const Id = styled.span`
  align-items: center;
  background-color: #a6e3e9;
  border-radius: 50%;
  display: grid;
  font-weight: 600;
  height: 3rem;
  justify-items: center;
  left: -0.75rem;
  position: absolute;
  top: -0.75rem;
  width: 3rem;
`

export const Title = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
`
