import { httpGet, httpPost } from './http';

const base = 'https://cnodejs.org/api/v1';

export const getorglist = (params = {}) => httpGet({ url: `${base}/topics`, params })

export const getIndexList = ({id, page, limit}) => httpGet({ url: `${base}/topics?tab=${id}&page=${page}&limit=${limit}` })
