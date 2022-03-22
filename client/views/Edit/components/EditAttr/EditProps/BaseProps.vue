<template>
  <div class="base-props">
		<div class="fs-3 text-bold">基础属性</div>
    待开发
  </div>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'

	export default {
		computed: {
			...mapState({
				projectData: state => state.projectData,
				activePageUUID: state => state.activePageUUID,
        activeElementUUID: state => state.activeElementUUID,
        currentPageIndex: state => state.currentPageIndex,
			}),
			...mapGetters([
				'activeElement',
				'activePage'
			]),
		},
	}
</script>

<style scoped>

</style>
