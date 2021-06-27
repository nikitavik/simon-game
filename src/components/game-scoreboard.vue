<template>
  <button
      @click="scoreboardOpenHandler"
      class="open">
    Open Scoreboard</button>
  <table
    class="scoreboard"
    v-if="opened">
    <tr class="row">
      <th class="header cell">Name</th>
      <th class="header cell">Rounds</th>
      <th class="header cell">Difficulty</th>
      <th class="header cell">Date</th>
      <th
        @click = "scoreboardCloseHandler"
        class="close">x</th>
    </tr>
    <tr v-for="player in scores"
        :key = player.index
        class="row">
      <td class="header cell">
        {{ player.name }}</td>
      <td class="header cell">
        {{ player.round }}</td>
      <td class="header cell">
        {{ player.difficulty}}</td>
      <td class="header cell">
        {{ player.date }}</td>
    </tr>
    <tr>

    </tr>
  </table>
</template>

<script>
import { getScores } from '../api'

export default {
  name: 'GameScoreboard',
  data () {
    return {
      opened: false,
      scores: []
    }
  },
  methods: {
    scoreboardOpenHandler () {
      if (!this.opened) {
        this.opened = true
        this.updateData()
      }
    },
    scoreboardCloseHandler () {
      this.opened = false
      this.scores = []
    },
    async updateData () {
      const scores = await getScores()
      for (const value of Object.values(scores)) {
        this.scores.push(value)
      }
      console.log(this.scores)
    }
  }
}
</script>

<style scoped>
.open{
  padding: 1rem 4rem;
  border: 2px solid black;
  background-color: lightcoral;
  cursor: pointer;
}
.close{
  display: inline-flex;
  font-size: 1rem;
  border: 2px solid black;
  background-color: lightcoral;
  cursor: pointer;
  width: 2rem;
}
.scoreboard{
  position: absolute;
  margin: 10px;
  max-width: 500px;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cell{
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-top: none;
  -webkit-box-shadow: 0 -5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0 -5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0 -5px 5px -5px rgba(34, 60, 80, 0.6);
}
.row{
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.header{

}
</style>
