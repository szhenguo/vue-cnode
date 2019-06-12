import { httpGet, httpPost } from './http';


export const getorglist = (params = {}) => httpGet({ url: 'https://cnodejs.org/api/v1/topics', params })

console.log("qwe")