import React from 'react';
import s from './Page.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/filters/slice';

interface PageTypes{
    p: number,
    cp: number
}
const Page:React.FC<PageTypes> = ({p,cp}) => {
    const dispatch = useDispatch();
    const handleClickPage = (p:number) =>{
        dispatch(setCurrentPage(p));
    }
    return (
        <div
            className={`${s.page} ${p === cp && s.active}`}
            key={p}
            onClick={() => { handleClickPage(p) }}>
            {p}
        </div>
    );
}

export default Page;