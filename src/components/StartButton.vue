<template>
  <div>
    <button
      @click="$emit('click-start')"
      class="main-button">{{ !active ? "Start" : "Stop" }}</button>
  </div>
</template>

<script>
export default {
  name: 'StartButton',
  emits: {
    'click-start': null
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped>
/*Start Button*/
.main-button{
  padding: 1rem 4rem;
  border: 2px solid black;
  background-color: lightcoral;
  cursor: pointer;
}
</style>
