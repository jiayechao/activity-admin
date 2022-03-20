<template>
  <img :style="{'object-fit': fit}" :src="src" alt="">
</template>

<script>
export default {
  name: 'AdImg',
  props: {
    src: {
      type: String,
      default: 'https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF'
    },
    fit: {
      type: String,
      default: 'none'
    }
  }
}
</script>

<style>
img {
  width: 100%;
}
</style>