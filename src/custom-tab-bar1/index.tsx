import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.less'

export default function () {
  const state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        "pagePath": "/pages/home/index",
        "iconPath": "../image/icon_component.png",
        "selectedIconPath": "../image/icon_component_HL.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/castle/index",
        "iconPath": "../image/icon_component.png",
        "selectedIconPath": "../image/icon_component_HL.png",
        "text": "古堡"
      },
      {
        "pagePath": "/pages/mine/index",
        "iconPath": "../image/icon_component.png",
        "selectedIconPath": "../image/icon_component_HL.png",
        "text": "我的"
      }
    ]
  }
  const { list, selected, color, selectedColor } = state

  function switchTab(index, url) {
    setSelected(index)
    Taro.switchTab({ url })
  }

  function setSelected (idx: number) {
    this.setState({
      selected: idx
    })
  }
  console.log('zheli')
  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {list.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item' onClick={switchTab.bind(this, index, item.pagePath)}>
            <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
            <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}
