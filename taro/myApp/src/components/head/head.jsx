import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import Top from "./top";
import Activity from "./activity";
import "./head.less";

class Head extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      store: {
        title: '湘菜馆',
        notice: '欢迎光临，本店全场1折',
        tags: ['味道赞', '主食好', '老板娘漂亮'],
      }
    }
  }

  render() {
    const { store } = this.state;
    return (
      <View className='head'>
        <Top />
        <Image className='back' src={require('../../assets/img/back.jpg')} />
        <View className='store'>
          <Image className='store_img' src={require('../../assets/img/store.jpg')} />
          <View className='store_text'>
            <Text className='title'>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {store.tags.map(( item, index ) => {
                return (<Text key={index} className='tags_text'>{item}</Text>)
              })}
            </View>
          </View>
        </View>
        <Activity />
      </View>
     
    )
  }
}

export default Head;