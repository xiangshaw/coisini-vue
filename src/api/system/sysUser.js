import request from '@/utils/request'

const api_name = '/system/user'

export default {
  /*
  获取用户分页列表(带搜索)
  */
  getPageList(searchObj) {
    return request({
      url: `${api_name}/list`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    })
  },
  /*
  根据id获取用户
  */
  getById(id) {
    return request({
      url: `${api_name}/findUserById/${id}`,
      method: 'get'
    })
  },
  /*
  保存用户
  */
  saveUser(role) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: role
    })
  },
  /*
  根据id修改用户
  */
  updateById(role) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    })
  },
  /*
  删除用户
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  // 更新用户状态
  updateStatus(id, status) {
    return request({
      url: `${api_name}/updateStatus/${id}/${status}`,
      method: 'get'
    })
  },
  /*
 根据用户id查询用户已分配的角色
 */
  getRolesByUserId(userId) {
    return request({
      url: `${api_name}/toAssign/${userId}`,
      method: 'get'
    })
  },
  /*
  分配角色
  */
  assignRoles(assignRoleVo) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      data: assignRoleVo
    })
  }
}
