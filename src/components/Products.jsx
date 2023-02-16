import React from "react";
import Product from "./Product";
import { Badge, Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {
  lowToHighPrice,
  highToLowPrice,
  resetFilter,
  sortByRating
} from "../features/Cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.cart.products);
  return (
    <div className="container-fluid">
      <h2 className="mx-5 px-5 mt-5 text-secondary text-center">
        Shop Now
        <Badge bg="danger mx-2">50% off</Badge>
      </h2>
      <div>
        <Button
          variant="primary btn-sm"
          onClick={(e) => dispatch(lowToHighPrice())}
          style={{
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem",
          }}
        >
          Price LowToHigh
        </Button>
        <Button
          variant="primary btn-sm mx-2"
          onClick={(e) => dispatch(highToLowPrice())}
          style={{
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem",
          }}
        >
          Price HighToLow
        </Button>
        <Button
          variant="primary btn-sm"
          onClick={(e) => dispatch(resetFilter())}
          style={{
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem",
          }}
        >
          Reset filters
        </Button>
        <div className="my-2 d-flex gap-3">
          <div className="d-flex gap-2 border p-1">
            <label htmlFor="rating2">Rating&gt;2</label>
            <input type="radio" name="rating" id="rating2" onClick={(e)=>dispatch(sortByRating(2))}/>
          </div>
          <div className="d-flex gap-2 border p-1">
            <label htmlFor="rating3">Rating&gt;3</label>
            <input type="radio" name="rating" id="rating3" onClick={(e)=>dispatch(sortByRating(3))}/>
          </div>
          <div className="d-flex gap-2 border p-1">
            <label htmlFor="rating4">Rating&gt;4</label>
            <input type="radio" name="rating" id="rating4" onClick={(e)=>dispatch(sortByRating(4))}/>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {productsData.map((item) => {
          return <Product data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
