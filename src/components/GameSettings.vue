<template>
  <div class="settings">
    <h2 class="settings-title">Game Options</h2>
    <div class="settings-radio">
      <h3 class="settings-radio__title">Difficulty</h3>
      <form @change="$emit('change-difficulty', difficulty)">
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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameSettings',
  data () {
    return {
      difficulty: 'normal'
    }
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: {
    'change-difficulty': value => typeof value === 'string'
  }
}
</script>

<style scoped>
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
</style>
