<template>
    <main>
        <router-view/>
        <Footer/>
    </main>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'index',
  components: {Footer},
  props: {},
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  activated() {
  },
  updated() {
  },
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="less">

</style>
