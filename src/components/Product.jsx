import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addIntoCart, removeFromCart } from "../features/Cart/cartSlice";
import { useSelector } from "react-redux";

function Product({ data }) {
  const dispatch = useDispatch();
  const cartVal = useSelector((state) => state.cart.cart);
  return (
    <Card style={{ width: "18rem" }} className="m-5">
      <Card.Img variant="top" src={data.image} style={{ height: 230 }} />
      <Card.Body>
        <Card.Title>{data.title.substring(0, 40)}</Card.Title>
        <Card.Text>
          <b className="text-success">${data.price}</b> | {data.rating.rate}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="gray"
            style={{height:25}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </Card.Text>
        <Card.Text>{data.description.substring(0, 100)}</Card.Text>
        <Button
          variant="primary"
          disabled={cartVal.find((item) => item.id === data.id)}
          onClick={() => dispatch(addIntoCart(data))}
        >
          Add item
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="danger"
          disabled={!cartVal.find((item) => item.id === data.id)}
          onClick={() => dispatch(removeFromCart(data.id))}
        >
          Remove item
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
