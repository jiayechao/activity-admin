<template>
  <el-descriptions class="edit-script" title="当前页脚本" direction="vertical" :column="1">
    <el-descriptions-item label="脚本编辑">
      <el-input v-model="scriptContent" type="textarea" :row="20"></el-input>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['activePage'])
  },
  methods: {
  },
  data() {
    return {
      scriptContent: ''
    };
  },
}
</script>

<style lang="less" scoped>
.edit-page {
  .scope-img {
    width: 80px;
    height: 80px;
  }
}
</style>