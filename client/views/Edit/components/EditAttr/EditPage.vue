<template>
  <!-- 
    修改页面配置
    backgroundColor: '',
		backgroundImage: '',
   -->
  <el-descriptions class="edit-page" title="垂直带边框列表" direction="vertical" :column="1">
    <el-descriptions-item label="页面背景色">
      <el-color-picker v-model="activePage.commonStyle.backgroundColor" show-alpha></el-color-picker>
    </el-descriptions-item>
    <el-descriptions-item label="页面背景图">
      <el-button type="primary">图片占位</el-button>
      <el-input v-model="activePage.commonStyle.backgroundImage" type="textarea" :rows="2" placeholder="请输入图片地址"></el-input>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  components: {
    // ImageStore: () => import('@client/components/ImageStore/index.vue')
  },
  computed: {
    ...mapGetters(['activePage'])
  },
  methods: {
    showStore() {
      this.dialogVisible = true
    },
    changeImgUrl(url) {
      this.activePage.commonStyle.backgroundImage = url
    }
  },
  data() {
    return {
      color: '',
      imgUrl: ''
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