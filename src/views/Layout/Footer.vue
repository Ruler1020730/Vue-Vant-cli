<template>
    <footer>
        <van-tabbar route>
            <van-tabbar-item
                    replace
                    to="/home"
                    icon="home-o"
            >
                标签
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/search"
                    icon="search"
            >
                标签
            </van-tabbar-item>
        </van-tabbar>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
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
