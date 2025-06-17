import styled from 'styled-components'

import Button from './button'

interface IProps {
  bansCompleted: boolean
  games: Array<{ name: string; banned: boolean }>
  banGame: (index: number) => void
}

export default function SelectedGames({ bansCompleted, games, banGame }: IProps) {
  return (
    <Container>
      {games.map((game, index) => (
        <div className="game-row-container" key={index}>
          <p className={game.banned ? 'banned' : ''}>{game.name}</p>
          <Button disabled={game.banned || bansCompleted} onClick={() => banGame(index)}>
            X
          </Button>
        </div>
      ))}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  border-right: ${({ theme }) => `solid 1px ${theme.palette.primary}`};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: center;
  padding: 24px;
  width: calc(100% / 3);

  .game-row-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    & > p {
      font-size: 18px;
    }

    .banned {
      text-decoration: line-through;
    }
  }
`
