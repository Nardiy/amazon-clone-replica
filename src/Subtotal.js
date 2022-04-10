import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import {useNavigate} from "react-router-dom"
function Subtotal() {
  const [{ Cart }, dispatch] = useStateValue();
  
  const navigate = useNavigate();
  const getCartTotal = (Cart) =>
    Cart?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({Cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal(Cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e)=>navigate("/Payment")}>
      Proceed to Checkout
      
      </button>
    </div>
  );
}

export default Subtotal;