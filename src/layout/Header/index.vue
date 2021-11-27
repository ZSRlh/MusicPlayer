<template>
  <div class="page-header">
    <h1>Header</h1>
    <el-button @click="toggleLoginModal">login</el-button>
    <el-button @click="getLoginStatus">get</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getLoginStatus } from "@/api/login";

export default {
  name: "Header",
  methods: {
    ...mapActions(["toggleLoginModal"]),
    getLoginStatus() {
      getLoginStatus().then((res) => {
        console.log(res, "in header");
      });
    },
  },
};
</script>

<style></style>
