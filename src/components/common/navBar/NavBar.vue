<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navBar {
    height: 44px;
    width: 100%;
    display: flex;
  }

  .left {
    width: 60px;
  }

  .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
