import styled from 'styled-components'

import Button from './button'

interface IProps {
  actionDisabled: boolean
  draftCompleted: boolean
  gameList: string
  poolSize: number
  banCount: number
  setGameList: (value: string) => void
  setPoolSize: (value: number) => void
  setBanCount: (value: number) => void
  pickRandomGames: () => void
}

export default function DraftSettings({
  actionDisabled,
  draftCompleted,
  gameList,
  poolSize,
  banCount,
  setGameList,
  setPoolSize,
  setBanCount,
  pickRandomGames,
}: IProps) {
  return (
    <Container draftCompleted={draftCompleted}>
      <p>Liste des jeux</p>
      <textarea onChange={(event) => setGameList(event.target.value)} value={gameList} />
      <div className="row-container">
        <p>Nombre de jeux tirés</p>
        <input type="number" onChange={(event) => setPoolSize(Number.parseInt(event.target.value))} value={poolSize} />
      </div>
      <div className="row-container">
        <p>Nombre de jeux bannis</p>
        <input type="number" onChange={(event) => setBanCount(Number.parseInt(event.target.value))} value={banCount} />
      </div>
      <Button disabled={actionDisabled || draftCompleted} onClick={pickRandomGames}>
        Commencer
      </Button>
    </Container>
  )
}

const Container = styled.div<{ draftCompleted?: boolean }>`
  align-items: center;
  border-right: ${({ theme }) => `solid 1px ${theme.palette.border}`};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 24px;
  width: calc(100% / 3);

  & > p {
    font-size: 28px;
    margin-bottom: 16px;
  }

  & > textarea {
    background-color: ${({ theme }) => theme.palette.secondary};
    border: none;
    border-radius: 20px;
    box-shadow: 0px 0px 31.1px 0px rgba(0, 0, 0, 0.54) inset;
    height: 272px;
    flex-shrink: 0;
    font-size: 18px;
    line-height: 24px;
    opacity: ${({ draftCompleted }) => (draftCompleted ? '0.5' : '1')};
    padding: 16px;
    pointer-events: ${({ draftCompleted }) => (draftCompleted ? 'none' : 'auto')};
    resize: none;
    width: 100%;
  }

  .row-container {
    align-items: center;
    border: ${({ theme }) => `solid 1px ${theme.palette.green}`};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
    padding: 16px 20px;
    width: 100%;

    & > p {
      font-size: 20px;
      font-weight: 700;
    }

    & > input {
      background-color: ${({ theme }) => theme.palette.secondary};
      border: none;
      border-radius: 20px;
      box-shadow: 0px 0px 31.1px 0px rgba(0, 0, 0, 0.54) inset;
      font-size: 28px;
      font-weight: 700;
      height: 56px;
      opacity: ${({ draftCompleted }) => (draftCompleted ? '0.5' : '1')};
      pointer-events: ${({ draftCompleted }) => (draftCompleted ? 'none' : 'auto')};
      text-align: center;
      width: 76px;
    }
  }

  & > button {
    margin-top: 32px;
  }
`
