<template>
  <p>{{greetings}} World !</p>
</template>

<script>
export default {
  data () {
    return {
      greetings: 'Hello'
    }
  }
}
</script>

<style scoped lang=css>
p {
 font-size: 2em;
 text-align: center;
}
</style>
