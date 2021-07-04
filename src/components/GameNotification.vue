<template>
  <div
    v-if="!active && round !==0 "
    class="game-notification">
    Sorry. You have failed :(
    Save Results?
    <button
      v-if="!active && round !== 0"
      @click="saveResult"
      class="main-button">Save Results</button>
  </div>
</template>

<script>
import { postScores } from '../api'

export default {
  name: 'GameNotification',
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
    },
    round: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    saveResult () {
      const name = prompt('Tell me your name, please!')
      postScores(name, this.round, this.difficulty).then(() => {
        alert('Successfully saved')
      }
      )
    }
  }
}
</script>

<style scoped>
.main-button{
  padding: 1rem 4rem;
  margin: 1rem;
  border: 2px solid black;
  background-color: lightcoral;
  cursor: pointer;
}
</style>
