import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

class Child extends Component {
  render() {
    return (
      
      <View>
        <Button onClick={this.props.onChange}>调用上层</Button>
        {this.props.name}
      </View>
    )
  }
}

export default Child;