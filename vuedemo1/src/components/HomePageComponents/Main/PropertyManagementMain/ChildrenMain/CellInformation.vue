<script>
export default {
  name: "cellInformation",
  data() {
    return {
      pageNum:1,
      pageSize:10,
      total:50,
      tableData: []
    }
  },
  methods:{
    getAll() {
      this.$axios.get(this.$httpUrl + '/neighbourhood/list', {params: {
        }}
      ).then(res => {
        console.log(res)
        if (res.data.code===200) {
          console.log(res.data)
          this.tableData=res.data.data
        }
        else {
          this.$message({
            message: '系统出错，请联系管理员',
            type: 'error'
          });
        }
      })
    },
  },

  beforeMount() {
    this.getAll();
  },
}
</script>

<template>
  <el-container style="height: 100%">
    <el-main>
      <el-table
          :data="tableData"
          header-cell-style="background-color: rgba(242,242,242); color: black"
          stripe
          max-height="550px"
          style="width: 100%;border-radius: 10px">
        <el-table-column
            type="selection"
        ></el-table-column>
        <el-table-column
            fixed
            prop="id"
            label="小区id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="neighbourhoodName"
            label="小区名字"
            width="300">
        </el-table-column>
        <el-table-column
            prop="neighbourhoodAddress"
            label="地址"
            width="800">
        </el-table-column>
        <el-table-column
            prop="floorRage"
            label="占地面积"
            width="180">
        </el-table-column>
        <el-table-column
            prop="city"
            label="所在城市"
            width="300">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="联系方式"
            width="300">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
        </el-table-column>
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