import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./activity.less";

class Activity extends Component {

  state = {
    activity: [
      {type: "cut",
      info: [
        {total: 48, cut: 10},
        {total: 58, cut: 20},
        {total: 100, cut: 30},
      ]}
    ]
  }

  getTextByType = (type) => {
    switch(type) {
      case "cut":
        return "减";
      default:
        return "减";
    }
  }

  getLine = (ary) => {
    return ary.map(item => `减${item.total}减${item.cut}`).join(';')
  }

  render() {
    const { activity: [firstItem] } = this.state;
    return (
      <View className='activity'>
        <Text className='type'>{this.getTextByType(firstItem)}</Text>
        <Text>{this.getLine(firstItem.info)}</Text>
        <Text className='length'>{firstItem.info.length}个活动</Text>
      </View>
    )
  }
}

export default Activity;