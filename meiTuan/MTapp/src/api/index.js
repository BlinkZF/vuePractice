// 存储所有获取数据的接口
import axios from '@/axios.js'

let api = {
  getSearchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearch (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getNav (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  getResultsByKeywords (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  getRecommend (params) {
    return axios.get('/api/meituan/list/recommend.json', params)
  },
  getGoodsList (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  // 城市搜索模块
  getCityList (params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  getProvince (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  getHot (params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  getRecents (params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  // 获取当前地理位置
  getPosition (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  getLogin (params) {
    return axios.get('/api/meituan/login', {params})
  },
  getRegister (params) {
    return axios.get('/api/meituan/register', {params})
  }
}
export default api
