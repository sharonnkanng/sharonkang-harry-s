import React, { useEffect, useState }  from "react";
import  {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductAll  from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import LogIn from "./page/LogIn";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   console.log("signed in?", isLogin);
  // }, [isLogin])

  return (
    <div>
    <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
    <Routes>
      <Route path="/" element={<ProductAll/>}/>
      <Route path="/login" element={<LogIn setIsLogin={setIsLogin}/>}/>
      <Route path="/product/:id" element={<PrivateRoute authenticate={isLogin} />}/>
    </Routes>
    </div>
  );
}

export default App;
