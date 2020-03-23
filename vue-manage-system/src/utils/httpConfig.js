let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://47.112.158.89/';
	// baseUrl = 'http://192.168.4.68:8000/api/';
}

/*
if (window.domain === 'www.xlvren.com') {

} else {
	baseUrl = 'http://192.168.11.64:8083/oms/';
}
*/

export let axiosConfig = {
	timeout: 20000,
	baseUrl: baseUrl
};
export function rootUrl() {
	return baseUrl;
};