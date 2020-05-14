import Vue from 'vue'

// 1.单元格
import { Cell, CellGroup } from 'vant'
Vue.use(Cell).use(CellGroup)

// 2.按钮
import { Button } from 'vant'
Vue.use(Button)

// 3.弹出层
import { Popup } from 'vant'
Vue.use(Popup)

// 4.TabBar
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

// 5.NavBar 顶部导航栏
import { NavBar } from 'vant'
Vue.use(NavBar)

// 6.Search 搜索框
import { Search } from 'vant'
Vue.use(Search)

// 7.布局
import { Row, Col } from 'vant'
Vue.use(Row).use(Col)

// 8.标签页
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)

// 9.侧边导航
import { Sidebar, SidebarItem } from 'vant'

Vue.use(Sidebar).use(SidebarItem)

// 10.列表
import { List } from 'vant'
Vue.use(List)

// 11.商品卡片
import { Card } from 'vant'
Vue.use(Card)

// 12.dinog弹窗
import { Dialog } from 'vant'
Vue.use(Dialog)

// 13.单选按钮
import { RadioGroup, Radio } from 'vant'
Vue.use(RadioGroup).use(Radio)

// 14.加载Loading
import { Loading } from 'vant'
Vue.use(Loading)

// 15.轻提示
import { Toast } from 'vant'
Vue.use(Toast, {
  duration: 3000
})

// 16.Checkbox 复选框
import { Checkbox, CheckboxGroup } from 'vant'
Vue.use(Checkbox).use(CheckboxGroup)

// 17.icon 图标
import { Icon } from 'vant'
Vue.use(Icon)

// 18.轮播图
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)

// 19.图片懒加载
import { Lazyload } from 'vant'
// options 为可选参数，无则不传
Vue.use(Lazyload)

// 20.九宫格
import { Grid, GridItem } from 'vant'
Vue.use(Grid).use(GridItem)

// 21.NoticeBar 通知栏
import { NoticeBar } from 'vant'
Vue.use(NoticeBar)

// 22.Image图片
import { Image } from 'vant'
Vue.use(Image)

// 23.Sticky
import { Sticky } from 'vant'
Vue.use(Sticky)

// 24.计数器
import { Stepper } from 'vant'
Vue.use(Stepper)

// 25.底部提交栏
import { SubmitBar } from 'vant'
Vue.use(SubmitBar)

// 26.分割线
import { Divider } from 'vant'
Vue.use(Divider)

// 27.商品导航
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)

// 28.商品规格
import { Sku } from 'vant'
Vue.use(Sku)

// 29.输入框
import { Field } from 'vant'
Vue.use(Field)

// 30.倒计时
import { CountDown } from 'vant'
Vue.use(CountDown)

// 31.面板
import { Panel } from 'vant'
Vue.use(Panel)

// 32.密码输入框
import { PasswordInput, NumberKeyboard } from 'vant'
Vue.use(PasswordInput)
Vue.use(NumberKeyboard)

// 33.遮罩层
import { Overlay } from 'vant'
Vue.use(Overlay)

// 34.下拉选项
import { DropdownMenu, DropdownItem } from 'vant'
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

// 35.日期时间选择
import { DatetimePicker } from 'vant'
Vue.use(DatetimePicker)

// 36. 手风琴
import { Collapse, CollapseItem } from 'vant'
Vue.use(Collapse)
Vue.use(CollapseItem)

// 37. 选择器
import { Picker } from 'vant'
Vue.use(Picker)

// 37. 上传
import { Uploader } from 'vant'
Vue.use(Uploader)

import { ImagePreview } from 'vant'
Vue.use(ImagePreview)

import { TreeSelect } from 'vant'
Vue.use(TreeSelect)

import { Calendar } from 'vant'
Vue.use(Calendar)
