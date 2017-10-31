<template>
	<div>
		<el-row style="margin-top: 20px;">
    <el-col :span="24">
			<h2>无嵌套表格，删除列表格渲染正常</h2>
        <el-table
    :data="tableData"
    border
    fit
    style="width: 100%">
    <el-table-column
      fixed
      :key="Math.random()"
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <template v-for="test in testData">

      <el-table-column
        :key="Math.random()"
        width="200">
          <el-table-column
          :key="Math.random()"
          :prop="test.prop"
          :label="test.label"
          width="200">
          </el-table-column>
      </el-table-column>
    </template>
  </el-table>
     <el-row style="margin-top:20px;">
       <el-button type="primary" @click="add">添加</el-button>
        <el-button type="primary" @click="remove">减少</el-button>
     </el-row>
    </el-col>

		</el-row>
	</div>
</template>

<script>
import { mapState ,mapGetters, mapActions } from 'vuex'
import * as api from '../api'

import { Loading } from 'element-ui'

export default {
    methods: {
      add() {
        if (this.addData.length > 0) {
          const pop = this.addData.pop()
          this.testData.push(pop)
          console.log(this.testData)
        }else{
          return
        }
      },
      add1() {
        if (this.addData1.length > 0) {
          const pop = this.addData1.pop()
          this.testData1.push(pop)
          console.log(this.testData1)
        }else{
          return
        }
      },
      remove() {
        this.testData.pop()
        console.log(this.testData1)
      },
      remove1() {
        this.testData1.pop()
        console.log(this.testData1)
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
        }],
        testData: [{
          prop: 'name',
          label: '姓名'
        },{
          prop: 'province',
          label: '省份'
        },{
          prop: 'city',
          label: '城市'
        },{
          prop: 'address',
          label: '地址'
        },],
        addData:[{
          prop: 'zip',
          label: '邮编'
        },{
          prop: 'a',
          label: 'archer'
        },{
          prop: 'b',
          label: 'saber'
        },{
          prop: 'c',
          label: 'basaka'
        },{
          prop: 'd',
          label: 'assissing'
        }]
      }
    }
  }

</script>

<style lang='less' rel='stylesheet/less'>
    body,html{
      width: 100%;
      height: 100%;
    }
</style>
