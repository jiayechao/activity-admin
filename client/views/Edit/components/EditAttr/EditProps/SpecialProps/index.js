import Text from './text.vue'
import Src from './src.vue'
import Fit from './fit.vue'

// 要保证你的组件的props有这些参数
export default {
  [Text.name]: Text,
  [Src.name]: Src,
  [Fit.name]: Fit
}