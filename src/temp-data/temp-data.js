import announcementiconblack from "../assets/announcement-icon-black.svg";
import announcementiconwhite from "../assets/announcement-icon-white.svg";
import avatariconblack from "../assets/avatar-icon-black.svg";
import avatariconwhite from "../assets/avatar-icon-white.svg";
import communityiconblack from "../assets/community-icon-black.svg";
import communityiconwhite from "../assets/community-icon-white.svg";
import homeiconblack from "../assets/home-icon-black.svg";
import homeiconwhite from "../assets/home-icon-white.svg";
import tradeiconblack from "../assets/trade-icon-black.svg";
import tradeiconwhite from "../assets/trade-icon-white.svg";
import ideaiconblack from "../assets/idea-icon-black.svg";
import ideaiconwhite from "../assets/idea-icon-white.svg";
import leaderboardiconblack from "../assets/leaderboard-icon-black.svg";
import leaderboardiconwhite from "../assets/leaderboard-icon-white.svg";
import avatar from "../assets/monkey-avatar.svg";

export let leaders = [
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
  {
    name: "Demo",
    munkey: 1944,
    ranking: 23,
    avatar: avatar,
  },
];

leaders.forEach((item, i) => {
  item.id = i + 1;
});

export let categories = [
  { icon: announcementiconblack, href: "#" },
  { icon: avatariconblack, href: "#" },
  { icon: communityiconblack, href: "#" },
  { icon: homeiconblack, href: "#" },
  { icon: tradeiconblack, href: "#" },
  { icon: ideaiconblack, href: "#" },
  { icon: leaderboardiconblack, href: "#" },
];

categories.forEach((item, i) => {
  item.id = i + 1;
});

export let sidebarItems = [
  { title: "Home", href: "#", icon: homeiconwhite, blackicon: homeiconblack },
  {
    title: "My Profile",
    href: "#",
    icon: avatariconwhite,
    blackicon: avatariconblack,
  },
  {
    title: "Trading Ideas",
    href: "#",
    icon: ideaiconwhite,
    blackicon: ideaiconblack,
  },
  {
    title: "Discussions",
    href: "#",
    icon: communityiconwhite,
    blackicon: communityiconblack,
  },
  {
    title: "Public Leaderboard",
    href: "#",
    icon: leaderboardiconwhite,
    blackicon: leaderboardiconblack,
  },
  {
    title: "Munkey Trading",
    href: "#",
    icon: tradeiconwhite,
    blackicon: tradeiconblack,
  },
  {
    title: "Announcements",
    href: "#",
    icon: announcementiconwhite,
    blackicon: announcementiconblack,
  },
];

sidebarItems.forEach((item, i) => {
  item.id = i + 1;
});
