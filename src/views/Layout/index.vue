<template>
    <section>
        <div class="home-content">
            <router-view/>
        </div>
        <Footer v-if="false"/>
    </section>
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
    .home-content{
        /*height: calc(100vh - 50px);*/
    }
</style>
