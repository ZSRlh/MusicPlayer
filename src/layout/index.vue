<template>
  <el-container class="layout-container">
    <el-aside class="aside-style">
      <Sider />
    </el-aside>
    <el-container>
      <el-header class="header-style">
        <Header />
      </el-header>
      <el-main class="main-style">
        Main
        <router-view></router-view>
      </el-main>
      <el-footer class="footer-style">Footer</el-footer>
    </el-container>
    <Login />
  </el-container>
</template>

<script>
import Sider from "./Sider";
import Header from "./Header";
import Login from "./Login";

export default {
  name: "Layout",
  components: {
    Sider,
    Header,
    Login,
  },
};
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.main-style {
  background-color: bisque;
}

.footer-style {
  background-color: cadetblue;
}
</style>
