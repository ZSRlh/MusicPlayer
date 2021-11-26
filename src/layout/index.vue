<template>
  <el-container class="layout-container">
    <el-aside class="aside-style">
      <Sider />
    </el-aside>
    <el-container>
      <el-header class="header-style">Header</el-header>
      <el-main class="main-style">
        Main
        <router-view></router-view>
      </el-main>
      <el-footer class="footer-style">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Sider from "./Sider";
export default {
  name: "Layout",
  components: {
    Sider,
  },
};
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.aside-style {
  /* background-color: #ff69b4; */
}

.header-style {
  background-color: aqua;
}

.main-style {
  background-color: bisque;
}

.footer-style {
  background-color: cadetblue;
}
</style>
