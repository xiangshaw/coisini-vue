import request from '@/utils/request'

/*
菜单管理相关的API请求函数
*/
const api_name = '/system/dept'

export default {

  /*
  获取部门列表
  */
  findNodes() {
    return request({
      url: `${api_name}/findNodes`,
      method: 'get'
    })
  },

  /*
  删除
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },

  /*
  保存
  */
  saveDept(sysDept) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: sysDept
    })
  },

  /*
  更新
  */
  updateById(sysDept) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: sysDept
    })
  },
  // 更新菜单状态
  updateStatus(id, status) {
    return request({
      url: `${api_name}/updateStatus/${id}/${status}`,
      method: 'get'
    })
  },

  /*
  根据岗位id查询已分配的部门
  */
  getPostByDeptId(postId) {
    return request({
      url: `${api_name}/getPostByDept/${postId}`,
      method: 'get'
    })
  },
  /*
  给角色分配部门
  */
  deptAssign(deptVo) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      data: deptVo
    })
  },
  /*
 根据角色id查询已分配的部门
 */
  getRoleByDeptId(roleId) {
    return request({
      url: `${api_name}/toAssign/${roleId}`,
      method: 'get'
    })
  }
}
