import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { removeFromCart } from "../features/Cart/cartSlice";

const Cart = () => {
  const cartVal = useSelector((state) => state.cart.cart);
  return (
    <div className="container my-5">
      <div>
        <h2>Your cart - ({cartVal.length})</h2>
        {cartVal.map((item) => {
          return <CartProduct item={item} />;
        })}
      </div>
      <div className="fw-bolder text-dark bg-warning p-3 my-3 rounded">
        Grand total -
        
        ${Math.round(cartVal.reduce(
          (accumulator, currentValue) => accumulator + currentValue.price,
          0
        ))}
      </div>
    </div>
  );
};

function CartProduct({ item }) {
  const dispatch = useDispatch();

  return (
    <div class="card my-3">
      <div class="card-body d-flex gap-5">
        <img src={item.image} height={100} width={120}/>
        <div>
          <p className="fw-semibold">{item.title}</p>
          <p className="text-primary fw-bold">${item.price}</p>
          <Button
            variant="danger"
            onClick={(e) => dispatch(removeFromCart(item.id))}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
