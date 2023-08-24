import { Link } from 'react-router-dom';
import emptyCartImg from '../../assets/img/emptyCart.png';
import s from './EmptyCart.module.scss';
const EmptyCart: React.FC<{title?: string}> = ({title = 'Empty'}) => {
    return (
        <div className={s.content}>
            <h1>{title}</h1>
            <img src={emptyCartImg} alt="emptyCartImg" />
            <Link to="/" className={`btn ${s.back}`}>Select Product</Link>
        </div>
    );
}
 
export default EmptyCart;