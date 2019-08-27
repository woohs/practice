// 获取菜品数量
// 缓存数据
import Taro from '@tarojs/taro';

const foodKey = 'food_count';

export function getFoodCount(food) {
  let store = Taro.getStorageSync(foodKey);
  if(store && store[food.id]) {
    return store[food.id].num
  }
  return 0;
}

export function setFoodCount(food, num, type, callBack) {
   if(food) {
      let store = Taro.getStorageSync(foodKey) || {};
      if(type === 'cut') {
        if(num === 1) {
          store[food.id] && delete store[food.id];
        }else {
          store[food.id].num = num - 1;
        }
        Taro.setStorageSync(foodKey, store);
        callBack && callBack();
      }
      if(type === 'add') {
        if(store[food.id]) {
          store[food.id].num = num + 1;
        }else {
          store[food.id] = {
            ...food,
            num: 1,
          }
        }
        Taro.setStorageSync(foodKey, store);
        callBack && callBack();
      }
   }
}