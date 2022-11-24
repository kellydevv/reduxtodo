// src/redux/modules/config/configStore.js


// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import todos from "../modules/todo";

const rootReducer = combineReducers({
  counter: todos, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;

//스토어와 모듈을 연결시킬 때 "새롭게 추가한 부분"대로 해주면 됨

