/*
角色管理相关的API请求函数
*/
import request from '@/utils/request'
// 常量
const api_name = '/system/role'
export default {
  /*
  获取角色分页列表(带搜索)
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
新增角色
*/
  saveRole(role) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      // 传递json格式用 data:对象名字 ,也就是后端加了@RequestBody用data。。。没添加就使用params
      data: role
    })
  },
  /*
  编辑
  */
  getRoleId(id) {
    return request({
      url: `${api_name}/findRoleById/${id}`,
      method: 'get'
    })
  },
  /*
  更新
  */
  updateById(role) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    })
  },
  /*
  删除角色
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  /*
  批量删除
  */
  batchRemove(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  }
  /*
  获取角色分页列表(带搜索)
  */
/*  getPageList(page, limit, searchObj) {
    return request({
      // 接口路径
      url: `${api_name}/${page}/${limit}`,
      // 提交方式
      method: 'get',
      // 参数
      params: searchObj
    })
  },*/
}
