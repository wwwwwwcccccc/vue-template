<!-- <template>
  <div class='home'>
    <h1>This is Home!</h1>
    <input type="text" name="" v-model='title'>
    <button @click='do_click'>Click</button>
    <div class="left">{{loading}}</div>
    <div class="right"></div>

  </div>
</template> -->

<template>
    <div>
        <div class="home">
            <div class="right"></div>
            <el-button @click='doss'>click</el-button>
        </div>
    </div>
</template>

<script>
import { mapState ,mapGetters, mapActions } from 'vuex'

import { Loading } from 'element-ui'

// import Loading from '../components/loading'
 

export default {
    name: 'RangeSlider',
    props: {
        // 按字母顺序
        // 
    },
    data() {
        return {
            hello:'hello',
            loadingObj: {},
            op1: {
              status: 'start',
              name: 'left',
              options: {
                target: '.left',
                text: '数据加载中...',
                fullscreen: false
              }
            },
            op2: {
              status: 'start',
              name: 'right',
              options: {
                target: '.right',
                text: '数据加载中...',
                fullscreen: false
              }
            },
            dd: true
        }
    },
    computed:{
        ...mapGetters([
          'title',
          'loading',
          'list'
        ])
      },
    components: {
        Loading
    },
    watch: {
        list: {  
            handler: function(newValue, oldValue) {
                console.log(newValue[0].status)
                let obLoad = newValue;
                obLoad.forEach((item) => {
                    if(item.status){
                        this.animalShow(item)
                    }else{
                        this.animalHide(item)
                    }
                })
            },
            deep: true
        }
  
    },
    methods: {
        animalShow(op) {
            if(this.loadingObj[op.name]){
                return
            }
            let instance = Loading.service(op.options);
            this.loadingObj[op.name] = instance;
            setTimeout(() => {
                instance.close()
            },1000)
        },
        animalHide(op) {
            // this.$nextTick(() => {
            if(this.loadingObj[op.name]){
            // this.loadingObj[op.name].close();
            }
            // })
        },
        doss () {
            this.loadingObj['right'].close();
        }
    },
    beforeCreate() {},
    mounted() {
        // this.$store.dispatch('FETCH_HOME', {
        //       status: true,
        //       name: 'left',
        //       options: {
        //         target: '.left',
        //         text: '数据加载中...',
        //         fullscreen: false
        //       }
        //     });
        this.$store.dispatch('FETCH_THEATERS',  {
              status: true,
              name: 'right',
              options: {
                target: '.home .right',
                text: '数据加载中...',
                fullscreen: false
              }
            });
        // this.$store.dispatch('FETCH_DEMO');
        // this.$store.dispatch('FETCH_AAAAAAAA');
    },
    created() {

        // Loading.service({
        //     target: 'body'
        // });
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
        width: 100%;
        height: 100%;
    }
    .left{
        width: 200px;
        height: 200px;
        background: pink;
        float: left;
    }
    .right{
        width: 200px;
        height: 200px;
        background: #ccc;
        margin-left: 50px;
        float: left;
    }
</style>
