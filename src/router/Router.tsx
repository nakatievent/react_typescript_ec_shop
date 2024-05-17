import { Route, Routes } from "react-router-dom";
import Header from "../components/Organisms/Header";
import { Login } from "../components/Login";
import { Test } from "../components/Test";
import { SignIn } from "../pages/SignIn";
import { FailedLogin } from "../pages/FailedLogin";
import { Memo } from "../pages/Memo";
// import { Blog } from "../pages/Blog";
import { Home } from "../pages/Home";
import SignUp from "../pages/SignUp";
import Top from "../pages/Top";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <>
            {/* <Header /> */}
            <Login />
          </>
        }
      />
      <Route path="/home" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/memo" element={<Memo />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/fail_login" element={<FailedLogin />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/top" element={<Top />} />
    </Routes>
  );
};
