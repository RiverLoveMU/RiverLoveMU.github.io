<template>
  <div class="my">
    <h1>这是我自己的组件</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      msg: '哈哈哈哈哈哈哈啊哈哈哈哈哈哈'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    background: #ccc;
    color:red;
  }
</style>
