<template>
  <div class="my-modal" :class='{hide: showModal}'>
    <div class="my-modal__overflow"></div>
    <div class="my-modal__contact">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['showModal']
}
</script>

<style scoped>
  .hide {
    display: none !important;
  }
  .my-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .my-modal__overflow {
    background: #0000008c;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    cursor: pointer;
  }
</style>