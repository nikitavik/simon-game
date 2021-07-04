<template>
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
    <start-button
      class="start-button"
      :active = "active"
      @click-start = "startButtonHandler"
    />
  </div>
</template>

<script>
import { playSound } from '../audio-api'
import StartButton from './StartButton'

const TIME_ON_DIFFICULTY = {
  easy: 400,
  medium: 1000,
  hard: 1500
}
const GAME_DELAY = 200

export default {
  name: 'GameField',
  components: {
    StartButton
  },
  data () {
    return {
      pattern: [],
      copyPattern: []
    }
  },
  props: {
    active: {
      type: Boolean,
      required: true
    },
    difficulty: {
      type: String,
      required: true
    }
  },
  emits: {
    'next-round': null,
    'game-start': null,
    'game-end': null
  },
  methods: {
    // Starts and end the game with button
    startButtonHandler () {
      if (!this.active) {
        this.startGame()
      } else {
        this.endGame()
      }
    },
    // Game Start
    startGame () {
      this.$emit('game-start')
      this.pattern = []
      this.startNextRound()
    },
    // Game End
    endGame () {
      this.$emit('game-end')
    },
    // New round
    startNextRound () {
      this.addNewColor(this.getRandomColor())
      this.playPattern()
      this.copyPattern = this.pattern.slice(0)
      this.$emit('next-round')
      console.log(this.pattern)
    },
    // Register click
    registerClick (event) {
      if (this.active && event.target.dataset.color) {
        const color = event.target.dataset.color
        this.checkInput(color)
        this.animateColor(color, GAME_DELAY)
        playSound(color)
      }
    },
    // Animate colors with Timeout
    animateColor (color, time) {
      const activeColor = this.$refs[color]
      activeColor.classList.add('active')
      setTimeout(() => { activeColor.classList.remove('active') }, time)
    },
    // Compare input with pattern
    checkInput (color) {
      const targetColor = this.copyPattern.shift()
      const check = (targetColor.colorName === color)
      this.checkLose(check)
    },
    // Check if input was right
    checkLose (check) {
      if (this.copyPattern.length === 0 && check) {
        setTimeout(() => { this.startNextRound() }, GAME_DELAY * 2)
      } else if (!check) {
        this.endGame()
      }
    },
    // Pushes new color to pattern
    addNewColor (colorName) {
      const newColor = {
        colorName: colorName,
        cb () { playSound(colorName) }
      }
      this.pattern.push(newColor)
    },
    // Function that plays pattern for each round
    async playPattern () {
      const time = TIME_ON_DIFFICULTY[this.difficulty]
      for (const item of this.pattern) {
        await new Promise(resolve => setTimeout(() => {
          resolve()
        }, time))
        item.cb()
        this.animateColor(item.colorName, time)
      }
    },
    // Generate new random color name
    getRandomColor () {
      const seed = Math.floor((Math.random() * 4))
      const colors = ['yellow', 'blue', 'red', 'green']
      return colors[seed]
    }
  }
}
</script>

<style scoped>
/*Game Field*/
.field{
  width: 100%;
  height: 100%;
}
.start-button{
  margin-top: 1rem;
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
</style>
