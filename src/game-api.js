import { playSound } from './audio-api'

class GameApi {
  constructor (pattern, difficulty) {
    this.difficulty = difficulty
    this.pattern = pattern
    this.playerPattern = []
    this.status = false
  }

  difficultyChanger (difficulty) {
    this.difficulty = difficulty
    console.log('Difficulty has changed to: ', difficulty)
  }

  gameStart () {
    this.status = true
    console.warn(`Game: ${this.status ? 'STARTED' : ''} with difficulty ${this.difficulty.toUpperCase()} and pattern ${this.pattern}`)
    this.addNewColor('blue')
    this.addNewColor('yellow')
    this.addNewColor('green')

    this.playPattern()
  }

  gameEnd () {
    this.status = false
    console.warn(`Game: ${this.status ? '' : 'ENDED'} with difficulty ${this.difficulty.toUpperCase()} and pattern ${this.pattern}`)
  }

  // async playPattern () {
  //   const p = new Promise(resolve => {
  //     for (const item of this.pattern) {
  //       // GENERATE NEW PROMISE
  //       resolve(item)
  //     }
  //   })
  //   p.then(item => {
  //     item.cb(1000)
  //   })
  // }

  playerInput (color) {
    this.playerPattern.push(color)
  }

  addNewColor (colorName) {
    const newColor = {
      colorName: colorName,
      cb: (time) => { setTimeout(() => { playSound(colorName) }, time) }
    }
    this.pattern.push(newColor)
  }
}

export const game = new GameApi([], 'normal')
