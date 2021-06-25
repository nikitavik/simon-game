import { playSound } from './audio-api'

class GameApi {
  constructor () {
    this.difficulty = ''
    this.sequence = []
    this.round = 0
    this.active = true
  }

  difficultyChanger (difficulty) {
    this.difficulty = difficulty
    console.log('Difficulty has changed to: ', difficulty)
  }

  gameEnd () {
    console.warn(`Game: ENDED with difficulty ${this.difficulty.toUpperCase()} and pattern ${this.sequence}`)
    this.active = false
    this.round = 0
  }

  gameStart () {
    console.warn(`Game: STARTED with difficulty ${this.difficulty.toUpperCase()} and pattern ${this.sequence}`)

    this.active = true
    this.sequence = []
    this.round = 0
    this.newRound()
  }

  newRound () {
    this.round = this.round + 1
    this.addNewColor(this.randomColor())
    this.copy = this.sequence.slice(0)
    this.playPattern(this.difficulty)
  }

  addNewColor (colorName) {
    const newColor = {
      colorName: colorName,
      cb () {
        playSound(colorName)
      }
    }
    this.sequence.push(newColor)
  }

  async playPattern (difficulty) {
    let TIME = 1000
    if (difficulty === 'easy') { TIME = 1500 }
    if (difficulty === 'hard') { TIME = 400 }
    for (const item of this.sequence) {
      await new Promise(resolve => setTimeout(() => {
        resolve()
      }, TIME))
      item.cb()
    }
  }

  checkInput (color) {
    const targetColor = this.copy.shift()
    this.active = (targetColor.colorName === color)
    this.checkLose()
  }

  checkLose () {
    if (this.copy.length === 0 && this.active) {
      this.newRound()
    } else if (!this.active) {
      this.gameEnd()
    }
  }

  get Results () {
    return { active: this.active, round: this.round }
  }

  randomColor () {
    const seed = Math.floor((Math.random() * 4))
    const colors = ['yellow', 'blue', 'red', 'green']
    const color = colors[seed]
    return color
  }
}

export const game = new GameApi()
