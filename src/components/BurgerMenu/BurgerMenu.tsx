import s from './BurgerMenu.module.scss';

interface BurgerMenuTypes{
    burgerActive: boolean,
    setBurgerActive: (burgerActive:boolean) => void
}
const BurgerMenu:React.FC<BurgerMenuTypes> = ({burgerActive,setBurgerActive}) => {
    return (
        <div className={`${s.burger} ${burgerActive && s.active}`} onClick={()=>{setBurgerActive(!burgerActive)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
);
}
 
export default BurgerMenu;