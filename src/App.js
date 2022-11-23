import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  console.log(number);
  return (
    <div>
      {number}
      <button
        onClick={() => {
          // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          //{type:""}은 dispatch의 key(리듀서가 보는게 이거임)
          // export한 action  creator로 변경한다
          dispatch(plusOne());
        }}
      >
        {" "}
        +1{" "}
      </button>
      <button
        onClick={() => {
          //dispatch({type:""})이지만 action creator를 만들었으므로 
          //{type:"PLUS_ONE"}=== plusOne()
          dispatch(minusOne());
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
