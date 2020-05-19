<!-- home -->
<template>
  <div>
    <router-view />
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'

export default {
  name: 'home',
  components: {
    TabBar
  },
  data() {
    return {}
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped></style>
