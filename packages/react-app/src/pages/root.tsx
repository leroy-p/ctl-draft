import styled from 'styled-components'

import Layout from '../layout'
import DraftSettings from '../components/draft-settings'
import { useDraft } from '../hooks/use-draft'
import SelectedGames from '../components/selected-games'
import FinalSelectedGame from '../components/final-selected-game'

export default function Root() {
  const {
    gameList,
    poolSize,
    banCount,
    games,
    selectedGames,
    bansRemaining,
    finalSelectedGame,
    setGameList,
    setPoolSize,
    setBanCount,
    pickRandomGames,
    banGame,
  } = useDraft()

  return (
    <Layout>
      <Container>
        <DraftSettings
          actionDisabled={games.length < poolSize || banCount >= poolSize}
          banCount={banCount}
          draftCompleted={selectedGames.length > 0}
          gameList={gameList}
          pickRandomGames={pickRandomGames}
          poolSize={poolSize}
          setBanCount={setBanCount}
          setGameList={setGameList}
          setPoolSize={setPoolSize}
        />
        {selectedGames.length > 0 && (
          <SelectedGames bansCompleted={bansRemaining === 0} banGame={banGame} games={selectedGames} />
        )}
        {finalSelectedGame && <FinalSelectedGame game={finalSelectedGame} />}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`
