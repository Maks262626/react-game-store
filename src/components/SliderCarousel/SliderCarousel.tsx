import './SliderCarousel.scss';
import 'swiper/css';
import { Rating } from 'react-simple-star-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { productsAPI } from '../../api/api';
import { useDispatch } from 'react-redux';
import {  addItem } from '../../redux/cart/slice';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ProductType } from '../../redux/products/types';
import { CartItem } from '../../redux/cart/types';


const SliderCarousel = () => {
    const dispatch = useDispatch();
    const [banners, setBanners] = useState<ProductType[]>();
    const [isLoading,setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setIsLoading(true);
        productsAPI.getBanners().then(res => {
            setBanners(res.data);
            setIsLoading(false);
        });
    }, []);
    const handleClick = (item: ProductType) =>{  
        const cardItem:CartItem = {
            thumbnail: item.thumbnail,
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating,
            id: item.id,
            count: 1
        }
        dispatch(addItem(cardItem));
    }
    const slides = banners?.map(slide => {
                        
        return <SwiperSlide key={slide.id}>
            <div className="slide">
                <div className="slide__left">
                    <div className="slide__rating">
                        <Rating readonly initialValue={slide.rating} size={16} fillColor="#FAFF00" /> 
                    </div>
                    <div className="slide__title">
                        {slide.title}
                    </div>
                    <div className="slide__subtitle">
                        {slide.brand}
                    </div>
                    <div className="slide__text">
                        {slide.description}
                    </div>
                    <button className="slide__btn btn" onClick={()=>{handleClick(slide)}}>
                        <svg viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.34761 6.7L7.29681 0.4H2.36001L0.297212 5.8C0.233612 5.992 0.200012 6.1912 0.200012 6.4C0.200012 7.7248 1.58001 8.8 3.28521 8.8C4.85721 8.8 6.15681 7.8832 6.34761 6.7ZM11 8.8C12.704 8.8 14.0852 7.7248 14.0852 6.4C14.0852 6.3508 14.0816 6.3016 14.0792 6.2548L13.4684 0.4H8.53161L7.91961 6.25C7.91678 6.29995 7.91517 6.34997 7.91481 6.4C7.91481 7.7248 9.29601 8.8 11 8.8ZM17 10.0552V14.8H5.00001V10.0624C4.47441 10.252 3.89601 10.36 3.28521 10.36C3.05121 10.36 2.82441 10.3324 2.60001 10.3012V17.92C2.60001 18.844 3.35481 19.6 4.27761 19.6H17.72C18.644 19.6 19.4 18.8428 19.4 17.92V10.3024C19.1732 10.3372 18.9443 10.3569 18.7148 10.3612C18.1297 10.3606 17.5492 10.257 17 10.0552ZM21.704 5.8L19.6388 0.4H14.7032L15.6512 6.6904C15.836 7.8784 17.1356 8.8 18.7148 8.8C20.4188 8.8 21.8 7.7248 21.8 6.4C21.8 6.1912 21.7664 5.992 21.704 5.8Z" fill="#DA00FE" />
                        </svg>
                        <span>Order Now</span>
                    </button>
                </div>
                <div className="slide__right">
                    <img src={slide.thumbnail} alt="thumbnail" />
                </div>
            </div>
            
        </SwiperSlide>
    });
    return (
        <div className="slider-wrapper">
            <div className="slider">
            
            <SkeletonTheme baseColor="#DA00FE" highlightColor="#A100ED">
                <Swiper
                    modules={[Pagination]}
                    autoHeight={true}
                    pagination={{ clickable: true, el: '.pagination' }}
                >
                    {isLoading ? <Skeleton height={300} style={{width:'100%',borderRadius:'20px',height:'100%'}}/> : slides}
                </Swiper>
                </SkeletonTheme>
                <div className="pagination"></div>
            </div>
        </div>
    );
}

export default SliderCarousel;