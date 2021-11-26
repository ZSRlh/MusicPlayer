import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";
import Recommend from "@/pages/Recommend/index.vue";
import Toplist from "@/pages/Toplist/index.vue";
import Playlist from "@/pages/Playlist/index.vue";
import Radio from "@/pages/Radio/index.vue";
import Artist from "@/pages/Artist/index.vue";
import MyArtist from "@/pages/MyArtist/index.vue";
import MyRadio from "@/pages/MyRadio/index.vue";
import MyMV from "@/pages/MyMV/index.vue";
import MyPlaylist from "@/pages/MyPlaylist/index.vue";
import Friend from "@/pages/Friend/index.vue";

import { TAB_TITLE } from "../constants";

const { APP_NAME, DISCOVER, MY, FRIEND } = TAB_TITLE;

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/discover",
  },
  {
    path: "/discover",
    component: Layout,
    children: [
      {
        path: "",
        name: "Recommend",
        component: Recommend,
        meta: {
          title: `${APP_NAME} | ${DISCOVER} | 推荐`,
        },
      },
      {
        path: "toplist",
        name: "Toplist",
        component: Toplist,
        meta: {
          title: `${APP_NAME} | ${DISCOVER} | 排行榜`,
        },
      },
      {
        path: "playlist",
        name: "Playlist",
        component: Playlist,
        meta: {
          title: `${APP_NAME} | ${DISCOVER} | 歌单`,
        },
      },
      {
        path: "radio",
        name: "Radio",
        component: Radio,
        meta: {
          title: `${APP_NAME} | ${DISCOVER} | 电台`,
        },
      },
      {
        path: "artist",
        name: "Artist",
        component: Artist,
        meta: {
          title: `${APP_NAME} | ${DISCOVER} | 歌手`,
        },
      },
    ],
  },
  {
    path: "/my",
    name: "My",
    component: Layout,
    children: [
      {
        path: "artist",
        name: "MyArtist",
        component: MyArtist,
        meta: {
          title: `${APP_NAME} | ${MY} | 我的歌手`,
        },
      },
      {
        path: "radio",
        name: "MyRadio",
        component: MyRadio,
        meta: {
          title: `${APP_NAME} | ${MY} | 我的电台`,
        },
      },
      {
        path: "mv",
        name: "MyMV",
        component: MyMV,
        meta: {
          title: `${APP_NAME} | ${MY} | 我的视频`,
        },
      },
      {
        path: "playlist",
        name: "MyPlaylist",
        component: MyPlaylist,
        meta: {
          title: `${APP_NAME} | ${MY} | 我的歌单`,
        },
      },
    ],
  },
  {
    path: "/friend",
    component: Layout,
    children: [
      {
        path: "",
        name: "Friend",
        component: Friend,
        meta: {
          title: `${APP_NAME} | ${FRIEND}`,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  document.title = to?.meta?.title || APP_NAME;
});

export default router;
