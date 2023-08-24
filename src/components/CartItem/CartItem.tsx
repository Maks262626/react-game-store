import s from './CartItem.module.scss';
import trashIcon from '../../assets/icon/trash.svg';
import { addItem, deleteItem, removeItem } from '../../redux/cart/slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../redux/cart/types';



const CartItem:React.FC<CartItem> = (obj) => {
    const {thumbnail,title,description,price,count,rating,id} = obj;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClickAdd = () =>{
        dispatch(addItem(obj));
    }
    const handleClickRemove = () =>{
        if(count !== 1){
            dispatch(removeItem(obj));
        }
    }
    const handleClickDelete = () =>{
        dispatch(deleteItem(obj));
    }
    return (
        <div className={s.item}>
            <div className={s.mainImg} onClick={()=>{navigate(`/info/${id}`)}}>
                <img src={thumbnail} alt="thumbnail" />
            </div>
            <div className={s.content}>
                <div className={s.name}>{title}</div>
                <div className={s.color}>White</div>
                <div className={s.description}>{description}</div>
                <div className={s.rating}>
                    <span>{rating} / 5</span>
                </div>
                <div className={s.aboutPrice}>
                    <div className={s.price}>${price} x {count}</div>
                    <div className={s.count}>
                        <div className={s.remove} onClick={handleClickRemove}>
                            <span></span>
                        </div>
                        <span className={s.quantity}>{count}</span>
                        <div className={s.add} onClick={handleClickAdd}>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={s.trash} onClick={handleClickDelete}>
                            <img src={trashIcon} alt="trash" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CartItem;