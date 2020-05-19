import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

function $dayjs(date) {
  return dayjs(date)
}
export default $dayjs
