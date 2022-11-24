import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* 
	Routes안에 이렇게 작성합니다. 
	Route에는 react-router-dom에서 지원하는 props들이 있습니다.
      path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
	element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
	 */}
      <Route path="/" element={<Home />}/>
      <Route path="/detail" element={<Detail />}/>
      {/* :id === dynamic route(동적인 라우트)를 받겠다는 말 ===상세페이지에서 각id로 이동할 수 있다
      id는 useParams에서 조회할 수 있는 값 */}
      <Route path="/detail/:id" element= {<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;