<template>
  <p class="my-style">{{greetings}} World !</p>
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

<style lang=css>
.my-style {
 font-size: 2em;
 text-align: center;
}
</style>
