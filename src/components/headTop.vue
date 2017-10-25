<template>
<el-row class="header">
  <el-col :span="4" class="blank"></el-col>
  <el-col :span="10"><div class="logo"><img src="../img/logo.png" class="logoimg"></div></el-col>
  <el-col :span="6"><div class="nav">
  <el-menu :default-active="activeIndex2" class="el-menu" mode="horizontal" @select="handleSelect" style="{float:right;background:#fff;">
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">产品</el-menu-item>
  <el-menu-item index="3">关于我们</el-menu-item>
  </el-menu>
    </div>
  </el-col>
  <el-col :span="4" class="blank"></el-col>
    </el-row>
</template>

<script>
export default {
  name: 'headTop'
}
</script>

<style scoped>
.header {
  width: 100%;
  height:100px;
  position: relative;
  top: 0;
  left: 0;
}
.blank{
  min-height: 100%;
}
.logo, logoimg{
  position: relative;
  padding: 0;
  margin: auto 0;
  align-items: center;
  height: 100%;
  min-height:100px;
}
.el-menu{
  margin-top: 20px;
}

</style>
