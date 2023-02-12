export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/index',           // 首页
    'pages/castle/index',         // 古堡页
    'pages/mine/index',           // 我的
  ],
  tabBar: {
    "custom": false,
    "color": "#7A7E83",
    // "selectedColor": "#000000",
    // "backgroundColor": "#000000",
    // 擦：tabbar的列表里必须包含index/index，或者不显示
    "list": [
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
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
})
