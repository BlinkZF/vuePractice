// 存储所有获取数据的接口
import axios from '@/axios.js'

let api = {
  // 查询最近热门搜索
  getSearchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 搜索框列表数据获取
  getSearch (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  // 首页左侧导航条 导航数据
  getNav (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  // 首页下方（有格调内容区数据获取）
  getResultsByKeywords (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  // 推荐产品列表
  getRecommend (params) {
    return axios.get('/api/meituan/list/recommend.json', params)
  },
  // 获取分类列表
  getClassify(params){
    return axios.get('/api/meituan/list/classify.json', params)
  },
  // 产品展示列表数据获取
  getGoodsList (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  // 城市搜索模块
  getCityList (params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  // 获取省份列表
  getProvince (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  // 获取热门城市
  getHot (params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  // 最近搜索城市
  getRecents (params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  // 获取当前地理位置
  getPosition (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  // 登陆
  getLogin (params) {
    return axios.get('/api/meituan/login', {params})
  },
  // 注册
  getRegister (params) {
    return axios.get('/api/meituan/register', {params})
  }
}
export default api
