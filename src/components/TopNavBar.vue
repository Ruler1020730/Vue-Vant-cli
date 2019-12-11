<template>
    <div class="top-bar">
        <div :class="isFixed ? 'showFixed' : '' "></div>
        <van-nav-bar
                :title="title"
                :left-text="leftText"
                :right-text="rightText"
                :left-arrow="!!leftText"
                :fixed="isFixed"
                :z-index="zIndex"
                @click-left="leftClick"
        >
            <template slot="left">
                <slot name="left"></slot>
            </template>
            <template slot="right">
                <slot name="right"></slot>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
  name: 'TopNavBar',
  components: {},
  props: {
    title: { // 标题
      type: String
    },
    leftText: String, // 左边文字
    rightText: String, // 右边文字
    isFixed: { // 是否固定
      type: Boolean,
      default: false
    },
    zIndex: { // 层级
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    leftClick() {
      this.$router.back()
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped lang="less">
    .showFixed{
        height: 46px;
    }
</style>
