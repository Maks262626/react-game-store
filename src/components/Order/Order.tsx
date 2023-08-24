import { useNavigate } from 'react-router-dom';
import s from './Order.module.scss';
import { OrderItem } from '../../redux/orders/types';
interface OrderTypes{
    order: OrderItem,
    index: number
}
const Order: React.FC<OrderTypes> = ({ order, index }) => {
    const navigate = useNavigate();
    return (
        <div className={s.order} key={index}>
            <div className={s.left}>
                {order.order.map((item) => {
                    return <img 
                            src={item.thumbnail} 
                            key={item.id} 
                            alt="" 
                            className={s.oderImg} 
                            onClick={()=>{navigate(`/info/${item.id}`)}}/>
                })}
            </div>
            <div className={s.right}>
                <div>Order #{index + 1}</div>
                <div>Order Price ${order.orderTotalPrice}</div>
            </div>
        </div>
    );
}

export default Order;