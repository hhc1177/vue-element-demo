# 关于
> A Vue.js project

    此项目作为练手项目，会做些demo等，主要利用vue.js框架 及 饿了么组件库 （http://element.eleme.io/#/zh-CN）进行开发


## 环境准备
一、安装node.js,  https://nodejs.org/en/download/ ,    下载相应版本
   如图安装成功
<img src="https://github.com/hhc1177/vue-element-demo/tree/master/other/node.png"/> 


二、安装cnpm，node.js 淘宝镜像服务器，解决下载慢问题
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

三、vue-cli的安装
vue-cli是vue官方提供的一个命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。
```
cnpm install -g vue-cli
```

安装成功后，可通过以下查看
```
vue --version
```

四、试试新建一个Vue项目
（1）新建一个项目文件夹，命名为 vue-demo，cd到此文件夹，输入:vue init webpack vue-demo，回车，按照如下操作进行初始化：

   <img src="https://github.com/hhc1177/vue-element-demo/tree/master/other/vue项目新建.png"/> 

我们暂时不适用模板提供的测试框架，Karma + Mocha，以及Nightwatch。

（2）项目目录
     得到项目目录

（3）安装项目依赖的包
    cd到vue-demo 文件夹，执行cnpm install，安装依赖包，安装完成之后，项目目录下多了node_modules：
```
cnpm install
```

（4）运行项目
```
npm run dev
```

## 技术栈

vue2 +  vue-router + webpack + element-ui  

( vuex + ES6/7 + less )暂未引进，后续将用到




##

##---------------------------系统自带说明---------------------------------------------------------
``` bash 

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
