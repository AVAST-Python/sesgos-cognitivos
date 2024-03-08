export const PathConstants = {
  HOME: '/',
  ABOUT: '/about',
  TEST: '/test',
  GAME: '/game'
}

export function getGamePath(gameId) {
  return PathConstants.GAME + '/' + gameId
}
