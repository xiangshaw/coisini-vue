/*
岗位管理相关的API请求函数
*/
import request from '@/utils/request'
import {
  API_POST_BATCH,
  API_POST_ID,
  API_POST_LIST,
  API_POST_REMOVE,
  API_POST_SAVE, API_POST_STATUS,
  API_POST_UPDATE
} from '@/constants/api'

export default {
  /*
  获取岗位分页列表(带搜索)
  */
  getPageList(searchObj) {
    return request({
      // 接口路径
      url: API_POST_LIST,
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
      url: API_POST_REMOVE + '/' + id,
      method: 'delete'
    })
  },
  /*
  新增岗位
  */
  savePost(sysPost) {
    return request({
      url: API_POST_SAVE,
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
      url: API_POST_ID + '/' + id,
      method: 'get'
    })
  },

  /*
  更新
  */
  updateById(sysPost) {
    return request({
      url: API_POST_UPDATE,
      method: 'put',
      data: sysPost
    })
  },
  /*
  批量删除
  */
  batchRemove(idList) {
    return request({
      url: API_POST_BATCH,
      method: 'delete',
      data: idList
    })
  },
  // 更新岗位状态
  updateStatus(id, status) {
    return request({
      url: API_POST_STATUS + '/' + id + '/' + status,
      method: 'get'
    })
  }
}
