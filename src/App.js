//App.js가 프로젝트 제일 최상위에 존재하는 컴포넌트이기때문에 router.js를 여기에 넣어줌
import React from "react";
import Router from "./shared/Router";
import {useSelector} from "react-redux";

function App() {
      const configStore = useSelector((state)=>state);
      return <Router />
}

export default App;
