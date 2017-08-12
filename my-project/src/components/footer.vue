<template>

   <div id="appAll">
    <!-- 路由入口 -->
    <router-view></router-view>
    <!-- 导航 -->
    <div id="footer">
      <footer id="foot">
        <div class="foot_nav">
            <div v-for="(item,index) in items" v-bind:data-href="item.indexName" class="part"
              v-bind:class="{active:index==nowIndex}" @touchstart="active(index)">
              <router-link v-bind:to="item.indexName" class="link">
                  <span class="icon iconfont" v-bind:class="item.font"></span>
                  <p v-html="item.name"></p>
              </router-link>
            </div>
        </div>
      </footer>
    </div>

</div>

</template>

<script>
export default {
    data () {
      return {
        items:[
          {name:"首页",indexName:"/Home",font:"icon-shouye"},
          {name:"心话",indexName:"/Voice",font:"icon-xiangqu"},
          {name:"校园",indexName:"/Campus",font:"icon-gaoduande"},
          {name:"娱乐",indexName:"/Spare",font:"icon-zixingche"},
          {name:"我的",indexName:"/Mine",font:"icon-wodejuhuasuan"}
        ],
        nowIndex:0,
        isshow:true
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.active();
        
      })
    },
    methods: {
      active:function(index){
        this.nowIndex=index;
        var query=location.href.split("#",2)[1];//获取查询串
        // console.log(query);
        
      },
    }
}
</script>

<style scoped>
/*@import "/static/font/iconfont.css";*/
/*备用颜色*/
/*color: #42b983;*/
/*color: #2c3e50;*/
#footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #f1f1f1;
    z-index: 10;
}

#foot .foot_nav{
    width: 100%;
    display: flex;
}

footer .foot_nav .part{
    width: 20%;
    display: block;
    text-align: center;
    box-sizing:border-box;
    padding: 0.215em 1% 0;
    height: 3.5em;
    font-size: 1em;
}
.link > span {
  font-size: 1.286em;
}

.active{
    background-color: #e1e1e1;
}
.active .link{
    font-weight: 800;
    color: #c40000;
}
</style>
