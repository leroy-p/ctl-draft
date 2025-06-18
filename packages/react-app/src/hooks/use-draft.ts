import { useEffect, useState } from 'react'
import { getRandomInt } from '../utils/number'

import jsonData from '../data/draft-default-settings.json'

export function useDraft() {
  const [gameList, setGameList] = useState<string>(jsonData.defaultGameList)
  const [poolSize, setPoolSize] = useState<number>(jsonData.defaultPoolSize)
  const [banCount, setBanCount] = useState<number>(jsonData.defaultBanCount)
  const [games, setGames] = useState<string[]>([])
  const [selectedGames, setSelectedGames] = useState<Array<{ name: string; banned: boolean }>>([])
  const [bansRemaining, setBansRemaining] = useState<number>(jsonData.defaultBanCount)
  const [finalSelectedGame, setFinalSelectedGame] = useState<string | undefined>(undefined)

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
