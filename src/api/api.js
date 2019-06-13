import { httpGet, httpPost } from './http';

const base = 'https://cnodejs.org/api/v1';

// 首页列表
export const getIndexList = ({id, page, limit}) => httpGet({ url: `${base}/topics?tab=${id}&page=${page}&limit=${limit}` })

// 首页列表详情
export const getIndexListDstail = (id) => httpGet({ url: `${base}/topic/${id}` })