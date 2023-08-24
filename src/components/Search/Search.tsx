import { useDispatch } from 'react-redux';
import s from './Search.module.scss';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import seacrhIcon from '../../assets/icon/search.svg';
import close from '../../assets/icon/close.svg';
import { setSearchValue } from '../../redux/filters/slice';
const Search:React.FC = () => {
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const delaySeacrh = useCallback(
        debounce((value)=>{
            dispatch(setSearchValue(value));
        },1000),[]
    );
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
        delaySeacrh(e.target.value);
    }
    const onClose = () =>{
        setValue('');
        dispatch(setSearchValue(''));
    }
    return (
        <div className={s.search}>
            <img className={s.seacrhIcon} src={seacrhIcon} alt="seacrhIcon" />
            <input className={s.searchInput} value={value} placeholder="Search" type="text" onChange={(e)=>{handleChange(e)}}/>
            {value && <img className={s.closeIcon} src={close} alt="" onClick={onClose}/>}
        </div>
    );
}

export default Search;