<template>
  <div class="app-container">

    <!-- 工具条 -->
    <div class="tools-div">
      <el-button type="success" icon="el-icon-plus" size="mini" @click="add()">添 加</el-button>
    </div>
    <el-table
      :data="sysDeptList"
      style="width: 100%;margin-bottom: 20px;margin-top: 10px;"
      row-key="id"
      border
      :default-expand-all="false"
      :tree-props="{children: 'children'}"
    >

      <el-table-column prop="deptName" label="部门名称" />
      <el-table-column prop="leader" label="部门负责人" />
      <el-table-column prop="phone" label="部门电话" />
      <el-table-column prop="sortValue" label="排序" />
      <el-table-column prop="createBy" label="创建者" />
      <el-table-column label="状态" >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status === false"
            @change="switchStatus(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="160" />
      <el-table-column label="操作" width="180" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button v-if="scope.row.type !== 2" type="success" icon="el-icon-plus" size="mini" title="添加下级节点" @click="add(scope.row)" />
          <el-button type="primary" icon="el-icon-edit" size="mini" title="修改" @click="edit(scope.row)" />
          <el-button type="danger" icon="el-icon-delete" size="mini" title="删除" :disabled="scope.row.children.length > 0" @click="removeDataById(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="40%">
      <el-form ref="dataForm" :model="sysDept" label-width="150px" size="small" style="padding-right: 40px;">
        <el-form-item v-if="sysDept.id === ''" label="上级部门">
          <el-input v-model="sysDept.parentName" disabled="true" />
        </el-form-item>
        <el-form-item label="部门名称" prop="deptName">
          <el-input v-model="sysDept.deptName" />
        </el-form-item>
        <el-form-item label="负责人" prop="leader">
          <el-input v-model="sysDept.leader" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="sysDept.phone" maxlength="11" show-word-limit/>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="sysDept.email" />
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="sysDept.sortValue" controls-position="right" :min="0" />
        </el-form-item>
        <el-form-item label="状态" prop="type">
          <el-radio-group v-model="sysDept.status">
            <el-radio :label="false">正常</el-radio>
            <el-radio :label="true">停用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="创建者" prop="createBy">
          <el-input v-model="sysDept.createBy" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" icon="el-icon-refresh-right" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" icon="el-icon-check" size="small" @click="saveOrUpdate()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/api/system/sysDept'
const defaultForm = {
  id: '',
  parentId: '',
  phone: '',
  email: '',
  deptName: '',
  leader: '',
  sortValue: 1,
  createBy: '',
  status: false
}
export default {
  // 定义数据
  data() {
    return {
      sysDeptList: [],
      expandKeys: [], // 需要自动展开的项

      typeDisabled: false,
      type0Disabled: false,
      type1Disabled: false,
      type2Disabled: false,
      dialogTitle: '',

      dialogVisible: false,
      sysDept: defaultForm,
      saveBtnDisabled: false
    }
  },
  // 当页面加载时获取数据
  created() { // 页面渲染之前执行
    this.fetchData()
  },
  methods: {
    // 调用api层获取数据库中的数据
    fetchData() {
      console.log('加载列表')
      api.findNodes().then(response => {
        this.sysDeptList = response.data
        console.log(this.sysDeptList)
      })
    },
    // 切换菜单状态
    switchStatus(row) {
      row.status = row.status === false
      api.updateStatus(row.id, row.status).then(response => {
        if (response.code) {
          this.$message.success(response.message || '操作成功')
          this.fetchData()
        }
      })
    },

    // 根据id删除数据
    removeDataById(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // promise
        // 点击确定，远程调用ajax
        return api.removeById(id)
      }).then((response) => {
        this.fetchData()
        this.$message({
          type: 'success',
          message: response.message
        })
      }).catch(() => {
        this.$message.info('取消删除')
      })
    },

    // 弹出添加或更新的表单
    add(row) {
      debugger
      this.typeDisabled = false
      this.dialogTitle = '添加下级节点'
      this.dialogVisible = true

      this.sysDept = Object.assign({}, defaultForm)
      this.sysDept.id = ''
      if (row) {
        this.sysDept.parentId = row.id
        this.sysDept.parentName = row.deptName
        if (row.type === 0) {
          this.sysDept.type = 1
          this.typeDisabled = false
          this.type0Disabled = false
          this.type1Disabled = false
          this.type2Disabled = true
        } else if (row.type === 1) {
          this.sysDept.type = 2
          this.typeDisabled = true
        }
      } else {
        this.dialogTitle = '添加目录节点'
        this.sysDept.type = 0
        this.sysDept.component = 'Layout'
        this.sysDept.parentId = 0
        this.typeDisabled = true
      }
    },

    // 编辑
    edit(row) {
      this.dialogTitle = '修改部门'
      this.dialogVisible = true

      this.sysDept = Object.assign({}, row)
      this.typeDisabled = true
    },

    // 添加或更新
    saveOrUpdate() {
      if (this.sysDept.type === 0 && this.sysDept.parentId !== 0) {
        this.sysDept.component = 'ParentView'
      }
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.saveBtnDisabled = true // 防止表单重复提交
          if (!this.sysDept.id) {
            this.save()
          } else {
            this.update()
          }
        }
      })
    },

    // 添加
    save() {
      api.saveDept(this.sysDept).then(response => {
        this.$message.success(response.message || '操作成功')
        this.dialogVisible = false
        this.fetchData(this.page)
      })
    },

    // 更新
    update() {
      api.updateById(this.sysDept).then(response => {
        this.$message.success(response.message || '操作成功')
        this.dialogVisible = false
        this.fetchData()
      })
    }
  }
}
</script>
