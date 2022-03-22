<template>
<div>
  <el-form-item label="图片格式：">
    <el-radio-group v-model="tempFit">
      <el-radio v-for="type in types" :key="type" :label="type"></el-radio>
    </el-radio-group>
  </el-form-item>
</div>
</template>

<script>
	export default {
		name: "attr-ad-fit",
		props: {
			fit: {
        type: String,
      }
		},
		data() {
			return {
        tempFit: '',
				types: ['fill', 'contain', 'cover', 'none', 'scale-down']
			}
		},
		mounted() {
			this.tempFit = this.fit;
		},
		watch: {
			type() {
				this.tempFit = this.fit;
			},
			tempFit() {
				this.$emit('update:fit', this.tempFit)
			}
		}
	}
</script>

<style scoped>

</style>
