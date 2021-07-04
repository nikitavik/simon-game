<template>
  <div id="app">
    <div class="container">
      <h1 class="game-title">Simon</h1>
      <div class="round-counter">Round: {{ round }}</div>
      <div class="game">
        <game-field
          class="game-field"
          :difficulty = "difficulty"
          :active = "active"
          @next-round = "onNextRound"
          @game-start = "onGameStart"
          @game-end = "onGameEnd"
        />
      <div class="game-settings">
        <game-settings
          :active = "active"
          @change-difficulty = "difficultyChangeHandler"
        />
        <game-notification
          class="game-notification"
          :active = "active"
          :difficulty ="difficulty"
          :round = "round"
        />
      </div>
      </div>
<!--      Game Scoreboard-->
      <div class="game-scoreboard">
        <game-scoreboard />
      </div>
<!--      App Footer-->
      <div class="footer">
        <div class="footer-text">Created by <a href="https://github.com/nikitavik">Nikita Kornilov</a></div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO block gameBoard on pattern playing
// TODO fix sounds and animation
// TODO make game style better
// TODO change Scoreboard to a modal window
// TODO Sort the scoreboard and add filters

import GameScoreboard from './components/GameScoreboard'
import GameSettings from './components/GameSettings'
import GameField from './components/GameField'
import GameNotification from './components/GameNotification'

export default {
  name: 'App',
  components: {
    GameNotification,
    GameField,
    GameSettings,
    GameScoreboard
  },
  data () {
    return {
      difficulty: 'normal',
      active: false,
      round: 0
    }
  },
  methods: {
    // Game Starter
    onGameStart () {
      console.warn(`Game: STARTED with difficulty ${this.difficulty.toUpperCase()}`)
      this.round = 0
      this.active = true
    },
    onGameEnd () {
      console.warn(`Game: ENDED with difficulty ${this.difficulty.toUpperCase()}`)
      this.active = false
    },
    onNextRound () {
      this.round = this.round + 1
    },
    difficultyChangeHandler (difficulty) {
      this.difficulty = difficulty
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

input{
  cursor: pointer;
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
.game-notification{
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  position: relative;
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
