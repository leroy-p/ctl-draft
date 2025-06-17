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
      <p>Games list</p>
      <textarea onChange={(event) => setGameList(event.target.value)} value={gameList} />
      <div className="row-container">
        <p>Pool size</p>
        <input type="number" onChange={(event) => setPoolSize(Number.parseInt(event.target.value))} value={poolSize} />
      </div>
      <div className="row-container">
        <p>Ban count</p>
        <input type="number" onChange={(event) => setBanCount(Number.parseInt(event.target.value))} value={banCount} />
      </div>
      <Button disabled={actionDisabled || draftCompleted} onClick={pickRandomGames}>
        Start draft
      </Button>
    </Container>
  )
}

const Container = styled.div<{ draftCompleted?: boolean }>`
  align-items: center;
  border-right: ${({ theme }) => `solid 1px ${theme.palette.primary}`};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 24px;
  width: calc(100% / 3);

  & > p {
    font-size: 18px;
    margin-bottom: 8px;
    width: 100%;
  }

  & > textarea {
    background-color: ${({ theme }) => theme.palette.secondary};
    border: ${({ theme }) => `solid 1px ${theme.palette.primary}`};
    height: 274px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
    width: 100%;

    & > p {
      font-size: 18px;
    }

    & > input {
      background-color: ${({ theme }) => theme.palette.secondary};
      border: ${({ theme }) => `solid 1px ${theme.palette.primary}`};
      font-size: 18px;
      height: 32px;
      opacity: ${({ draftCompleted }) => (draftCompleted ? '0.5' : '1')};
      pointer-events: ${({ draftCompleted }) => (draftCompleted ? 'none' : 'auto')};
      text-align: center;
      width: 48px;
    }
  }

  & > button {
    margin-top: 32px;
  }
`
