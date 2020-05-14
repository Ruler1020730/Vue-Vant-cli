<template>
	<div class="home">
		<van-nav-bar :title="title ? title : '全部日期'" :placeholder="true" @click-left="showLeftWindow" @click-right="starNews" fixed left-arrow>
			<template #left>
				<i class="text-sm">{{canteen || '全部'}}<van-icon name="arrow-down" color="#000" size="10"/></i>
			</template>
			<template #right>
<!--				<van-icon :color="isStar ? '' : 'red'" :name="isStar ? 'like-o' : 'like'" size="18"/>-->
				<div class="heart" :class="{'heartAnimation': showAnm}" id="like1" rel="like" @click="feedClick"></div>
			</template>
		</van-nav-bar>
		<van-popup :style="{ height: '100%', width: '70%' }" position="left" v-model="show">
			<van-search
							:value="time"
							@click="showCalendar = true"
							clearable
							clickable
							input-align="left"
							left-icon=" "
							name="calendar"
							placeholder="点击选择日期"
							readonly
							shape="round"
							show-action
			>
				<template #left>
					<span class="text-df padding-right">时间</span>
				</template>
				<template #action>
					<div style="width: 60px">
						<van-dropdown-menu :overlay="false">
							<van-dropdown-item v-model="meals_typeActive" :options="option1" />
						</van-dropdown-menu>
					</div>
				</template>
			</van-search>
			<van-tree-select
							:active-id.sync="activeId"
							:height="'calc(100% - 54px)'"
							:items="items"
							:main-active-index.sync="activeIndex"
			/>
			<van-col span="24" class="flex justify-center">
				<van-button block class="fixed" color="#11A0FA" round @click="submit">确定</van-button>
			</van-col>
		</van-popup>
		<van-calendar :max-date="maxDate" :min-date="minDate" @confirm="onConfirm" color="#11A0FA" v-model="showCalendar"/>
			<van-list
					v-model="loading"
					ref="scroll"
					:finished="finished"
					finished-text="没有更多了"
					style="overflow-x: hidden;height: calc(100vh - 1.22667rem);"
					@load="onLoad"
			>
				<div class="flex flex-direction padding-lr-sm">
					<div class="flex flex-direction" v-for="(items) in list" :key="items.area_id">
						<h2 class="text-xl">{{areasName(items.area_id)}}</h2>
						<div class="list-content flex flex-wrap justify-between ">
							<news-item v-for="(item, index) in items.goodsArr" :key="index" :item-info="item"/>
						</div>
					</div>
				</div>
			</van-list>
	</div>
</template>

<script>
// @ is an alias to /src

