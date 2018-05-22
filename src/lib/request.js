
import axios from 'axios';
import qs from 'qs';


const baseURL = '/user';

const headers = {
	'X-Requested-With': 'XMLHttpRequest',
	'Pragma': 'no-cache',
	'Expires': 0
};
export const httpCreate = (baseURL, transformRequest) => {
	const config = {};
	if (transformRequest) {
		config.transformRequest = transformRequest;
	}
	return axios.create(Object.assign({
		baseURL,
		timeout: 20000,
		withCredentials: true,
		headers,
	}, config));
};

// eslint-disable-next-line
export const http = httpCreate(baseURL, [function (data, headers) {
	return qs.stringify(data);
}]);


// eslint-disable-next-line
// export const http = httpCreate(baseURL);
export {LOGIN} from './login'

export default function() {
	return (res)=>{
		if(res.data){
			if(res.data.status=='login'){
				if(this.$route.name != loginRouter){
					this.$router.push({name:loginRouter});
				}
			} else if (res.data.status=='error' || res.data.status == 'authority'){
				this.$Message.error(res.data.message);
			} else if(res.data.status=='location'){
				location.href = res.data.location;
			} else if(res.data.status=='success'){
				res.ok = true;
			} else{
				console.error('unknow status');
			}
		}
		return res;
	};
}

export const errors =function() {
	return (err)=>{
		console.error(err);
		if(err){
			this.$Message.error(err.toString());
		}
	};
};

// export const login = (loginData) => {
// 	return http.post('/login',loginData);
// };

// export const resetPwd = (data) => {
// 	return http.post('/user/resetPwd',data);
// };

// export const codeImgUrl = () =>{
// 	return '/spoc-choiceschool/servlet/validateCodeServlet?t='+(new Date().getTime());
// };

// export const saveApp = (info) => {
// 	return http.post('/menu/saveMenu', info);
// };

// // isQuick=0/1
// export const saveQuickMenu = (id,isQuick) => {
// 	return http.post('/menu/saveQuickMenu',{id,isQuick});
// };
