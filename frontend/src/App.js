import React from "react";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import IncompleteTasks from "./pages/IncompleteTasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Router>
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
      </Router>
    </div>
  );
};

export default App;
