export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/stats/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FDF8F3',
    navigationBarTitleText: '旅行足迹',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#8B7355',
    selectedColor: '#E8B4B8',
    backgroundColor: '#FDF8F3',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '地图打卡',
        iconPath: './assets/tabbar/map.png',
        selectedIconPath: './assets/tabbar/map-active.png'
      },
      {
        pagePath: 'pages/stats/index',
        text: '足迹统计',
        iconPath: './assets/tabbar/chart-bar.png',
        selectedIconPath: './assets/tabbar/chart-bar-active.png'
      }
    ]
  }
})
