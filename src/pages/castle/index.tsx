import { View, Text } from '@tarojs/components'
import './index.less'

export default function(props) {
  console.log('这是函数接受的props', props)

  return (
    <View className='castle'>
      <Text>这是古堡页面</Text>
    </View>
  )
}
