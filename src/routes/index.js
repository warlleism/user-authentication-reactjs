import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import Singup from "../pages/signup";
import Login from "../pages/login";
import Home from "../pages/home";
import { Fragment } from "react";

export const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Singup />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/singup" element={<Singup />} />
          <Route path="*" element={<Singup />} />
          <Route />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
