<script>
export default {
  name: "PositionManagement",
  data() {
    return{
      value: "",
      tableData: [
        {
          id: 1,
          name: "岗位1",
          neighbourhoodName: "小区1",
          status: 1,
          total: 100,
          occupyCount: 20,
          noOccupyCount: 80,
          createdAt: "2021-01-01 12:00:00"
        },
      ],
      positionChart1: null,
    }
  },
  methods: {
    initChart() {
      this.positionChart1 = this.$echarts.init(this.$refs.positionChart1);
      this.renderPieChart();
    },
    renderPieChart() {
      const option1 = {
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'bar',
            stack: 'x'
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'bar',
            stack: 'x'
          }
        ]
      };
      this.positionChart1.setOption(option1);
    }
  },
  mounted() {
    this.initChart();
  },
  beforeMount() {
    this.$store.commit("setTypeMenu",{menuType:"property"})
  },
}
</script>

<template>
   <div>
      <div style="margin-bottom: 20px">

        <el-select class="position-select" v-model="value" clearable placeholder="请选择小区">
          <el-option
              v-for="item in this.$store.state.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-button plain round  type="primary">新增岗位</el-button>
        <el-button plain round  type="warning">删除岗位</el-button>
        <el-button plain round  type="success">启用</el-button>
        <el-button plain round  type="danger">禁用</el-button>
      </div>
     <div class="separator"></div>
     <div style="display: flex;flex-wrap: wrap">
       <el-card class="position-card2">
         <el-table :data="tableData"
                   @selection-change="handleSelectionChange"
                   header-cell-style="background-color: rgba(242,242,242); color: black"
                   stripe
                   size="small"
                   style="width: 100%;border-radius: 10px">
           <el-table-column type="selection"></el-table-column>
           <el-table-column fixed prop="id" label="岗位id" width="100"></el-table-column>
           <el-table-column prop="name" label="岗位名称" width="120"></el-table-column>
           <el-table-column prop="neighbourhoodName" label="所属小区" width="120"></el-table-column>
           <el-table-column prop="status" label="状态" width="100"></el-table-column>
           <el-table-column prop="total" label="总数" width="100"></el-table-column>
           <el-table-column prop="occupyCount" label="已有人数" width="100"></el-table-column>
           <el-table-column prop="noOccupyCount" label="剩余人数" width="100"></el-table-column>
           <el-table-column prop="createdAt" label="创建时间" width="200"></el-table-column>
           <el-table-column fixed="right" label="操作" width="120">
             <template slot-scope="scope">
               <el-button type="text" icon="el-icon-edit" circle @click="handleEdit(scope.row)"></el-button>
               <el-button type="text" icon="el-icon-delete" circle @click="handleDelete(scope.row.id)"></el-button>
             </template>
           </el-table-column>
         </el-table>
       </el-card>
       <el-card class="position-card3">
         <div ref="positionChart1" style="height:350px;width:500px"></div>
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
  width: 1000px;
  margin-top: 10px;
  height: 770px;
  border-radius: 15px;
  margin-left: 20px
}
.position-card3{
  width:600px;
  height: 770px;
  border-radius: 15px;
  margin-top: 10px;
  margin-left: 45px;

}
</style>