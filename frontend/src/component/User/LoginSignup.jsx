import React, { Fragment, useEffect, useRef, useState } from "react";
import "./LoginSignup.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FaceIcon from "@mui/icons-material/Face";
import { useAlert } from "react-alert";

// {========REDUCERs&& Actions=================}
import { useDispatch, useSelector } from "react-redux";
import { login ,clearErrors, register} from "../../Redux/Actions/userAction";


const LoginSignup = ({ history, location }) => {
  const dispatch = useDispatch();
const {loading,error,isAuthenticated,token} =useSelector(state=>state.user)
// console.log(token)

// const navigate=useNavigate()
  const alert=useAlert()
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("./avatar.png");

  //   {=============================LOGIN--FORM===========================}
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail,loginPassword))
   
   
  };
  //{=============================REGISTER--FORM===========================}
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = users;
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    // console.log("Signup form submited ......");
    dispatch(register(myForm))
  };
  //   {================================================MAIN-THING=========================================}
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUsers({ ...users, [e.target.name]: e.target.value });
    }
  };
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
//   {=====================USE-Effect========================0}

useEffect(()=>{
  // Cookies.set("token",token)
  // Cookies.set("user",user)
 if(error){
    alert.error(error)
    dispatch(clearErrors())
  }
 if(isAuthenticated){
  history.push("/account");
 }
},[error,isAuthenticated,history,dispatch,alert,token])

  return (
    <Fragment>

    
   {loading  ? <Loader/> : 
   <Fragment>
   <div className="LoginSignUpContainer">
     <div className="LoginSignUpBox">
       <div>
         <div className="login_signUp_toggle">
           <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
           <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
         </div>
         <button ref={switcherTab}></button>
       </div>
       <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
         <div className="loginEmail">
           <MailOutlineIcon />
           <input
             type="email"
             placeholder="Email"
             required
             value={loginEmail}
             onChange={(e) => setLoginEmail(e.target.value)}
           />
         </div>
         <div className="loginPassword">
           <LockOpenIcon />
           <input
             type="password"
             placeholder="Password"
             required
             value={loginPassword}
             onChange={(e) => setLoginPassword(e.target.value)}
           />
         </div>
         <Link to="/password/forgot">Forget Password ?</Link>
         <input type="submit" value="Login" className="loginBtn" />
       </form>
       {/* {=============================SIGNUP=====================================} */}
       <form
         className="signUpForm"
         ref={registerTab}
         encType="multipart/form-data"
         onSubmit={registerSubmit}
       >
         <div className="signUpName">
           <FaceIcon />
           <input
             type="text"
             placeholder="Name"
             required
             name="name"
             value={name}
             onChange={registerDataChange}
           />
         </div>
         <div className="signUpEmail">
           <MailOutlineIcon />
           <input
             type="email"
             placeholder="Email"
             required
             name="email"
             value={email}
             onChange={registerDataChange}
           />
         </div>
         <div className="signUpPassword">
           <LockOpenIcon />
           <input
             type="password"
             placeholder="Password"
             required
             name="password"
             value={password}
             onChange={registerDataChange}
           />
         </div>

         <div id="registerImage">
           <img src={avatarPreview} alt="Avatar Preview" />
           <input
             type="file"
             name="avatar"
             accept="image/*"
             onChange={registerDataChange}
           />
         </div>
         <input type="submit" value="Register" className="signUpBtn" />
       </form>
     </div>
   </div>
 </Fragment>
}
</Fragment>
  );
};

export default LoginSignup;
