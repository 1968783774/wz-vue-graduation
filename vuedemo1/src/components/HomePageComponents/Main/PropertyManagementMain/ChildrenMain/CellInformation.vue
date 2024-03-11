<script>
export default {
  name: "cellInformation",
  data() {
    return {
      pageNum:1,
      pageSize:10,
      total:50,
      tableData: [{
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }, {
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }, {
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }, {
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      },{
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }, {
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }, {
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      },{
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }, {
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }, {
        neighbourhoodId: '小区id',
        name: '小区名字',
        address: '小区地址',
        area: '1331',
        city: '大连',
        phone: '15804744178'
      }]
    }
  }
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
            prop="name"
            label="小区名字"
            width="300">
        </el-table-column>
        <el-table-column
            prop="neighbourhoodId"
            label="小区id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            width="800">
        </el-table-column>
        <el-table-column
            prop="area"
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