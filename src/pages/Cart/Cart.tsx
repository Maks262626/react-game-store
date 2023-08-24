import { useSelector } from "react-redux";
import Bag from "../../components/Bag/Bag";
import CartItem from "../../components/CartItem/CartItem";
import s from './Cart.module.scss';
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { selectCart } from "../../redux/cart/selectors";

const Cart: React.FC = () => {
    const {itemsCount,items} = useSelector(selectCart);
    const CartItems = items.map(item=>{
        return <CartItem key={item.id} {...item}/> 
    })
    return (
        <div className={s.cart}>
            <div className={s.items}>
                {itemsCount !==0 ? CartItems : <EmptyCart/>}
            </div>
            {itemsCount !== 0 && <Bag/>}
            
        </div>
    );
}
 
export default Cart;