<template>
  <div class="edit-props">
    <div v-if="activeElementUUID">
      <div class="mb-2">
        <special-props></special-props>
      </div>
      <div>
        <base-props></base-props>
      </div>
    </div>
    <div v-else>
      <p>你必须选中一个元素</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, } from "vuex"
export default {
  computed: {
    ...mapState({
      activeElementUUID: state => state.editor.activeElementUUID
    }),
    ...mapGetters(['activeElement'])
  },
  components: {
    SpecialProps: () => import('./SpecialProps/index.vue'),
    BaseProps: () => import('./BaseProps.vue')
  }
}
</script>

<style>

</style>