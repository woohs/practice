// 事件监听
class Event {
  constructor() {
    this.events = {};
  }

  // 监听
  on(eventName, callBack) {
    if(this.events[eventName]) {
      this.events[eventName].push(callBack);
    }else {
      this.events[eventName] = [callBack];
    }
  }

  // 触发
  emit(eventName, params) {
    if(this.events[eventName]) {
      this.events[eventName].forEach(callBack => {
        callBack(params);
      })
    }
  }
}

const myEvent = new Event();

export default myEvent;