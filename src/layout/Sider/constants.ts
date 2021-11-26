import { Route } from "vue-router";

interface MenuItemConfig {
  index: string;
  label: string;
  route: Partial<Route>;
}

export const DISCOVER_CONFIG: MenuItemConfig[] = [
  {
    index: "Recommend",
    label: "推荐",
    route: {
      path: "/discover",
    },
  },
  {
    index: "Toplist",
    label: "排行榜",
    route: {
      path: "/discover/toplist",
    },
  },
  {
    index: "Playlist",
    label: "歌单",
    route: {
      path: "/discover/playlist",
    },
  },
  {
    index: "Radio",
    label: "电台",
    route: {
      path: "/discover/radio",
    },
  },
  {
    index: "Artist",
    label: "歌手",
    route: {
      path: "/discover/artist",
    },
  },
];

export const MY_CONFIG: MenuItemConfig[] = [
  {
    index: "MyArtist",
    label: "我的歌手",
    route: {
      path: "/my/artist",
    },
  },
  {
    index: "MyRadio",
    label: "我的电台",
    route: {
      path: "/my/radio",
    },
  },
  {
    index: "MyMV",
    label: "我的视频",
    route: {
      path: "/my/mv",
    },
  },
  {
    index: "MyPlaylist",
    label: "我的歌单",
    route: {
      path: "/my/playlist",
    },
  },
];
