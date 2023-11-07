// import { signOut } from "../utils/firebase";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
 

 

const Header = () => {
    const navigate =useNavigate();

    // const selector=useSelector((store)=>store.userReducer);

 
    

    // console.log("selector",selector);
    

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.

            navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/")

            console.log("error",error);
            
            
          });
    }
  return (
    <div className="flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black">
      <img
        className="w-44 bg-no-repeat"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex p-2">
        <img
          className="w-12 h-12"
          src="https://tse2.mm.bing.net/th?id=OIP.xNVHMQZeGGLge2GkMXbrXwAAAA&pid=Api&P=0&h=220"
          alt=""
        />

        <button onClick={handleSignOut} className="text-black  font-bold p-2">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
