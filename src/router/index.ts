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
      },
      {
        path: "toplist",
        name: "Toplist",
        component: Toplist,
      },
      {
        path: "playlist",
        name: "Playlist",
        component: Playlist,
      },
      {
        path: "radio",
        name: "Radio",
        component: Radio,
      },
      {
        path: "artist",
        name: "Artist",
        component: Artist,
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
      },
      {
        path: "radio",
        name: "MyRadio",
        component: MyRadio,
      },
      {
        path: "mv",
        name: "MyMV",
        component: MyMV,
      },
      {
        path: "playlist",
        name: "MyPlaylist",
        component: MyPlaylist,
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
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
