<template>
  <div class="tabControl">
    <span
      :class="{active:index === currentIndex}"
      v-for="(item,index) in tabControl"
      @click="changeIndex(index)"
    >
      {{item}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tabControl: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods:{
      changeIndex(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;
    justify-content: space-around;
  }

  .tabControl span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
