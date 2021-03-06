import { create_UUID } from '@common/utils'
import { cloneDeep, merge } from "lodash";
import {global_config} from '@client/config'

// 元素所有的配置字段
let elementConfig = {
	elName: '', // 组件名
	animations: [], // 动画
	commonStyle: {
		position: 'absolute',
		width: global_config.width,
		height: 30,
		top: 200,
		left: 0,
		rotate: 0,
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		marginTop: 0,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 0,
		borderWidth: 0,
		borderColor: '',
		borderStyle: 'solid',
		borderRadius: 0,
		boxShadow: '',
		fontSize: 16,
		fontWeight: 500,
		lineHeight: 1.4,
		letterSpacing: 0,
		textAlign: 'center',
		color: '#000000',
		backgroundColor: '',
		backgroundImage: '',
		backgroundSize: 'cover',
		opacity: 1,
		zIndex: 1
	}, // 公共样式
	events: [], // 事件
	propsValue: {}, // 属性参数
	value: '', // 绑定值
	valueType: 'String' // 值类型
}
// 页面配置信息字段
let pageConfig = {
	name: '新的页面',
	elements: [],
	commonStyle: {
		backgroundColor: '',
		backgroundImage: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
	},
	config: {}
}
// 项目配置信息字段
let projectConfig = {
	name: '',
	title: '新的项目',
	description: '你创建了一个新的H5',
	coverImage: '',
	auther: '',
	script: '',
	width: global_config.width,
	height: global_config.height,
	pages: []
}

// 创建一个元素，为这个元素加上配置参数
let getElementConfig = function (element, extendStyle = {}) {
	let elementData = cloneDeep(element)
	let type = elementData.valueType || 'String' // 默认string类型
	let dict = {
		'Sting': '',
		'Array': [],
		'Object': {},
		'Boolean': false,
		'Number': 0
		// 待扩展数据类型
	}
	let elementConfigData = cloneDeep(elementConfig)
	let config = {
		uuid: create_UUID(),
		...elementConfigData,
		elName: elementData.elName,
		propsValue: cloneDeep(elementData.needProps || {})
	}
	// 样式
	config.commonStyle = merge(config.commonStyle, elementData.defaultStyle)
	config.commonStyle = merge(config.commonStyle, extendStyle)

	config.value = element.defaultValue || dict[type];
	config.valueType = type;
	return config;
}
// 复制一个元素
let copyElement = function(element, extendStyle = {}){
	element = cloneDeep(element)
	element.uuid = create_UUID();
	element.commonStyle = merge(element.commonStyle, extendStyle)
	// 加上一点偏移量，以作区分
	element.commonStyle.top = element.commonStyle.top + 10
	element.commonStyle.left = element.commonStyle.left + 10
	return element
}

// 初始化一个页面配置
let getPageConfig = function () {
	return {
		uuid: create_UUID(),
		...cloneDeep(pageConfig)
	}
}
// 复制一个页面
let copyPage = function(data){
	let pageData = cloneDeep(data);
	pageData.uuid = create_UUID();
	pageData.elements = pageData.elements.map(element => {
		// 所有的元素也要单独复制
		return copyElement(element)
	})
	return pageData;
}

// 初始化一个项目配置
let getProjectConfig = function () {
	let project = cloneDeep(projectConfig)
	let onePage = getPageConfig()
	project.pages.push({
		...onePage
	})
	return { ...project }
}

/**
 * 获取样式(页面和元素)
 * @param styleObj
 * @param scalePoint 缩放比例
 */
let getCommonStyle = function (styleObj, scalingRatio = 1) {
	let needUnitStr = ['width', 'height','top', 'left', 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom', 'borderWidth','fontSize', 'borderRadius', 'letterSpacing']
	let style ={}

	for (let key in styleObj){
		if(needUnitStr.includes(key)){
			style[key] = (styleObj[key] * scalingRatio) + 'px'
		}else{
			style[key] = styleObj[key]
		}
	}
	style.transform = `rotate(${style.rotate}deg)`
	style.backgroundImage = style.backgroundImage ? `url(${style.backgroundImage})` : '';
	return style;
}

export {
	elementConfig,
	pageConfig,
	projectConfig,
	getElementConfig,
	getPageConfig,
	getProjectConfig,
	copyPage,
	copyElement,
	getCommonStyle
}
