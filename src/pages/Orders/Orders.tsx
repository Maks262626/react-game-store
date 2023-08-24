import { useSelector } from 'react-redux';
import s from './Orders.module.scss';
import Order from '../../components/Order/Order';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { selectOrders } from '../../redux/orders/selectors';
const Orders:React.FC = () => {
    const {orders} = useSelector(selectOrders); 
    const data = orders.map((order,index)=>{
        return <Order key={index} order={order} index={index}/>
    });
    return (
        <div className={s.ordersWrapper}>
            {data.length === 0 ? <EmptyCart title="You dont have orders yet ):"/> : 
            <>
                <h1 className={s.title}>Your Orders</h1>
                <div className={s.orders}>
                    {data}
                </div>
            </>}
            
            
        </div>
    );
}
 
export default Orders;