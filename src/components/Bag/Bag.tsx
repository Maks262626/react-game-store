import s from './Bag.module.scss';
import BackLink from '../BackLink/BackLink';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllItems } from '../../redux/cart/slice';
import { addOrder } from '../../redux/orders/slice';
import { selectCart } from '../../redux/cart/selectors';
const Bag:React.FC = () => {
    const { items,totalPrice, itemsCount } = useSelector(selectCart);
    const dispatch = useDispatch();
    const handleOrder = () =>{
        const orderItem = {
            order: items.map(el => ({ id: el.id, thumbnail: el.thumbnail })),
            orderTotalPrice: totalPrice
        };
        dispatch(addOrder(orderItem));
        dispatch(deleteAllItems());
    }
    return (
        <div className={s.bag}>
            <div className={s.summary}>
                <div className={s.title}>Order Summary</div>

                <div className={s.row}>
                    <div className={s.info}>Items count:</div>
                    <div className={s.price}>{itemsCount}</div>
                </div>
                <div className={s.total}>
                    <div className={s.info}>Order Total</div>
                    <div className={s.price}>${totalPrice}</div>
                </div>
                <button className={`btn ${s.btnOrder}`} onClick={handleOrder}>
                    Place your order
                </button>
            </div>
            <BackLink />
        </div>
    );
}

export default Bag;