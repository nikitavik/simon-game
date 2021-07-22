<template>
  <div v-if="opened" class="backdrop"></div>
  <slot></slot>
</template>

<script>
export default {
  name: 'PopUpModal',
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.backdrop{
  background-color: #ddd;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .75;
  z-index: 50;
}
</style>
