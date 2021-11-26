<template>
  <div class="sider-container">
    <el-menu class="page-sider" router :default-active="defaultActive">
      <el-submenu index="discover">
        <template slot="title">
          <i class="el-icon-discover"></i>
          <span slot="title">发现音乐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="discoverConfig in discoverConfigs"
            :key="discoverConfig.index"
            :index="discoverConfig.index"
            :route="discoverConfig.route"
          >
            {{ discoverConfig.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="my">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">我的音乐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="myConfig in myConfigs"
            :key="myConfig.index"
            :index="myConfig.index"
            :route="myConfig.route"
          >
            {{ myConfig.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="Friend" :route="{ path: '/friend' }">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">朋友</span>
      </el-menu-item>
    </el-menu>
    <div class="toggle-collapse">
      <i :class="collapseIcon"></i>
    </div>
  </div>
</template>

<script>
import { DISCOVER_CONFIG, MY_CONFIG } from "./constants";
export default {
  name: "Sider",
  data() {
    return {
      discoverConfigs: DISCOVER_CONFIG,
      myConfigs: MY_CONFIG,
      defaultActive: "Recommend",
      isCollapse: false,
    };
  },
  computed: {
    // 暂时未使用
    collapseIcon() {
      return this.isCollapse ? "el-icon-arrow-right" : "el-icon-arrow-left";
    },
  },
  watch: {
    "$route.path": {
      handler: function () {
        this.defaultActive = this.$route.name;
      },
      immediate: true,
    },
  },
};
</script>

<style>
.sider-container {
  height: 100%;
}
.page-sider {
  height: 100%;
}
</style>
