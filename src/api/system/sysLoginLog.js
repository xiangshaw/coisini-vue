/*
登录日志相关的API请求函数
*/
import request from '@/utils/request'
// 常量
const api_name = '/system/loginLog'
export default {
  /*
  条件分页查询登录日志(带搜索)
  */
  getPageList(searchObj) {
    return request({
      // 接口路径
      url: `${api_name}/list`,
      // 提交方式
      method: 'get',
      // 参数
      params: searchObj
    })
  },

  /*
 条件分页查询登录日志(动态SQL查询，未使用)
 */
  getPageListV2(page, limit, searchObj) {
    return request({
      // 接口路径
      url: `${api_name}/v2/${page}/${limit}`,
      // 提交方式
      method: 'get',
      // 参数
      params: searchObj
    })
  },
  /*
 根据id查询登录日志
 */
  getById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    })
  },
  /*
  删除登录日志
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  /*
  批量删除登录日志
  */
  batchRemove(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  }
}
