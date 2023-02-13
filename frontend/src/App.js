import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect } from "react";
import React from "react";
import Footer from "./component/footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignup from "./component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./Redux/Actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";

// import Cookies from 'js-cookie'

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
 console.log("App",user)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
 

      <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route   path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/login" component={LoginSignup} />
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

      <Footer />
    </Router>
  );
}

export default App;
