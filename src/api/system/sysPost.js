/*
岗位管理相关的API请求函数
*/
import request from '@/utils/request'
// 常量
const api_name = '/system/post'
export default {
  /*
  获取岗位分页列表(带搜索)
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
  删除岗位
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  /*
  新增岗位
  */
  savePost(sysPost) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      // 传递json格式用 data:对象名字 ,也就是后端加了@RequestBody用data。。。没添加就使用params
      data: sysPost
    })
  },
  /*
  编辑
  */
  getPostId(id) {
    return request({
      url: `${api_name}/findPostById/${id}`,
      method: 'get'
    })
  },

  /*
  更新
  */
  updateById(sysPost) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: sysPost
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
  },
  // 更新用户状态
  updateStatus(id, status) {
    return request({
      url: `${api_name}/updateStatus/${id}/${status}`,
      method: 'get'
    })
  }
}
