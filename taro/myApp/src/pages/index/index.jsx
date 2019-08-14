import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Demo from "./Child";
import Head from "../../components/head/head";

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name: '张三',
  }

  componentWillMount () { }

  componentDidMount () {
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    this.setState({
      name: '李四'
    })
  }

  change = (e) => {
    this.setState({
      name: '小王'
    })
    console.log('change', e);
  }

  render () {
    return (
      <View className='index'>
        <Head />
      </View>
    )
  }
}
