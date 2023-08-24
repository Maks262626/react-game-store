import { useDispatch, useSelector } from 'react-redux';
import s from './Product.module.scss';
import { useState } from 'react';

import like from '../../assets/icon/like.svg';
import likeEmpty from '../../assets/icon/like-empty.svg';
import { toggleFavourite } from '../../redux/favourites/slice';
import { selectFavourites } from '../../redux/favourites/selectors';
import { ProductType } from '../../redux/products/types';
import { CartItem } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/slice';

const Product:React.FC<ProductType> = (props) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const dispatch = useDispatch();
    const favourites = useSelector(selectFavourites);
    const addTocart = () =>{
        const cartItem:CartItem = {
            thumbnail: props.thumbnail,
            title: props.title,
            description: props.description,
            price: props.price,
            rating: props.rating,
            id: props.id,
            count: 1
        };
        dispatch(addItem(cartItem));
    }
    const btnAnimation = () => {
        setIsClicked(!isClicked);
        setTimeout(() => {
            setIsClicked(false);
        }, 200); 
    }
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) =>{
        e.preventDefault();

        addTocart();
        
        btnAnimation();
        
    }
    const handleLike = (e: React.MouseEvent<HTMLDivElement>) =>{
        e.preventDefault();
        dispatch(toggleFavourite(props));
    }
    return (
        <div className={s.product}>
            <div className={s.top}>
                <img src={props.thumbnail} alt="thumbnail" className={s.image} />
            </div>
            <div className={s.bottom}>
                <div className={s.info}>
                    <div className={s.model}>{props.title}</div>
                    <div className={s.category}>{props.category}</div>
                    <div className={s.price}>${props.price}</div>
                </div>
                <div className={`${s.addProduct} ${isClicked && s.clicked}`} onClick={handleClick}>
                    <h2>Add to Cart</h2>
                </div>
            </div>
            <div className={s.favourite} onClick={handleLike}>
                {
                    favourites.favourites.find(item => item.id === props.id) 
                    ? <img src={like} alt="liked" />
                    : <img src={likeEmpty} alt="notLiked" />
                }
            </div>
        </div>
    );
}

export default Product;