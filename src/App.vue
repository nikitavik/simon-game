<template>
<!--  Notifications and Scoreboard-->
  <pop-up-modal>
    <save-results
      class="game-notification"
      :active = "active"
      :difficulty ="difficulty"
      :round = "round"
    />
  </pop-up-modal>
  <pop-up-modal
    :opened= "scoreboard">
    <div class="game-scoreboard">
      <game-scoreboard :opened= "scoreboard" @close-scoreboard="closeScoreboard" />
    </div>
  </pop-up-modal>
  <header class="header">
    <game-button
    class="scoreboard-button"
    @button-action="openScoreboard"
  ><span>Open Scoreboard</span>
  </game-button>
  </header>
<!--  Main Game-->
  <div class="container">
    <h1 class="game-title">Simon</h1>
    <span class="round-counter">Round: {{ round }}</span>
    <div class="game">
      <game-field
        class="game-field"
        :difficulty = "difficulty"
        :active = "active"
        @next-round = "onNextRound"
        @game-start = "onGameStart"
        @game-end = "onGameEnd"
      />
      <game-settings
        class="game-settings"
        :active = "active"
        @change-difficulty = "changeDifficulty"
      />
    </div>
<!--      App Footer-->
    <div class="footer">
      <div class="footer-text">Created by <a href="https://github.com/nikitavik">Nikita Kornilov</a></div>
    </div>
  </div>
</template>

<script>
// TODO block gameBoard on pattern playing
// TODO fix sounds and animation
// TODO make game style better
// TODO change Scoreboard to a modal window
// TODO Sort the scoreboard and add filters
// TODO Rewrite play pattern function

import GameScoreboard from './components/GameScoreboard'
import GameSettings from './components/GameSettings'
import GameField from './components/GameField'
import SaveResults from './components/SaveResults'
import PopUpModal from './components/PopUpModal'
import GameButton from './components/GameButton'

export default {
  name: 'App',
  components: {
    SaveResults,
    GameField,
    GameSettings,
    GameScoreboard,
    PopUpModal,
    GameButton
  },
  data () {
    return {
      difficulty: 'normal',
      active: false,
      round: 0,
      scoreboard: false
    }
  },
  methods: {
    // Game Starter
    onGameStart () {
      console.log(`Game: STARTED with difficulty ${this.difficulty.toUpperCase()}`)
      this.round = 0
      this.active = true
    },
    onGameEnd () {
      console.log(`Game: ENDED with difficulty ${this.difficulty.toUpperCase()}`)
      this.active = false
    },
    onNextRound () {
      this.round = this.round + 1
    },
    // Difficulty Changer
    changeDifficulty (difficulty) {
      this.difficulty = difficulty
    },
    // Scoreboard Open/Close
    openScoreboard () {
      this.scoreboard = true
    },
    closeScoreboard () {
      this.scoreboard = false
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
  height: 100vh;
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
  height: 100%;
}
.header {
  display: flex;
  justify-content: flex-start;
}
.scoreboard-button{
  margin: 1rem;
}
.game-title{
  display: flex;
  justify-content: center;
  font-size: 3rem;
  line-height: 120%;
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
