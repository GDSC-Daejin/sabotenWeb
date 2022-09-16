import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import BoardPage from "./pages/BoardPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/category" element={<CategoryPage/>}></Route>
            <Route path="/board" element={<BoardPage/>}></Route>
            <Route path="/mypage" element={<MyPage/>}></Route>
            <Route path="*" element={<div>없는 페이지입니다.</div>}/>
        </Routes>

    </div>
  );
}

export default App;
