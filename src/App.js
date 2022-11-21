import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  //useSelector 화살표함수에서 꺼낸 state라는 인자는 현재프로젝트에서 존재하는 모든 리덕스 모듈의 state이다.
  const counterStore = useSelector((state) => state.counter.number)
  console.log(counterStore);
  return(
<div>hihi</div>
  )
};

export default App;