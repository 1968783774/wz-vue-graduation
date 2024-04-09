<script>
export default {
  name: "cellInformation",
  data() {
    return {
      pageNum:1,
      pageSize:10,
      total:50,
      tableData: [],
      dialogVisible: false,
      formData: {
        neighbourhoodName: '',
        neighbourhoodAddress: '',
        floorRage: null,
        city: '',
        phone: ''
      },
    }
  },

  methods:{
    getAll() {
      this.$axios.get(this.$httpUrl + '/neighbourhood/list', {
            params: {}
          }
      ).then(res => {
        if (res.data.code === 200) {
          console.log(res.data)
          this.tableData = res.data.data
        } else {
          this.$message({
            message: '系统出错，请联系管理员',
            type: 'error'
          });
        }
      }).catch(error => {
        this.$message({
          message: error,
          type: 'error'
        });
      })
    },
    showForm() {
      this.dialogVisible = true;
      this.resetForm();
    },
    save() {
    },
    cancel() {
      this.dialogVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        neighbourhoodName: '',
        neighbourhoodAddress: '',
        floorRage: null,
        city: '',
        phone: ''
      };
    }
  },

  beforeMount() {
    this.getAll();
  },
}
</script>

<template>
  <el-container style="height: 100%">
    <el-header>
      <el-button @click="showForm">新增小区</el-button>
      <el-dialog :visible.sync="dialogVisible">
        <el-form label-width="80px">
          <el-form-item label="小区名称">
            <el-input v-model="formData.neighbourhoodName"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="formData.neighbourhoodAddress"></el-input>
          </el-form-item>
          <el-form-item label="占地面积">
            <el-input v-model="formData.floorRage"></el-input>
          </el-form-item>
          <el-form-item label="所在城市">
            <el-select v-model="formData.city" placeholder="请选择城市">
              <el-option label="北京" value="beijing"></el-option>
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="广州" value="guangzhou"></el-option>
              <el-option label="深圳" value="shenzhen"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="formData.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="save">确定</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-header>
    <el-main>
      <el-table :data="tableData" header-cell-style="background-color: rgba(242,242,242); color: black" stripe max-height="550px" style="width: 100%;border-radius: 10px">
        <el-table-column type="selection"></el-table-column>
        <el-table-column fixed prop="id" label="小区id" width="180"></el-table-column>
        <el-table-column prop="neighbourhoodName" label="小区名字" width="200"></el-table-column>
        <el-table-column prop="neighbourhoodAddress" label="地址" width="200"></el-table-column>
        <el-table-column prop="floorRage" label="占地面积" width="180"></el-table-column>
        <el-table-column prop="city" label="所在城市" width="200"></el-table-column>
        <el-table-column prop="phone" label="联系方式" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="300"></el-table-column>
      </el-table>
    </el-main>
    <el-footer style="margin-bottom: 20px">
      <el-divider></el-divider>
      <el-pagination style=" display: flex;justify-content: flex-end; /* 使子元素居右 */;margin-top: 10px"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="pageNum"
                     :page-sizes="[10, 20, 50]"
                     :page-size="pageSize"
                     layout="total, prev, pager, next,sizes, jumper"
                     :total="total">>
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<style scoped>
</style>