export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/castle/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        "iconPath": "image/icon_component.png",
        "selectedIconPath": "image/icon_component_HL.png",
        text: '首页'
      },
      {
        pagePath: 'pages/castle/index',
        "iconPath": "image/icon_component.png",
        "selectedIconPath": "image/icon_component_HL.png",
        text: '古堡'
      },
      {
        pagePath: 'pages/mine/index',
        "iconPath": "image/icon_API.png",
        "selectedIconPath": "image/icon_API_HL.png",
        text: '我的'
      },
    ]
  }
})
