<template>
  <div class='home'>
    <header class='header'>
      <div class="douban-header-container">
        <div class="douban-search">
          <a class="title">豆瓣电影</a>
          <div class="search-container">
            <el-input placeholder="电影、影人、影院、电视剧">
            </el-input>
          </div>
        </div>
    </div>
    </header>
    <div class="body">
      <div class='top'>
        <p class='el-col-20 el-col-offset-2'>电影Top250</p>
      </div>
      <div class='city el-col-20 el-col-offset-2'>电影票--杭州</div>
      <div class="movies el-row el-col-offset-2 el-col-20">

        <div class="movie" v-for='(movie, index) in topMovies'>
          <div class="grid-content bg-purple">
            <div>
              <img :src="movie.images" class="image">
              <div style="padding: 14px;">
                <div style='display:inline-block;margin-right:6px;'>
                  <span style='font-size:12px;'>{{movie.title}}</span>
                </div>
                <div class='rating'>
                  <el-rate
                    v-model="movie.star"
                    disabled
                    show-text
                    text-color="#ff9900"
                    text-template="{value}">
                  </el-rate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState ,mapGetters, mapActions } from 'vuex'
import * as api from '../api'

import { Loading } from 'element-ui'

export default {
    data() {
        return {
            hello:'hello',
            topMovies: []
        }
    },
    created() {
      // api.getList()
      //  .then((res) => {
      //     let arr = res.data.subjects.map((item) => {
      //     return {
      //       title: item.title,
      //       images: item.images.large,
      //       star: ((parseInt(item.rating.average)) / 2)
      //     }
      //   })
      //   this.topMovies = arr
      //  })
      //  .catch((err) => {
      //  }) 
      let _this = this;
      var h = async () => {
        let datas = await _this.req();
        console.log('hhhhhhhh')
        console.log(datas)
        api.getItemMovie(datas.data.subjects[0].id)
          .then((movie) => {
            console.log('某一步电影',movie)
          })
      };
      h();

    },
    computed:{
        ...mapGetters([
          'list'
        ])
      },
    methods:{
      req() {
        return new Promise((resolve, reject) => {
          api.getList()
           .then((res) => {
              let arr = res.data.subjects.map((item) => {
              return {
                title: item.title,
                images: item.images.large,
                star: ((parseInt(item.rating.average)) / 2)
              }
            })
            this.topMovies = arr
            resolve(res)
           })
           .catch((err) => {
           }) 
        })
      }
    }
};
</script>

<style lang='less' rel='stylesheet/less'>
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        width: 100%;
        height: 100%
    }
    .home{
  .header{
    border-radius: 2px;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #eef1f6;
    height: 75px;
    .douban-header-container{
      width: 100%;
      margin: 0 auto;
      border-bottom: 1px solid #ccc;
      .douban-search{
        width: 950px;
        margin: 0 auto;
        height: 75px;
        .title{
          color: #27a;
          font-size: 30px;
          font-weight: bold;
          line-height: 75px;
        }
        .search-container{
          display: inline-block;
          line-height: 75px;
          vertical-align: top;
          width: 500px;
          margin-left: 50px;
          input{
            height: 34px;
          }
        }
        .douban-title-img{
          width: 175px;
          height: 90px;
          float: right;
          margin-top: 10px;
        }
      }
    }
  }
  .body{
    width: 100%;
    .top{
      height: 60px;
      margin-bottom: 20px;
      background: #f0f3f5;
      line-height: 60px;
      color: #27a;
      font-size: 12px;
    }
    .city{
      height: 50px;
      line-height: 50px;
      font-size: 18px;
    }
    .movies{
      padding-top: 20px;
      .movie{
        box-sizing: border-box;
        display: inline-block;
        width: 20%;
        img{
          height: 180px;
        }
        .rating{
          width: 100%;
          height: 20px;
          padding-top: 10px;
          line-height: 50px;
        }
      }
    }
    
  }
}
</style>
