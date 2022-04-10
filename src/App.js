import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import React, {useEffect} from 'react'
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import{Elements} from "@stripe/react-stripe-js"
import Orders from "./Orders"
import Footer from "./Footer";
const promise = loadStripe (
"pk_test_51KgX1oDDmEPeIpR35IrLVN0ww3COrasbktuOrzTbRy2Io3maDZlJk2HmK57YVduFkT7l7OAHMHenU28oQNreEmiU009sEnDa4p"
  
)



function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authU
      if (authUser) {
        // the user just logged in / the user 
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
   return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/orders' element={<><Header/><Orders /></>} />
        <Route path="/Login" element={<Login/>} />
        
        {/* <Route path="/Payment" element={<Payment/>} /> */}
        <Route path="/payment"element={
     <Elements stripe={promise}>
       <Payment />
     </Elements>
   }
 />
   <Route path="/checkout" element={<><Header/><Checkout /></>} />
       {/* <Route path="/" element={<><Header/><Home /></>} /> */}
       <Route path="/"element={<><Header/><Home/><Footer/></>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;