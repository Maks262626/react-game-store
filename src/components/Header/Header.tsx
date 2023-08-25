import s from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import arrowRight from '../../assets/icon/arrowRight.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setActivePath } from '../../redux/menu/slice';
import { selectFilters } from '../../redux/filters/selectors';
import { selectMenu } from '../../redux/menu/selectors';
import MenuItem from '../MenuItem/MenuItem';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header:React.FC = () => {
    const {categories} = useSelector(selectFilters);
    const {data:menu} = useSelector(selectMenu);
    const [burgerActive,setBurgerActive] = useState<boolean>(false);
    const dispatch = useDispatch();
    const location = useLocation();
    return (
        <>
            <header className={`${s.header} ${burgerActive && s.active}`} onClick={()=>{setBurgerActive(false)}}>
                <BurgerMenu burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
                <div className={s.content}>
                    <Link to="/" className={s.logo} onClick={()=>{dispatch(setActivePath("/"))}}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul className={s.pages}>
                        {menu.map((item,index) => {
                            return <MenuItem item={item} key={index}/>
                        })}
                    </ul>
                    <div className={`${s.storeCategories} ${location.pathname === '/' && s.show}`} >
                        <div className={s.title}>
                            <span>Category</span>
                            <img src={arrowRight} alt="arrowRight" />
                        </div>
                        <ul className={s.categories}>
                            {categories.map((category,index) =>{
                                return <CategoriesItem category={category} index={index} key={index}/>
                            })}
                        </ul>
                    </div>
                </div>
                
            </header>
            <BurgerMenu burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
        </>
    );
}

export default Header;