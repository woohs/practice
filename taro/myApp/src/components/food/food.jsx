import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane} from 'taro-ui';
import "./food.less";
import Cata from "./cata";

class Food extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [
        {title: '点菜'},
        {title: '评价'},
        {title: '商家'},
      ]
    }
  }

  handleClick = (value) => {
    this.setState({
      current: value,
    })
  }

  render() {
    const { current, tabList } = this.state;
    return (
      <View>
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick} >
          <AtTabsPane>
            <Cata />
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>

        </AtTabs>
      </View>
    )
  }
}

export default Food;