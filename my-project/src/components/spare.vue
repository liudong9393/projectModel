<!-- 业余 -->
<template>
  <div id="spare">
     <div class="spare">
        <!-- 题目 -->
        <div class="spareTitle">
            <div class="narbar">
              <div class="bar">
                <div class="my">
                  <router-link to="/Spare"><span class="icon iconfont icon-xitongfanhui"></span></router-link>
                </div>
                <div class="titleNa">
                 
                  <p class="talkHeart">
                    <router-link to="/Entertainment"><span>娱乐</span></router-link>
                  </p>
                </div>
                <div class="Telling">
                  <router-link to="/Telling"><span class="icon iconfont icon-bianji"></span></router-link>
                </div>
              </div>
            </div>
        </div>
        <!-- 业余页面的内容 -->
        <div class="spareContainer">
          <router-view></router-view>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
      nowIndex:0
    }
  },
  methods: {
     
    }
}
</script>

<style scoped>
  .narbar{
    width: 100%;
    height: 2.5em;
    line-height: 2.5em;
    background-color: #e3e3e3;
    position: fixed;
    top:0;
  }
  .bar,.titleNa{
    display: flex;
    text-align: center;
  }
  .bar .my{
    width: 27%;
    text-align: left;
    padding-left:3%;
  }
  .titleNa{
    width: 40%;
  }
  .titleNa > p{
    width: 100%;
  }
  .Telling{
    width: 30%;
  }
  .talkActive > a{
    padding :0.143em 0.215em;
    border-bottom: 0.143em solid #999;
    font-weight: 800;
  }
  .spareContent{
    margin-top:2.5em;
  }
</style>
