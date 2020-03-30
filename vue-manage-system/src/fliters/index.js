import { Switch } from "element-ui";

/**
 * 合作伙伴类型
 * @param  {Number} type 类型码
 * @return {String}      类型描述
 */
export let getPartnerType = function (type) {
	switch (type) {
		case 0:
			return '小绿人';
			break;
		case 1:
			return '电动汽车物业';
			break;
		case 2:
			return '安装商';
			break;
		case 3:
			return '4S店';
			break;
		case 4:
			return '车企';
			break;
		case 5:
			return '自行车物业';
			break;
		case 6:
			return '自行车站主';
			break;
		case 7:
			return '代理商';
			break;
		default:
			return '';
			break;
	}
}
/**
 * 分成类型
 * @param  {Number} type 类型码
 * @return {String}      类型描述
 */
export let getProrationType = function (type) {
	switch (type) {
		case 1:
			return '按比例分成';
			break;
		case 2:
			return '抄表';
			break;
		case 3:
			return '小绿人收取管理费';
			break;
		case 4:
			return '小绿人资费提成';
			break;
		case 5:
			return '系统度数';
			break;
		case 6:
			return '按梯度分成';
			break;
		case 7:
			return '扣除电费分成';
			break;
		case 8:
			return '订单数提成';
			break;
		case 9:
			return '扣除订单数服务费提成';
			break;
		case -1:
			return '按业务类型结算';
			break;
		case 99:
			return '无结算';
			break;
		default:
			return '';
			break;
	}
}
/**
 * 结算周期
 * @param  {Number} type 类型码
 * @return {String}      周期描述
 */
export let getTimecycleType = function (type) {
	switch (type) {
		case 1:
			return '日结';
			break;
		case 2:
			return '周结';
			break;
		case 3:
			return '月结';
			break;
		case 4:
			return '季结';
			break;
		case 5:
			return '半月结';
			break;
		case 6:
			return '半年';
			break;
		case 7:
			return '两月结';
			break;
		case 8:
			return '实时结算';
			break;
		default:
			return '';
			break;
	}
}
/**
 * 公司主体类型
 * @param  {Number} type 类型码
 * @return {String}      类型描述
 */
export let getXlvrenType = function (type) {
	switch (type) {
		case 1:
			return "深圳市绿色星球互联新能源科技有限公司";
			break;
		case 2:
			return "北京绿星小绿人科技有限公司";
			break;
		default:
			return "";
			break;
			break;
	}
}
/**
 * 时间戳转换成日期
 * @param  {String} timestamp 时间戳
 * @return {String}           日期
 */
export function timeCovert(timestamp) {
	timestamp = timestamp.length == 10 ? timestamp * 1000 : timestamp;
	var now = new Date(timestamp);
	var year = now.getFullYear();  //取得4位数的年份
	var month = now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
	var date = now.getDate();      //返回日期月份中的天数（1到31）
	var hour = now.getHours();     //返回日期中的小时数（0到23）
	var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
	var second = now.getSeconds(); //返回日期中的秒数（0到59）
	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

/**
 * 拓展-客户类型说明
 * @param {Number} type 类型码
 */
export function expandCustomType(type) {
	switch (type) {
		case 3001:
			return `合伙人或合作方`;
			break;
		case 3002:
			return `政府人员`;
			break;
		case 3003:
			return `物业公司人员`;
			break;
		case 3004:
			return `快递公司人员`;
			break;
		case 3005:
			return `外卖公司人员`;
			break;
		case 3006:
			return `其他`;
			break;
		default:
			return ``;
			break;
	}
}
/**
 * 拓展-客户状态
 * @param {Number} status 状态码
 */
export function expandCustomStatus (status) {
	switch (status) {
		case 1001:
			return `待指派`;
			break;
		case 1002:
			return `待跟进`;
			break;
		case 1003: 
			return `洽谈中`;
			break;
		case 1004: 
			return `已签约`;
			break;
		case 1005: 
			return `关闭`;
			break;
		default:
			return ``;
			break;
	}
}
/**
 * 拓展-站点类型描述
 * @param {Number} type 站点类型码
 */
export function expandSiteType (type) {
	switch (type) {
		case 2001:
			return `工业园区`;
			break;
		case 2002:
			return `科技园区/写字楼`;
			break;
		case 2003:
			return `商业广场/街区`;
			break;
		case 2004:
			return `大学校园`;
			break;
		case 2005:
			return `快递站点`;
			break;
		case 2006:
			return `外卖站点`;
			break;
		case 2007:
			return `城中村/城乡结合部`;
			break;
		case 2008:
			return `高层小区`;
			break;
		case 2009:
			return `公寓/宿舍`;
			break;
		case 2010:
			return `老旧小区/底层小区`;
			break;
		case 2011:
			return `其他`;
			break;
		default:
			return ``;
			break;
	}
}

export function expandSiteStatus (status) {
	switch (status) {
		case 1001:
			return `待指派`;
			break;
		case 1002:
			return `待跟进`;
			break;
		case 1003: 
			return `洽谈中`;
			break;
		case 1004: 
			return `已签约`;
			break;
		case 1005: 
			return `关闭`;
			break;
		default:
			return ``;
			break;
	}
}