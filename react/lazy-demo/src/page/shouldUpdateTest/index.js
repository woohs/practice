import React, { PureComponent, Component } from 'react'

export default class index extends Component {

  state = {
    data: [],
    columns: [],
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("TCL: index -> shouldComponentUpdate -> nextState", nextState)
    console.log("TCL: index -> shouldComponentUpdate -> this.state", this.state)
    console.log("TCL: index -> shouldComponentUpdate -> nextState === this.state", nextState === this.state)

    return nextState.data === this.state.data ? false : true;
  }

  handleAddColumns = () => {
    const {data, columns} = this.state
    data.push({
      key: Math.random() * 10,
      name: 'demo1',
      age: 42,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      demo1: 'hi'
    })
    columns.push({
      title: 'demo1',
      dataIndex: 'demo1',
    })
    // 使用解构赋值浅拷贝数组，这样对比相等的时候就不会相等
    this.setState({
      data: [...data],
      columns
    })
  }

  handleClickA = (e) => {
    e.preventDefault();
    console.log('e click')
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <a href="#" onClick={this.handleClickA}>点击</a>
        <button onClick={this.handleAddColumns}>点击</button>
        <ul>
          {data.map(item => <li key={item.key}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}
