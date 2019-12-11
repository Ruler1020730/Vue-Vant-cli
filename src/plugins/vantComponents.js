import Vue from 'vue'

// 1.布局
import {Cell, CellGroup} from 'vant'
Vue.use(Cell).use(CellGroup)

// 2.按钮
import {Button} from 'vant'
Vue.use(Button)

// 3.弹出层
import { Popup } from 'vant'
Vue.use(Popup)

// 4.TabBar
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem)
