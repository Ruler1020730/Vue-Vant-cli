<template>
    <footer>
        <van-tabbar
                route
                active-color="#07c160">
            <van-tabbar-item
                    replace
                    to="/home"
                    icon="home-o"
            >
                首页  
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/"
                    icon="orders-o"
            >
                商品列表
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/"
                    icon="shopping-cart-o"
            >
                购物车
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/"
                    icon="contact"
            >
                个人中心
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
