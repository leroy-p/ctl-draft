import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { generateRoutePath, RoutePath } from '../app/router-config'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <Container>
      <Link to={generateRoutePath(RoutePath.ROOT, {})}>
        <img alt="" src={logo} />
      </Link>
      <p>Draft</p>
      <div />
    </Container>
  )
}

const Container = styled.header`
  align-items: center;
  border-bottom: ${({ theme }) => `solid 1px ${theme.palette.border}`};
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  padding: 0 32px;
  width: 100%;

  & > a {
    width: 140px;

    & > img {
      height: auto;
      width: 100%;
    }
  }

  & > p {
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
  }

  & > div {
    width: 140px;
  }
`
