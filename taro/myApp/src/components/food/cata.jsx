import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./cata.less";

class Cata extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectCata: 1,
      cata: [
        {id: 1, name: '专场'},
        {id: 2, name: '热销'},
        {id: 3, name: '折扣'},
        {id: 4, name: '主食'},
        {id: 5, name: '热炒'},
        {id: 6, name: '凉菜'},
        {id: 7, name: '乱炖'},
        {id: 8, name: '饮料'},
      ]
    }
  }

  handleClick = (value) => {
    this.setState({selectCata: value.id});
  }

  render() {
    const { cata, selectCata } = this.state;
    return (
      <View className='cata'>
        {cata.map((item, index) => (
          <Text 
            onClick={() => this.handleClick(item)}
            key={index} 
            className={'cata_text ' + (selectCata === item.id ? 'select' : '')}
          >
            {item.name}
          </Text>
        ))}
      </View>
    )
  }
}

export default Cata;