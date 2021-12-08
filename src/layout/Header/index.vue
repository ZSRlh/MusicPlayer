<template>
  <div class="page-header">
    <h1>Header</h1>
    <el-button @click="toggleLoginModal">login</el-button>
    <el-button @click="logout">logout</el-button>
    <el-button @click="getLoginStatus">get</el-button>
    <el-button @click="getCookie">cookie</el-button>
    <el-button @click="setCookie">set cookie</el-button>
    <el-button @click="removeCookie">rm cookie</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getLoginStatus, logout } from "@/api/login";
import Cookies from "js-cookie";

export default {
  name: "Header",
  methods: {
    ...mapActions(["toggleLoginModal"]),
    getLoginStatus() {
      getLoginStatus().then((res) => {
        console.log(res, "in header");
      });
    },
    logout() {
      logout().then((res) => {
        console.log(res, "logout");
      });
    },
    getCookie() {
      // const c = Cookies.get("MUSIC_R_T", {
      //   domain: "netease-cloud-music-api-murex-two.vercel.app",
      // });
      const c = Cookies.get();
      console.log(c);
    },
    setCookie() {
      let a = Cookies.set("test", 1, { domain: ".baidu.com" });
      console.log(a);
    },
    removeCookie() {
      Cookies.remove("NMTID");
      Cookies.remove("MUSIC_U");
      Cookies.remove("__csrf");
      Cookies.remove("__remember_me");
    },
  },
};
</script>

<style></style>
