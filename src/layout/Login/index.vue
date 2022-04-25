/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <el-dialog title="登陆" :visible.sync="showLoginModal">
    <el-form :model="form">
      <el-form-item label="手机号" label-width="100px">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="100px">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleOk">OK</el-button>
      <el-button @click="handleCancel">Cancel</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import { login } from "@/api/login";

export default {
  name: "Login",
  data() {
    return {
      form: {
        phone: "18292887389",
        password: "zsrlh227215",
      },
      a: true,
    };
  },
  computed: {
    showLoginModal: {
      get() {
        return this.$store.state.showLoginModal;
      },
      set() {
        this.toggleLoginModal();
      },
    },
  },
  methods: {
    ...mapActions(["toggleLoginModal"]),
    handleOk() {
      login(this.form)
        .then((res) => {
          console.log(res, "in modal");
        })
        .catch((err) => {
          console.log(err, "in modal");
        })
        .finally(() => {
          this.toggleLoginModal();
        });
    },
    handleCancel() {
      this.toggleLoginModal();
    },
  },
};
</script>

<style scope></style>
