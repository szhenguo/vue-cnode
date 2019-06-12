import axios from 'axios';


// get 请求
export function httpGet({
  url,
  params = {}
}) {
  return axios.get(url, { params })
}

// post请求
export function httpPost({
  url,
  data = {},
  params = {}
}) {
  axios({
    url,
    method: 'post',
    // 发送的数据
    data,
    // url参数
    params
  })
}