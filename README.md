# activity-admin

### 页面工程数据接口

我们的整个项目是按照：元素 => 页面 => 工程（画布） 层层递进，元素组成页面，页面组成工程，不管从数据结构，还是dom布局上都是如此。
每个层级有自己的特有属性，比如工程级别的scale，画布大小，页面级别的背景图，元素级别的放大缩小等等

1. 工程整体数据结构
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
### tudo
1. 图片素材库, 统一素材


