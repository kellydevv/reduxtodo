import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { addNumber,minusNumber } from "./redux/modules/counter";

const App = () => {
  //1. dispatch사용하기 위해 선언
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
    setNumber(+value);
  };

//2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러 만들기
  const onClickAddNUmberHandler =() => {
    //5. action creator를 dispatch해주고, 그때 action creator의 인자에 number넣어주기
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler =() =>{
    dispatch(minusNumber(number));
  };



  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
{/* 3. 더하기 버튼 이벤트핸들러 연결 */}
      <button onClick={onClickAddNUmberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
