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
      :active = "active"
      @click-start = "startButtonHandler"
    />
  </div>
</template>

<script>
import { playSound } from '../audio-api'
import StartButton from './StartButton'

export default {
  name: 'GameField',
  components: {
    StartButton
  },
  data () {
    return {
      pattern: []
    }
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    difficulty: {
      type: String,
      required: true,
      default: 'normal'
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
        this.gameStart()
      } else {
        this.gameEnd()
      }
    },
    // Game Start
    gameStart () {
      this.$emit('game-start')
      this.pattern = []
      this.nextRound()
    },
    // Game End
    gameEnd () {
      this.$emit('game-end')
    },
    // New round
    nextRound () {
      this.addNewColor(this.randomColor())
      this.playPattern(this.pattern, this.difficulty)
      this.copyPattern = this.pattern.slice(0)
      this.$emit('next-round')
      console.log(this.pattern)
    },
    // Register click
    registerClick (event) {
      if (this.active && event.target.dataset.color) {
        const color = event.target.dataset.color
        this.checkInput(color)
        this.animateColor(color, 200)
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
        setTimeout(() => { this.nextRound() }, 400)
      } else if (!check) {
        this.gameEnd()
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
    async playPattern (pattern, difficulty) {
      let TIME = 1000
      if (difficulty === 'easy') { TIME = 1500 }
      if (difficulty === 'hard') { TIME = 400 }
      for (const item of this.pattern) {
        await new Promise(resolve => setTimeout(() => {
          resolve()
        }, TIME))
        item.cb()
        this.animateColor(item.colorName, TIME)
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

<style scoped>
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
</style>
