// 接口常量定义
// ==================== user.js ====================
// 用户登录
export const API_USER_LOGIN = '/api/v1/index/login'
// 用户信息
export const API_USER_INFO = '/api/v1/index/info'
// 用户注销
export const API_USER_LOGOUT = '/api/v1/index/logout'
// 获取验证码
export const API_LOGIN_CODE = '/api/v1/index/code'

// ==================== sysDept.js ====================
// 获取部门列表
export const API_DEPT_LIST = '/api/v1/dept/findNodes'
// 删除部门
export const API_DEPT_REMOVE = '/api/v1/dept/remove'
// 保存部门
export const API_DEPT_SAVE = '/api/v1/dept/save'
// 更新部门
export const API_DEPT_UPDATE = '/api/v1/dept/update'
// 更新菜单状态
export const API_DEPT_STATUS = '/api/v1/dept/updateStatus'
// 根据岗位id查询已分配的部门
export const API_DEPT_POST = '/api/v1/dept/getPostByDept'
// 给角色分配部门
export const API_DEPT_DO_ASSIGN = '/api/v1/dept/doAssign'
// 根据角色id查询已分配的部门
export const API_DEPT_TO_ASSIGN = '/api/v1/dept/toAssign'

// ==================== sysMenu.js ====================
// 获取权限(菜单/功能)列表
export const API_MENU_LIST = '/api/v1/menu/findNodes'
// 保存菜单
export const API_MENU_SAVE = '/api/v1/menu/save'
// 更新菜单
export const API_MENU_UPDATE = '/api/v1/menu/update'
// 删除菜单
export const API_MENU_REMOVE = '/api/v1/menu/remove'
// 查看某个角色的权限列表
export const API_MENU_TO_ASSIGN = '/api/v1/menu/toAssign'
// 给某个角色授权
export const API_MENU_DO_ASSIGN = '/api/v1/menu/doAssign'
// 更新菜单状态
export const API_MENU_STATUS = '/api/v1/menu/updateStatus'

// ==================== sysPost.js ====================
// 获取岗位分页列表
export const API_POST_LIST = '/api/v1/post/list'
// 删除岗位
export const API_POST_REMOVE = '/api/v1/post/remove'
// 新增岗位
export const API_POST_SAVE = '/api/v1/post/save'
// 根据id查询岗位
export const API_POST_ID = '/api/v1/post/findPostById'
// 更新岗位
export const API_POST_UPDATE = '/api/v1/post/update'
// 批量删除岗位
export const API_POST_BATCH = '/api/v1/post/batchRemove'
// 更新岗位状态
export const API_POST_STATUS = '/api/v1/post/updateStatus'

// ==================== sysRole.js ====================
// 获取角色分页列表
export const API_ROLE_LIST = '/api/v1/role/list'
// 新增角色
export const API_ROLE_SAVE = '/api/v1/role/save'
// 根据id查询角色
export const API_ROLE_ID = '/api/v1/role/findRoleById'
// 更新角色
export const API_ROLE_UPDATE = '/api/v1/role/update'
// 删除角色
export const API_ROLE_REMOVE = '/api/v1/role/remove'
// 批量删除角色
export const API_ROLE_BATCH = '/api/v1/role/batchRemove'

// ==================== sysUser.js ====================
// 获取用户分页列表
export const API_USER_LIST = '/api/v1/user/list'
// 新增用户
export const API_USER_SAVE = '/api/v1/user/save'
// 根据id查询用户
export const API_USER_ID = '/api/v1/user/findUserById'
// 更新用户
export const API_USER_UPDATE = '/api/v1/user/update'
// 删除用户
export const API_USER_REMOVE = '/api/v1/user/remove'
// 更新用户状态
export const API_USER_STATUS = '/api/v1/user/updateStatus'
// 根据用户id查询用户已分配的角色
export const API_USER_TO_ASSIGN = '/api/v1/user/toAssign'
// 给用户分配角色
export const API_USER_DO_ASSIGN = '/api/v1/user/doAssign'

// ==================== sysLoginLog.js ====================
// 条件分页查询登录日志
export const API_LOGIN_LOG_LIST = '/api/v1/loginLog/list'
// 根据id查询登录日志
export const API_LOGIN_LOG_GET = '/api/v1/loginLog/get'
// 删除登录日志
export const API_LOGIN_LOG_REMOVE = '/api/v1/loginLog/remove'
// 批量删除登录日志
export const API_LOGIN_LOG_BATCH = '/api/v1/loginLog/batchRemove'

// ==================== sysOperLog.js ====================
// 条件分页查询操作日志
export const API_OPER_LOG_LIST = '/api/v1/operLog/list'
// 根据id查询操作日志
export const API_OPER_LOG_GET = '/api/v1/operLog/get'
// 删除操作日志
export const API_OPER_LOG_REMOVE = '/api/v1/operLog/remove'
// 批量删除操作日志
export const API_OPER_LOG_BATCH = '/api/v1/operLog/batchRemove'
