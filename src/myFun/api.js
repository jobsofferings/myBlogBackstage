import http from './server'
// export const checkedLogin = p => http.post('/checkedLogin', p);相当于
// export const checkedLogin = (p) => http.post('/checkedLogin', p);

// 注意，如果需要部署到服务器上,proxy属性删除,
// 接口加前缀 http://134.175.103.75:4397

// let port = 'http://134.175.103.75:4397';
// 获取所有种类的文章
export const getIPDataApi = p => http.post('/getIPData', p);
// 获取明星文章, 非详情, 带长度
export const getStarArticlesApi = p => http.post('/getStarArticles', p);
// 获得组别数量及组别种类名
export const getAllGroupLengthApi = p => http.post('/getAllGroupLength', p);