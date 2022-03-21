# activity-admin

### 页面工程数据接口

1. 页面整体数据结构
```js
{
	title: '', // 标题
	description: '', //描述
	coverImage: '', // 封面
	auther: '', // 作者
	script: '', // 页面插入脚本
	width: 375, // 高
	height: 644, // 宽
	pages: [], // 多页页面
	shareConfig: {}, // 微信分享配置
	pageMode: 0, // 渲染模式，用于扩展多种模式渲染，翻页h5/长页/PC页面等等
}
```
2. 多页页面的数据结构，对应到页面数据的pages
```js
{
	name: '',
	elements: [], // 页面元素
	commonStyle: {
		backgroundColor: '',
		backgroundImage: '',
		backgroundSize: 'cover'
	},
	config: {}
}
```
3. 元素数据结构,对应到页面数据的elements
```js
{
	elName: '', // 组件名
	animations: [], // 图层的动画,可以支持多个动画
	commonStyle: {}, // 公共样式，默认样式
	events: [], // 事件配置数据，每个图层可以添加多个事件
	propsValue: {}, // 属性参数
	value: '', // 绑定值
	valueType: 'String', // 值类型
	isForm: false // 是否是表单控件，用于表单提交时获取表单数据
}
```
### 编辑器操作
- 一个组件选择区，提供使用者选择需要的组件
- 一个编辑预览画板，提供使用者拖拽排序页面预览的功能
- 一个组件属性编辑，提供给使用者编辑组件内部props、公共样式和动画的功能

- 点击保存将页面数据提交到数据库。至于数据怎么转成静态 HTML方法有很多。- 页面数据我们全部都有，我们可以做页面的预渲染，骨架屏，ssr，编译时优化等等。而且我们也可以对产出的活动页做数据分析~有很多想象的空间。

### 如何渲染
我们已经能拿到整个页面数据，遍历pages渲染页面，遍历elements渲染组件，使用动态组件承载。
### 整体架构
1. 左侧展示所有的组件，中间部分是编辑区，右侧为属性编辑区

