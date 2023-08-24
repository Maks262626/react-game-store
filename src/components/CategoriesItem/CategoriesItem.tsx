import { useDispatch, useSelector } from "react-redux";
import { setActiveCaregoryIndex } from "../../redux/filters/slice";
import s from './CategoriesItem.module.scss';
import { selectFilters } from "../../redux/filters/selectors";
import { CategoryItem } from "../../redux/filters/types";

interface CategoriesItemTypes{
    category: CategoryItem
    index: number
}

const CategoriesItem:React.FC<CategoriesItemTypes> = ({category,index}) => {
    const {activeCaregoryIndex} = useSelector(selectFilters);
    const dispatch = useDispatch();
    return (
        <li onClick={() => { dispatch(setActiveCaregoryIndex(index)) }}
            className={`${s.category} ${index === activeCaregoryIndex && s.active}`}>
            <img src={category.srcIcon} alt="icon" />
            <span>{category.title}</span>
        </li>
    );
}

export default CategoriesItem;