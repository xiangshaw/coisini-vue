/*
菜单管理相关的API请求函数
*/
import request from '@/utils/request'
import {
  API_DEPT_DO_ASSIGN,
  API_DEPT_LIST,
  API_DEPT_POST,
  API_DEPT_REMOVE,
  API_DEPT_SAVE,
  API_DEPT_STATUS, API_DEPT_TO_ASSIGN,
  API_DEPT_UPDATE
} from '@/constants/api'

export default {

  /*
  获取部门列表
  */
  findNodes() {
    return request({
      url: API_DEPT_LIST,
      method: 'get'
    })
  },

  /*
  删除
  */
  removeById(id) {
    return request({
      url: API_DEPT_REMOVE + '/' + id,
      method: 'delete'
    })
  },

  /*
  保存
  */
  saveDept(sysDept) {
    return request({
      url: API_DEPT_SAVE,
      method: 'post',
      data: sysDept
    })
  },

  /*
  更新
  */
  updateById(sysDept) {
    return request({
      url: API_DEPT_UPDATE,
      method: 'put',
      data: sysDept
    })
  },
  // 更新菜单状态
  updateStatus(id, status) {
    return request({
      url: API_DEPT_STATUS + '/' + id + '/' + status,
      method: 'get'
    })
  },

  /*
  根据岗位id查询已分配的部门
  */
  getPostByDeptId(postId) {
    return request({
      url: API_DEPT_POST + '/' + postId,
      method: 'get'
    })
  },
  /*
  给角色分配部门
  */
  deptAssign(deptVo) {
    return request({
      url: API_DEPT_DO_ASSIGN,
      method: 'post',
      data: deptVo
    })
  },
  /*
 根据角色id查询已分配的部门
 */
  getRoleByDeptId(roleId) {
    return request({
      url: API_DEPT_TO_ASSIGN + '/' + roleId,
      method: 'get'
    })
  }
}
