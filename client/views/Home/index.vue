<template>
  <div class="p-2">
    <h4 class="text-bold fs-lg mb-2">所有页面</h4>
    <div class="project-lst d-flex">
      <div class="project-item flex-center mb-2 mr-2" v-for="(item, index) in projectList" :key="index" @click="navToEdit(item)">
        {{index}}
      </div>
      <div class="project-item flex-center" @click="navToEdit">创建页面</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      projectList: state => state.local.projectList
    })
  },
  methods: {
    navToEdit(item) {
      if(!item) {
        this.$router.push('/edit')
      } else {
        this.$router.push(`/edit/?id=${item.id}`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.project-item {
  width: 120px;
  height: 150px;
  border: 1px solid #eee;
  font-size: 24px;
  &:hover {
    box-shadow: 0 0 10px 0 #eee;
  }
}
</style>