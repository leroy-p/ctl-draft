import styled from 'styled-components'

import IconButton from './icon-button'
import banIcon from '../assets/images/icon-ban.png'

interface IProps {
  bansCompleted: boolean
  games: Array<{ name: string; banned: boolean }>
  banGame: (index: number) => void
}

export default function SelectedGames({ bansCompleted, games, banGame }: IProps) {
  return (
    <Container>
      <p>Choisis des jeux à bannir</p>
      {games.map((game, index) => (
        <GameRow banned={game.banned} key={index}>
          <p>{game.name}</p>
          {game.banned ? (
            <div />
          ) : (
            <IconButton disabled={game.banned || bansCompleted} icon={banIcon} onClick={() => banGame(index)} />
          )}
        </GameRow>
      ))}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  border-right: ${({ theme }) => `solid 1px ${theme.palette.border}`};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: flex-start;
  padding: 80px 24px;
  width: calc(100% / 3);

  & > p {
    font-size: 28px;
    margin-bottom: 16px;
  }
`

const GameRow = styled.div<{ banned: boolean }>`
  align-items: center;
  border: ${({ banned, theme }) => `solid 1px ${banned ? theme.palette.red : theme.palette.green}`};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  height: 74px;
  justify-content: space-between;
  padding: 16px 20px;
  width: 100%;

  & > p {
    font-size: 20px;
    font-weight: 700;
    text-decoration: ${({ banned }) => (banned ? 'line-through' : 'none')};
  }
`
