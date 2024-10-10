import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import Home from "./pages/Home";
import ImportantTasks from "./pages/ImportantTasks";
import IncompleteTasks from "./pages/IncompleteTasks";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import { authActions } from "./store/auth";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      dispatch(authActions.login());
    }
    // Allow navigation only to "/signin" or "/login" when not logged in
    else if (
      !isLoggedIn &&
      location.pathname !== "/signin" &&
      location.pathname !== "/login"
    ) {
      navigate("/signin");
    }
  }, [isLoggedIn, location.pathname, navigate, dispatch]);

  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<AllTasks />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/importantTasks" element={<ImportantTasks />} />
          <Route path="/incompleteTasks" element={<IncompleteTasks />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
