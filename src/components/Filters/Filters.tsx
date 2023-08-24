import { useDispatch, useSelector } from 'react-redux';
import s from './Filters.module.scss';
import { setMainFiltersActive, setOrderFilter} from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';
import { SortOrder } from '../../redux/filters/types';
const Filters:React.FC = () => {
    const {mainFilters,mainFiltersActive,orderFilter} = useSelector(selectFilters);
    const dispatch = useDispatch();
    return (
        <>
            <div className={s.title}>
                Product
            </div>
            <ul className={s.filters}>
                {mainFilters.map((f,i) =>{
                    return <li className={`${s.filter} ${mainFiltersActive === i && s.active}`}  onClick={()=>{dispatch(setMainFiltersActive(i))}} key={i}>{f}</li>
                })}
            </ul>
            <ul className={s.filters}>
                <li className={`${s.filter} ${orderFilter === SortOrder.ASC && s.active}`} onClick={()=>{dispatch(setOrderFilter(SortOrder.ASC))}}>Increasing</li>
                <li className={`${s.filter} ${orderFilter === SortOrder.DESC && s.active}`} onClick={()=>{dispatch(setOrderFilter(SortOrder.DESC))}}>Decreasing</li>
            </ul>
        </>
    );
}
 
export default Filters;