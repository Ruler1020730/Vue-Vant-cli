<template>
	<div class="news-item flex flex-direction align-center justify-around">
		<div class="toal-box flex flex-direction justify-center text-df text-center">
			<div class="toal flex flex-direction justify-center align-center border-round-100 text-df bg-white text-center">
				<p>大</p>
				<p>促销</p>
			</div>
		</div>
		<van-image height="80" :src="$imgUrl + itemInfo.main_img + '?imageView/1/w/111/h/80'"/>
		<span class="van-hairline--top-bottom text-center text-lg">{{itemInfo.goods_name}}</span>
		<div class="price bg-blues flex justify-between">
			<span class="price-title bg-white text-sm">
				价格
			</span>
			<span class="flex align-center text-df">￥{{itemInfo.goods_price}}</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'NewsItem',
  components: {},
  props: {
    itemInfo: {
      type: Object,
      required: true
    }
  },
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
.news-item{
	margin-top: 20px;
	padding-top: 20px;
	width: 111px;
	height: 160px;
	/*background-color: white;*/
	border-radius:4px;
	position: relative;
}
	/deep/.van-hairline--top-bottom{
		color: #333;
	}
	[class*='van-hairline']::after{
		border-color: #000;
	}
	.toal-box{
		position: absolute;
		left: 0;
		top: 0px;
		z-index: 1;
		padding: 2px;
		border-radius: 100px 100px 0px 100px;
		background-color: #0075c4;
	}
	.toal{
		/*padding: 10px 10px 10px 10px;*/
		width: 42px;
		height: 42px;
		/*line-height: 20px;*/
	}
	.price{
		padding: 2px;
	}
	.price-title{
		position: relative;
		display: block;
		padding: 0 18px 0 6px;
		height: 20px;
		line-height: 20px;
		&:before{
			position: absolute;
			right: -16px;
			top: 5px;
			transform: rotate(-45deg);
			display: block;
			content: '';
			width: 0;
			height: 0;
			border-width: 15px;
			border-style: solid;
			border-color:#0075c4 transparent transparent transparent;
		}
	}
</style>
