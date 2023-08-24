import { Link } from "react-router-dom";
import s from './MenuItem.module.scss'; 
import { useSelector } from "react-redux";
import { selectMenu } from "../../redux/menu/selectors";
import { MenuItem } from "../../redux/menu/types";


const MenuItem:React.FC<{item: MenuItem}> = ({item}) => {
    const {activePath} = useSelector(selectMenu);
    return (
        <Link to={item.path} className={`${s.page} ${item.path === activePath && s.active}`}>
            <img src={item.icon} alt="" />
            <span>{item.title}</span>
        </Link>
    );
}

export default MenuItem;