import NewsItem from './components/NewsItem'
import {getAreas, getMenuList, schoolAreas} from '../../api/menuList'
export default {
  name: 'home',
  components: {NewsItem},
  created() {
    this.getList().then(res => {
      this.list = res.data.list
    })
    getAreas().then(res => {
      if (res.code === 200) {
        this.items = res.data
      }
    })
    schoolAreas().then(res => {
      if (res.code === 200) {
        this.schoolAreasList = res.data
      }
    })
  },
  mounted() {
  },
  data() {
    return {
      show: false, // 分类选择
      isStar: false, // 是否订阅
      showCalendar: false, // 时间选择弹窗
      minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), 31),
      time: '',
      activeId: '', // 选中的子id
      school_id: '',
      activeIndex: 0, // 父级index
      items: [
        {
          // 导航名称
          text: '南校区',
          // 是否在导航名称右上角显示小红点
          dot: false,
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '五星级酒店',
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: false
            },
            {
              text: '十星级酒店',
              id: 2
            }
          ]
        },
        {
          // 导航名称
          text: '东校区',
          // 是否在导航名称右上角显示小红点
          dot: false,
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '小饭店',
              // id，作为匹配选中状态的标识符
              id: 5
              // 禁用选项
            },
            {
              text: '大酒店',
              id: 6
            },
            {
              text: '大酒店2',
              id: 3
            },
            {
              text: '大酒店3',
              id: 4
            }
          ]
        }
      ],
      title: this.$moment().format('MM-DD'),
      canteen: '', // 当前选中的食堂名称
      list: [], // 列表数据
      schoolAreasList: [],
      option1: [
        { text: '全天', value: 0 },
        { text: '早餐', value: 1 },
        { text: '中餐', value: 2 },
        { text: '晚餐', value: 3 }
      ],
      meals_type: 0,
      meals_typeActive: 0,
      loading: false,
      finished: false,
      showAnm: false,
      page: 2
    }
  },
  beforeMount() {
    // document.body.style.overflow = 'hidden'
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  },
  methods: {
    /**
     * 获取
     * @param data
     */
    getList(data = {}) {
      return new Promise((resolve, reject) => {
        getMenuList(data).then(res => {
          if (res.code === 200) {
            resolve(res)
          } else {
            reject(res)
          }
        })
      })
    },
    feedClick() { // 订阅
      this.showAnm = !this.showAnm
    },
    showLeftWindow() { // 打开左侧筛选
      this.show = true
    },
    onConfirm(date) { // 选择时间
      this.time = this.$moment(date).format('YYYY-MM-DD')
      this.showCalendar = false
    },
    starNews() { // 订阅
      this.isStar = !this.isStar
    },
    getName() {
      let name = this.items[this.activeIndex].text
      let type
      for (const item of this.option1) {
        if (item.value === this.meals_type) {
          type = item.text
        }
      }
      this.items.forEach(item => {
        if (item.children) {
          for (const items of item.children) {
            if (String(items.id) === '0' && String(this.area_id) === '0') {
              return
            }
            if (String(items.id) === String(this.area_id)) {
              name = name + '-' + items.text + '-' + type
              return
            }
          }
        }
      })
      if (String(this.area_id) === '0') {
        name = name + '-' + '全部' + '-' + type
      }
      return name
    },
    async submit() {
      this.area_id = this.activeId
      this.title = this.time && this.$moment(this.time).format('MM-DD')
      this.show = false
      this.canteen = this.getName()
      this.school_id = this.items[this.activeIndex].id
      this.meals_type = this.meals_typeActive
      this.page = 2
      const data = {
        date: this.time,
        area_id: this.area_id,
        school_id: this.school_id,
        meals_type: this.meals_type
      }
      for (const item of Object.keys(data)) {
        if (!data[item]) {
          delete data[item]
        }
      }
      await this.getList(data).then(res => {
        this.list = []
        this.list = res.data.list
        this.finished = false
        this.$nextTick(() => {
          this.$refs.scroll.scroller.scrollTop = 0
        })
      })
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      const data = {
        page: this.page,
        date: this.time,
        area_id: this.area_id,
        school_id: this.school_id,
        meals_type: this.meals_type
      }
      for (const item of Object.keys(data)) {
        if (!data[item]) {
          delete data[item]
        }
      }
      this.getList(data).then(res => {
        if (res.data instanceof Array || this.list.length >= res.data.count) {
          this.loading = false
          this.finished = true
          return
        }
        if (res.data instanceof Object) {
          this.list = [...this.list, ...res.data.list]
        }
        this.loading = false
        this.page++
      })
    },
    areasName(id) {
      let name
      if (this.schoolAreasList.length > 0) {
        for (const item of this.schoolAreasList) {
          if (String(item.id) === String(id)) {
            name = item.name
            break
          }
        }
      }
      return name
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
	.home {
		height: 100%;
	}
	/deep/.van-nav-bar__placeholder{
		.van-nav-bar {
			z-index: 10;
		}
	}
	.fixed {
		position: fixed;
		bottom: 20px;
		z-index: 99;
		margin: 0 auto;
		width: 80%;
	}
	/deep/.van-search__action:active{
		background-color: #fff;
	}
	/deep/.van-dropdown-menu__bar{
		box-shadow: none;
	}
	/deep/.van-popup--top{
		top: 5px;
		left: unset;
		right: 4px;
		width: 104px;
		box-shadow: 0 2px 10px 4px #eee;
		border-radius: 10px;
		.van-cell__title{
			text-align: center;
		}
		.van-cell__value{
			display: none;
		}
	}
	.van-sidebar-item--select::before {
		background: #11A0FA;
	}
	.list-content:after{
		content: '';
		display: block;
		width:111px;
	}
	.heart {
		background: url('~@/assets/web_heart_animation.png') no-repeat left;
		height: 40px;
		width: 60px;
		cursor: pointer;
		position: absolute;
		right:0px;
		background-size:2900%;
	}
	/*.heart:hover, .heart:focus{*/
	/*	background-position: right;*/
	/*}*/

	@-webkit-keyframes heartBlast {
		0% {
			background-position: left;
		}
		100% {
			background-position: right;
		}
	}

	@keyframes heartBlast {
		0% {
			background-position: left;
		}
		100% {
			background-position: right;
		}
	}

	.heartAnimation {
		display: block;
		-webkit-animation-name: heartBlast;
		animation-name: heartBlast;
		-webkit-animation-duration: .8s;
		animation-duration: .8s;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
		-webkit-animation-timing-function: steps(28);
		animation-timing-function: steps(28);
		background-position: right;
	}
</style>
