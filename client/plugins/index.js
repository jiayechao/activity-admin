import AdText from './components/AdText'
import AdImg from './components/AdImg'
// 所有组件列表
const components = [
	AdText,
	AdImg
]
// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
	// 判断是否安装，安装过就不继续往下执行
	if (install.installed) return
	install.installed = true
	// 遍历注册所有组件
	components.map(component => Vue.component(component.name, component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

let componentList = {};

components.forEach(item => {
	componentList[item.name] = item
})

export {
	AdText,
	AdImg,
	componentList
}

export default {
	install,
	// 所有组件，必须具有 install，才能使用 Vue.use()
}
