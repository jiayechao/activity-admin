<template>
<div>
	<el-form-item label="图片地址：">
    <el-input v-model="tempSrc" placeholder=""></el-input>
  </el-form-item>
</div>
</template>

<script>
	export default {
		name: "attr-ad-src",
		props: {
      src: {
        type: String,
			},
		},
		data() {
			return {
				tempSrc: '',
			}
		},
		mounted() {
			this.tempSrc = this.src;
		},
		watch: {
			src() {
				this.tempSrc = this.src;
			},
			tempSrc() {
				this.$emit('update:src', this.tempSrc)
			},
		}
	}
</script>

<style scoped>

</style>
