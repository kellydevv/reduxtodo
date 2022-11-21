//초기 상태값
//=== useState(0);
//초기값은 {}객체 안에 number이라는 변수에 초기값으로 0을 할당해준것.
const initialState = {
      number:0,
};

//리듀서===변화를 일으키는 함수
const counter = (state = initialState, action) => {
      switch( action.type) {
            default:return state;
      }
};

//모듈파일에서는 리듀서를 export default 한다.
export default counter;