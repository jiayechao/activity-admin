<!--text.vue-->
<template>
  <div class="text">
    {{text}}
  </div>
</template>

<script>
	export default {
		name: 'AdText', // 这个名字很重要<ad-text></ad-text>
		props: {
			text: {
				type: String,
				default: '这是一段文字'
      }
		}
	}
</script>

<style lang="scss" scoped>
</style>
