import { addProduceToCart, updateCountInCart } from '../../store/cart.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../store/produce.js'

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const produceSlice = useSelector(state => state.produce)

  function buttonToggle(){
    dispatch(toggleLike(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={buttonToggle}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={ () => {
            if (cart[produce.id]){
              dispatch(updateCountInCart(produce.id, 1))
            } else {
              dispatch(addProduceToCart(produce.id))
            }
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;