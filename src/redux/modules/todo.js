//payload가 필요한 action creator에서는 함수를 선언할 때 매개변수 자리에 payload를 넣어줘야 한다.
//action creator를 사용하는 컴포넌트에서 리듀서로 보내고자 하는 payload를 인자로 넣어줘야 하기 때문에

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

//인자로 payload를 넣어줌으로써 action creator가 액션객체를 생성할 때 payload를 같이 담아 생성하는 원리이다.
// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
      return {
            type: MINUS_NUMBER,
            payload,
      }
}
// Initial State
const initialState = {
      number:0
};

// Reducer
const todos = (state = initialState,action) => {
switch(action.type) {
      case ADD_NUMBER:
            return{
// state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
                  number:state.number +action.payload,
            };
            case MINUS_NUMBER: 
            return {
                  number: state.number - action.payload,
            }
      default:
            return state;
}
};

// export default reducer
export default todos;