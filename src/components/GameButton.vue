<template>
  <div>
    <button
      @click="$emit('button-action')"
      class="main-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameButton',
  emits: {
    'button-action': null
  },
  props: {
    active: {
      type: Boolean,
      required: true
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
.main-button:hover{
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.22);
}
</style>
