<template>
<el-row class="footer">
  <el-col :span="4" class="blank2"></el-col>
  <el-col :span="16" class="copyright">
    <h5>闽ICP备xxxx号 紫金矿业集团股份有限公司版权所有</h5>
  </el-col>
  <el-col :span="4" class="blank2"></el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.footer {
  /* color: #000;
  background: #ac7e33;
  width: 100%;
  height:100px;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: visible; */
    /* position:relative; */
    z-index: 1000;
    position: relative;
    bottom:0;
    left: 0;
    width:100%;
   height: 80px;
    background-color: #eef1f6;
    color: ##000;
    text-align:center;
}

.blank2 {
  min-height: 100%;
}


</style>
