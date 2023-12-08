<script>
export default {
  data() {
    return {
      itemList: ['item1', 'item2', 'item3'],
    }
  }
}
</script>

<template>
  <br/>
  <div class="item-box">
    <a style="width: 100px; height: 50px; border: 1px solid black; padding: 10px; margin: 10px;" v-for="item in itemList" :key="item">{{ item }}</a>
  </div>
</template>

<style>

</style>