<template>
	<div class="wrap">
		<div class="header">
			<h1>导航</h1>
		</div>
		<div class="content">
		
			<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
			<el-dialog
			  title="提示"
			  :visible.sync="dialogVisible"
			  size="tiny"
			  :before-close="handleClose">
			  <span>这是一段信息</span>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			  </span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import * as api from '../api'
export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    created () {
    	var getDetail = async () => {
    		const list = await api.getTheaters()
    		const id = list.data.subjects[0].id
    		const movie = await api.getItemMovie(id)
    		console.log('list', movie.data)
    		return true
    	}

    	console.log('getDetail()', getDetail())

    	// var getList = function () {
    	// 	return axios.get('/v2/movie/in_theaters')
    	// }
    	// async function getMove () {
    	// 	const res = await getList()
    	// 	return axios.get('/v2/movie/subject/' + res.data.subjects[0].id)
    	// }
    	// getMove().then((resp) => {
    	// 	console.log('data', resp.data)
    	// })
    },
    methods: {
      handleClose(done) {
        dialogVisible = false
      }
    }
  };
</script>

<style lang='less' rel='stylesheet/less'>
    body,html{
      width: 100%;
      height: 100%;
    }
    .header{
    	width: 100%;
		  height: 60px;
		  position: fixed;
		  top: 0;
		  left: 0;
		  bottom: 0;
		  background: #ccc;
    }
    .content{
    	width: 100%;
		  height: 100%;
		  position: fixed;
		  top: 60px;
		  left: 0;
		  bottom: 0;
    }
</style>
