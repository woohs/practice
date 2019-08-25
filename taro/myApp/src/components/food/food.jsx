import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane} from 'taro-ui';
import "./food.less";
import Cata from "./cata";
import FoodList from "./foodList"

class Food extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [
        {title: '点菜'},
        {title: '评价'},
        {title: '商家'},
      ],
      foodlist: [],
      currentCata: [],
      selectCata: null,
    }
  }

  handleClick = (value) => {
    this.setState({
      current: value,
    })
  }

  // 切换分类
  onChangeCara = (selectCata) => {
    console.log('selectCata', selectCata)
    if(this.state.foodlist.some(item => item.pid === selectCata.id)) {
      // 不用加载数据
      this.setState({
        selectCata,
        currentCata: this.state.foodlist.filter(item => item.pid === selectCata.id),
      })
    }else {
      // 加载数据
      this.setState({
        foodlist: this.state.foodlist.concat(this.getData(selectCata)),
      }, () => {
        this.setState({
          selectCata,
          currentCata: this.state.foodlist.filter(item => item.pid === selectCata.id),
        })
      })
    }
  }

  // 模拟数据
  getData(selectCata) {
    let count = Math.round(Math.random() * 2);
    // let imgUrl = `../../assets/img/${count}.jpg`;
    const resArr = Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
      img: count,
      pid: selectCata.id,
      id: selectCata.id + '_' + k,
      sole: Math.round(Math.random() * 50),
      price: Math.round(Math.random() * 20),
      title: '分类' + selectCata.id + '菜品' + (k + 1)
    }))
    return resArr;
  }

  render() {
    const { current, tabList, currentCata, selectCata } = this.state;
    return (
      <View>
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick} >
          <AtTabsPane>
            <View className='fooe_body'>
              <Cata onChangeCara={this.onChangeCara} />
              <FoodList selectCata={selectCata} currentCata={currentCata} />
            </View>
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>

        </AtTabs>
      </View>
    )
  }
}

export default Food;