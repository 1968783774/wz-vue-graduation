<script>
import {right} from "core-js/internals/array-reduce";

export default {
  name: "StaffManagement",
  data() {
    return{
      options: [],
      selectedRows: [],
      value: null,
      formData: {
        id: null,
        name: '',
        neighbourhoodId: null,
        total:null,
      },
      tableData:[
        {
          date: '岗位1(10)',
        }, {
          date: '岗位12(11)',
        }, {
          date: '岗位12(11)',
        }, {
          date: '2016-05-03',
        }
      ],
      positionChart1: null,
      dialogTitle: '',
      dialogVisible: false,
      isSaving: false,
    }
  },
  methods: {
    right,
    // 单个删除
    deleteById(id) {
      this.$commonMethods.handleDelete(this,id,this.$httpUrl+'/position/delete')
    },
    // 获取所有数据
    getAllData() {
      this.$commonMethods.getAll(this,this.$httpUrl+'/position/list')
    },
    save() {
      this.$commonMethods.save(this,this.$httpUrl+'/position/add')
    },
    // 批量删除
    deleteSelectedIds() {
      this.$commonMethods.deleteSelectedIds(this,this.$httpUrl+'/position/delete')
    },

    update() {
      this.$commonMethods.update(this,this.$httpUrl+'/position/update')
    },

    initChart() {
      this.positionChart1 = this.$echarts.init(this.$refs.positionChart1);
      this.renderPieChart();
    },

    getNeighbourhoodNameList() {
      this.$axios.get(this.$httpUrl +'/neighbourhood/nameList')
          .then(res => {
            if (res.data.code === 200) {
              this.options = res.data.data;
              console.log(res.data.data)
            }
          })
          .catch(err => {
            this.$message.error(err);
          });
    },
    showForm() {
      this.dialogTitle = '新增岗位';
      this.dialogVisible = true;
      this.resetForm();
    },

    saveOrUpdate() {
      if (this.dialogTitle === '新增岗位'){
        this.save();
      }else {
        this.update();
      }
    },

    handleSelectionChange(selectedItems) {
      this.selectedRows = selectedItems.map(item => item.id);
    },

    handleEdit(row) {
      this.dialogVisible = true;
      this.dialogTitle = '修改岗位信息';
      this.formData = { ...row };
    },

    filter() {
      if (this.value === null||this.value.length === 0) {
        return
      }
      console.log(this.value)
      this.$commonMethods.getDataByParams(this,this.$httpUrl+'/position/list/nbhId',this.value)
    },
    cancel() {
      this.dialogVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        id: null,
        name: '',
        neighbourhoodId: null,
        total:null,
      };
    },
  },
  mounted() {

  },
  beforeMount() {
    this.$store.commit("setTypeMenu",{menuType:"property"})
  },
}
</script>

<template>
  <div>
    <el-dialog :visible.sync="dialogVisible">
      <span slot="title" style="font-size: 20px;margin-bottom: 10px">{{dialogTitle}}</span>
      <el-form label-width="80px">
        <el-form-item label="岗位名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="所属小区">
          <el-select v-model="formData.neighbourhoodId">
            <el-option
                v-for="item in this.options"
                :key="item.id"
                :label="item.neighbourhoodName"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="岗位需求人数">
          <el-input v-model="formData.total"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  :loading="isSaving" @click="saveOrUpdate">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <div style="margin-bottom: 20px">

      <el-select class="position-select"
                 v-model="value"
                 clearable
                 placeholder="请选择小区"
                 @clear="getAllData"
                 @change="filter">
        <el-option
            v-for="item in this.options"
            :key="item.id"
            :label="item.neighbourhoodName"
            :value="item.id">
        </el-option>
      </el-select>
      <el-button plain round type="primary" @click="showForm">新增岗位</el-button>
      <el-button plain round type="warning" @click="deleteSelectedIds">删除岗位</el-button>
      <el-button plain round type="success">启用</el-button>
      <el-button plain round type="danger">禁用</el-button>
    </div>
    <div class="separator"></div>
    <div style="display: flex;flex-wrap: wrap">
      <el-card class="position-card2">
        <el-table
            :data="tableData"
            style="width: 200px">
          <el-table-column
              prop="date"
              label="全部岗位"
              width="180">
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<style scoped>

.position-select{
  margin-left: 20px;
  margin-right: 20px;
}

.separator {
  height: 10px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: white;
  margin-bottom: 10px;
  width: 1650px;
}
.position-card2 {
  width: 1650px;
  margin-top: 10px;
  height: 770px;
  border-radius: 15px;
  margin-left: 20px;
}
.position-card3{
  width:600px;
  height: 770px;
  border-radius: 15px;
  margin-top: 10px;
  margin-left: 45px;

}
</style>