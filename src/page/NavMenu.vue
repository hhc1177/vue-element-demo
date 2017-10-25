<template>

<div class="home navmenu fillcontain">
<el-row style="height: 100%;">
    <el-col :span="3" style="min-height: 100%;background-color: #324057;" >
    <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
    </el-col>
    			<!-- <el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col> -->
</el-row>
</div>

</template>
 
<script>
export default {
  name: 'NavMenu'
}
</script>

<style  scoped>
.navmenu {
  text-align: center;
}
 </style>