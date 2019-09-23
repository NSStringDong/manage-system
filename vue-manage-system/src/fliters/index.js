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