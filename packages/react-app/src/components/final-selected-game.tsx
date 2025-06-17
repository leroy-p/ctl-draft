import styled from 'styled-components'
import Button from './button'
import { useNavigate } from 'react-router-dom'

interface IProps {
  game: string
}

export default function FinalSelectedGame({ game }: IProps) {
  const navigate = useNavigate()

  return (
    <Container>
      <p>{game}</p>
      <Button onClick={() => navigate(0)}>Restart draft</Button>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  width: calc(100% / 3);

  & > p {
    font-size: 48px;
  }
`
