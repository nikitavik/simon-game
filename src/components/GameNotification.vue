<template>
  <div v-if="!active && round !==0 ">
    Sorry. You have failed :( <br>
    Save Results?
    <button
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
      required: true
    },
    difficulty: {
      type: String,
      required: true
    },
    round: {
      type: Number,
      required: true
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
  border: 2px solid black;
  background-color: lightcoral;
  cursor: pointer;
}
</style>
