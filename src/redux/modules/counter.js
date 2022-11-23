//액션value를 상수로 만들어준다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

//action creator만들기
export const plusOne = () =>{
      return {
            type:PLUS_ONE
      };
};

export const minusOne = () => {
      return {
            type:MINUS_ONE
      };
};

//초기 상태값 === useState(0);
//초기값은 {}객체 안에 number이라는 변수에 초기값으로 0을 할당해준것.
const initialState = {
  number: 0,
};

//리듀서===변화를 일으키는 함수
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // PLUS_ONE이라는 case를 추가한다.
    // 여기서 말하는 case란, action.type을 의미한다.
    // dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
    // 아래 return 절이 실행된다.
    case PLUS_ONE: //위에 action creator를 만들었기때문에 문자열이 아닌 선언한 상수를 넣어줌
      return {
        // 기존 state에 있던 number에 +1을 더한다.
        number: state.number + 1,
      };

      case MINUS_ONE:
            return {
                  number:state.number -1,
            };
    default:
      return state;
  }
};

//모듈파일에서는 리듀서를 export default 한다.
export default counter;
