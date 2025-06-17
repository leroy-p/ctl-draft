import { useEffect, useState } from 'react'
import { getRandomInt } from '../utils/number'

export function useDraft() {
  const [gameList, setGameList] = useState<string>('')
  const [poolSize, setPoolSize] = useState<number>(-1)
  const [banCount, setBanCount] = useState<number>(-1)
  const [games, setGames] = useState<string[]>([])
  const [selectedGames, setSelectedGames] = useState<Array<{ name: string; banned: boolean }>>([])
  const [bansRemaining, setBansRemaining] = useState<number>(-1)
  const [finalSelectedGame, setFinalSelectedGame] = useState<string | undefined>(undefined)

  useEffect(() => {
    async function getJsonData() {
      const response = await fetch('https://curvz.gg/draft-default-settings.json')

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`)
      }

      const data = await response.json()

      setGameList(data.defaultGameList)
      setPoolSize(data.defaultPoolSize)
      setBanCount(data.defaultBanCount)
    }

    getJsonData()
  }, [])

  useEffect(() => {
    setGames(parseGames(gameList))
  }, [gameList])

  useEffect(() => {
    setBansRemaining(banCount)
  }, [banCount])

  useEffect(() => {
    if (bansRemaining === 0) {
      pickFinalGame()
    }
  }, [bansRemaining])

  function parseGames(list: string): string[] {
    return list.split('\n').filter((game) => game.length > 0)
  }

  function pickRandomGames() {
    if (games.length < poolSize) {
      throw new Error('[pickRandomGames]: Game list is too short.')
    }

    const copy = [...games]
    const result = []

    for (let i = 0; i < poolSize; i++) {
      const randomIndex = getRandomInt(copy.length)

      result.push({ name: copy[randomIndex], banned: false })
      copy.splice(randomIndex, 1)
    }

    setSelectedGames(result)
  }

  function banGame(index: number) {
    if (index < 0 || index >= selectedGames.length) {
      throw new Error('[banGame]: Invalid index')
    }

    if (bansRemaining === 0) {
      throw new Error('[banGame]: No ban remaining.')
    }

    const copy = [...selectedGames]

    copy[index].banned = true

    setBansRemaining((value) => value - 1)
    setSelectedGames(copy)
  }

  function pickFinalGame() {
    const remainingGames = selectedGames.filter((game) => !game.banned)

    if (remainingGames.length === 0) {
      throw new Error('[pickFinalGame]: all games are banned')
    }

    const index = getRandomInt(remainingGames.length)

    setFinalSelectedGame(remainingGames[index].name)
  }

  return {
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
  }
}
