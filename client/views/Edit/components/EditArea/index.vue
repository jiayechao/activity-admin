<template>
  <div class="edit-area">
    <div v-for="(el, index) in activePage.elements" :key="index" @click="chooseElement(el)">
      <component :is="el.elName" v-bind="el.propsValue"></component>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapGetters(['activePage'])
  },
  methods: {
    ...mapMutations(['setActiveElementUUID']),
    chooseElement(el) {
      this.setActiveElementUUID(el.uuid)
    }
  }
}
</script>

<style scoped>
.edit-area {
  width: 375px;
  height: 667px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border: 1px solid #eee;
  margin: 20px auto;
  overflow: auto;
}
</style>