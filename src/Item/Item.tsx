import Button from "@material-ui/core/Button";
import { CartItemType } from "../models/cart.model";
import { Wrapper } from "./Item.style";

type Props = {
  item: CartItemType;
  addToCart: (item: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
    <Button onClick={() => addToCart(item)}>Add to Cart</Button>
  </Wrapper>
);

export default Item;
