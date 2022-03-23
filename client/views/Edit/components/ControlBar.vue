<template>
  <!-- 操作条：撤销，保存，预览等 -->
  <div class="control-bar">
    <el-button :disabled="!canUndo" size="small" icon="el-icon-back" @click="editorUndo">撤销</el-button>
    <el-button :disabled="!canRedo" size="small" icon="el-icon-right" @click="editorRedo">恢复</el-button>
    <el-button :disabled="currentHistoryIndex < 0" size="small" icon="el-icon-suitcase" @click="editorRedo">保存</el-button>
    <el-button size="small" icon="el-icon-close" @click="editorRedo">退出</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      projectData: state => state.editor.projectData,
      activeElementUUID: state => state.editor.activeElementUUID,
      currentHistoryIndex: state => state.editor.currentHistoryIndex,
    }),
    ...mapGetters(['canUndo', 'canRedo'])
  },
  methods: {
    ...mapActions(['editorUndo', 'editorRedo'])
  }
}
</script>

<style>

</style>