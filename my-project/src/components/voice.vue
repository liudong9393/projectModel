<template>
  <div id="voice">
     <div class="voice">
     	<voicenav></voicenav>
     </div>
  </div>
</template>

<script>
import voicenav from "../page/voice/voicenav";

export default {
  data () {
    return {
      
    }
  },
  methods: {
     
  },
  components:{ voicenav }
}
 // get:function(){
 //                        //发送get请求
 //                        this.$http.get('a.txt').then(function(res){
 //                            alert(res.body);    
 //                        },function(){
 //                            console.log('请求失败处理');
 //                        });
 //                    }
</script>

<style scoped>

.voice{
	/*background-color: #f5f5f5;*/
}


</style>
