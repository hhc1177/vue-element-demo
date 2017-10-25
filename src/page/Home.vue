<template>
  <div>
      <head-top></head-top>
      <el-row>
      <el-col :span="2" class="blank"></el-col> 
<el-col :span="20" style="{margin:0 auto}">
        <el-carousel indicator-position="outside" class= "el-carousel"> 
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="../img/lunbo1_2.jpg">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="2" class="blank"></el-col> 
  <el-col :span="10">
<el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i>贵金属产品</span>
    <img src="../img/gold1.jpg" alt="a1" class="tabsimg">
    <img src="..\img\1479705683391079890.jpg" alt="a1" class="tabsimg">
    <img src="..\img\1479706762333896888.jpg" alt="a1" class="tabsimg">
  </el-tab-pane>
  <el-tab-pane label="鉴定评级">鉴定评级</el-tab-pane>
  <el-tab-pane label="行情消息">行情消息</el-tab-pane>
</el-tabs>
  </el-col>
  <el-col :span="10">
    <el-tabs type="border-card">
  <el-tab-pane label="基准金价">
    
<el-table >
     <el-table-column>sdf</el-table-column>
   </el-table>
  </el-tab-pane>
  <el-tab-pane label="基准银价">基准银价</el-tab-pane>
</el-tabs>
     </el-col>
  <el-col :span="2" class="blank"></el-col> 
</el-row>
<el-col :span="2" class="blank"></el-col> 


  <Footer></Footer>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
import Footer from '@/components/footer'
export default {
  components: {
    headTop,
    Footer
  }
}
</script>

<style scoped>


.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .blank {
    height: 300px;
  }

  .tabsimg {
    width: 150px;
    height: 150px;
  }

  .el-tabs__item.is-active {
    color:#ac7e33;
  }
  
  .el-tab-pane{
    height: 150px;
  }
</style>
