import { useDispatch } from 'react-redux';
import s from './Pagination.module.scss';
import arrowRight from '../../assets/icon/arrowRight.svg';
import { setCurrentPage } from '../../redux/filters/slice';
import Page from '../Page/Page';

interface PaginationTypes{
    total: number,
    currentPage: number,
    limit: number
}
const Pagination:React.FC<PaginationTypes> = ({total,currentPage:cp,limit}) => {
    const dispatch = useDispatch();
    const pagesCount = Math.ceil(total/limit);
    if(!pagesCount) return;
    const handleClickNext = () =>{
        if(cp !== pagesCount){
            dispatch(setCurrentPage(++cp));
        }
    }
    const handleClickPrev = () =>{
        if(cp !== 1){
            dispatch(setCurrentPage(--cp));
        }
    }   
    
    const createPagesArr = (pagesCount:number,cp:number):number[] =>{
        let pages = [];
        if(pagesCount<10){
            pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
        }else{
            pages.push(1);
            for (let i = cp-1; i <= cp+1; i++) {
                if(i > 1 && i < pagesCount) pages.push(i);
        
            }
            pages.push(pagesCount);
        }
        return pages;
    }
    const pages = createPagesArr(pagesCount,cp);
    return (
        <div className={s.pagination}>
            <div className={`${s.page} ${s.prev}`} onClick={handleClickPrev}>
                <img src={arrowRight} alt="arrowLeft" />
            </div>
            <div className={s.mainPages}>
                {pages.map(p=>{
                    return <Page p={p} cp={cp} key={p}/>
                })}
            </div>
            <div className={`${s.page} ${s.next}`} onClick={handleClickNext}>
                <img src={arrowRight} alt="arrowRight" />
            </div>

        </div>
    );
}
 
export default Pagination;