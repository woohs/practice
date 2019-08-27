import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { getFoodCount, setFoodCount } from '../../utils/common';
import myEvent from '../../utils/event';
import './addcut.less';

class AddCut extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      num: 0,
    }
  }

  componentDidMount() {
    this.setState({
      num: getFoodCount(this.props.food),
    })
    
  }

  cutFood = () => {
    if(this.props.food) {
      if(this.state.num > 0) {
        setFoodCount(this.props.food, this.state.num, 'cut', () => {
          // 异步
          this.setState({
            num: getFoodCount(this.props.food),
          })
        });
        myEvent.emit('cut')
      }else {
        console.error('加减菜品出现异常')
      }
    }
  }

  addFood = () => {
    if(this.props.food) {
      setFoodCount(this.props.food, this.state.num, 'add', () => {
        // 异步
        this.setState({
          num: getFoodCount(this.props.food),
        })
        myEvent.emit('add')
      });
    }
  }

  render() {
    return (
      <View className='addcut'>
        <Image onCLick={this.cutFood} className='opeate_img' src={require('../../assets/img/cut.png')}></Image>
        <Text className='food_num'>{this.state.num}</Text>
        <Image onCLick={this.addFood} className='opeate_img' src={require('../../assets/img/add.png')}></Image>
      </View>
    )
  }
}

export default AddCut;