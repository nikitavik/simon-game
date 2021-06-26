<template>
  <div id="app">
    <div class="container">
      <h1 class="game-title">Simon</h1>
      <div class="round-counter">Round: {{ round }}</div>
      <div class="game">
        <div class="game-field">
          <div @click="registerClick"
               :class="{'disabled': !active}"
               class="field">
            <div
              ref="blue"
              class="button blue"
              data-color="blue"
            ></div>
            <div
              ref="red"
              class="button red"
              data-color="red"
            ></div>
            <div
              ref="yellow"
              class="button yellow"
              data-color="yellow"
            ></div>
            <div
              ref="green"
              class="button green"
              data-color="green"
            ></div>
          </div>
          <div class="game-notify">Sorry. You have failed :(</div>
        </div>
        <div class="game-settings">
          <div class="settings">
            <h2 class="settings-title">Game Options</h2>
            <div class="settings-radio">
              <h3 class="settings-radio__title">Difficulty</h3>
              <label class="settings-radio__label">
                <span>Easy</span>
                <input type="radio"
                       value="easy"
                       :disabled= "active"
                       v-model="difficulty">
              </label >
              <label class="settings-radio__label">
                <span>Normal</span>
                <input type="radio"
                       value="normal"
                       :disabled= "active"
                       v-model="difficulty">
              </label>
              <label class="settings-radio__label">
                <span>Hard</span>
                <input type="radio"
                       value="hard"
                       :disabled= "active"
                       v-model="difficulty">
              </label>
            </div>
          </div>
          <div>
            <button
              @click="startButtonHandler"
              class="start-button">{{ !active ? "Start" : "Stop" }}</button>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-text">Created by <a href="https://github.com/nikitavik">Nikita Kornilov</a></div>
      </div>
      <div class="scoreboard">
      </div>
    </div>
  </div>
</template>

<script>

import { playSound } from './audio-api'
import { getScores, postScores } from './api'

export default {
  name: 'App',
  data () {
    return {
      difficulty: 'normal',
      active: false,
      pattern: [],
      round: 0
    }
  },
  created () {
    window.p = postScores
    window.g = getScores
  },
  methods: {
    // Starts and end the game with button
    startButtonHandler () {
      if (!this.active) {
        this.gameStart()
      } else {
        this.gameEnd()
      }
    },
    // Function that plays pattern for each round
    async playPattern (pattern, difficulty) {
      let TIME = 1000
      if (difficulty === 'easy') { TIME = 1500 }
      if (difficulty === 'hard') { TIME = 400 }
      for (const item of this.sequence) {
        await new Promise(resolve => setTimeout(() => {
          resolve()
        }, TIME))
        item.cb()
        this.animateColor(item.colorName, TIME)
      }
    },
    // Game Starter
    gameStart () {
      console.warn(`Game: STARTED with difficulty ${this.difficulty.toUpperCase()} and pattern ${this.sequence}`)
      this.active = true
      this.sequence = []
      this.round = 0
      this.newRound()
    },
    // Game End
    gameEnd () {
      console.warn(`Game: ENDED with difficulty ${this.difficulty.toUpperCase()} and pattern ${this.sequence}`)
      this.active = false
    },
    // New round generator
    newRound () {
      this.round = this.round + 1
      this.addNewColor(this.randomColor())
      this.playPattern(this.pattern, this.difficulty)
      this.copy = this.sequence.slice(0)
    },
    // Send click to game
    registerClick (event) {
      if (this.active && event.target.dataset.color) {
        const color = event.target.dataset.color
        this.checkInput(color)
        this.animateColor(color)
        playSound(color)
      }
    },
    // Animate colors with Timeout
    animateColor (color, time) {
      const activeColor = this.$refs[color]
      activeColor.classList.add('active')
      setTimeout(() => { activeColor.classList.remove('active') }, time)
    },
    // Pushes new color to sequence
    addNewColor (colorName) {
      const newColor = {
        colorName: colorName,
        cb () {
          playSound(colorName)
        }
      }
      this.sequence.push(newColor)
    },
    // Check input with sequence
    checkInput (color) {
      const targetColor = this.copy.shift()
      this.active = (targetColor.colorName === color)
      this.checkLose()
    },
    // Check if input was right
    checkLose () {
      if (this.copy.length === 0 && this.active) {
        this.newRound()
      } else if (!this.active) {
        this.gameEnd()
      }
    },
    // Generate new random color name
    randomColor () {
      const seed = Math.floor((Math.random() * 4))
      const colors = ['yellow', 'blue', 'red', 'green']
      return colors[seed]
    }
  }
}
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*Start Button*/
.start-button{
  padding: 1rem 4rem;
  border: 2px solid black;
  background-color: lightcoral;
  cursor: pointer;
}
/*Settings*/
.settings-radio{
  display: flex;
  flex-flow: column nowrap;
}
.settings-title{
  font-size: 2rem;
}
.settings-radio__title{
  margin: .6rem 0;
  font-size: 1.2rem;
}
.settings-radio__label{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 5rem;
  margin: .3rem 0;
  padding: .2rem;

  cursor: pointer;
  border: 2px solid dimgrey;
}
input{
  cursor: pointer;
}
/*Game Field*/
.field{
  width: 100%;
  height: 100%;
}
.button{
  opacity: .5;
  height: 300px;
  width: 300px;
  -webkit-border-radius: 150px 150px 150px 150px;
  border-radius: 150px 150px 150px 150px;
  position: absolute;
  text-indent: 10000px;
  cursor: pointer;
}
.disabled{
  opacity: .1
}
.button.active{
  opacity: 1;
  border: 4px solid black;
}
.red{
  clip: rect(0px, 300px, 150px, 150px);
  background-color: red;
}
.blue{
  background-color: blue;
  clip: rect(0px, 150px, 150px, 0px);
}
.yellow{
  background-color: yellow;
  clip: rect(150px, 150px, 300px, 0px);
}
.green{
  background-color: green;
  clip: rect(150px,300px, 300px, 150px);
}
/*Main Styles*/
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container{
  width: 100%;
  height: 100vh;
}
.game-title{
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  font-size: 3rem;
  line-height: 120%;
}
.game-notify{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
.round-counter{
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
.game-field{
  width: 300px;
  height: 300px;
  margin: 1rem;
}
.game-settings{
  margin: 2rem 0;
}
.game{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.footer{
  display: flex;
  justify-content: center;
  padding-top: 4rem;
}
.footer-text{
  white-space: nowrap;
}

</style>
