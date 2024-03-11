<script>
export default {
  name: "propertyInformation",
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
      }]
    }
  }
}
</script>

<template>
  <div>
    <el-table
        :data="tableData"
        header-cell-style="background-color: rgba(242,242,242); color: black"
        stripe
        :border="true"
        style="width: 100%;border-radius: 20px">
      <el-table-column
          prop="neighbourhoodId"
          label="小区id"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="小区名字"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column
          prop="area"
          label="占地面积"
          width="180">
      </el-table-column>
      <el-table-column
          prop="city"
          label="所在城市">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="联系方式">
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, prev, pager, next,sizes, jumper"
        :total="total">
    </el-pagination>
  </div>
</template>

<style scoped>

</style>