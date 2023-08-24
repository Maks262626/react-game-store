import { useEffect, useMemo, useRef } from 'react';
import Product from '../Product/Product';
import s from './Products.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMounting } from '../../redux/products/slice';
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton';
import Pagination from '../Pagination/Pagination';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentPage, setFilters } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store';
import { selectFilters } from '../../redux/filters/selectors';
import { selectProducts } from '../../redux/products/selectors';
import { fetchData, fetchTotalProducts } from '../../redux/products/asyncActions';
import { Status } from '../../redux/products/types';

const Products:React.FC = () => {
  const { 
    categories, 
    activeCaregoryIndex, 
    currentPage,
    limit, 
    searchValue, 
    mainFilters,
    orderFilter, 
    mainFiltersActive
  } = useSelector(selectFilters);
  const { data, status, isMounting, total } = useSelector(selectProducts);
  const currentCategory = categories[activeCaregoryIndex].title;
  const currentFilter = mainFilters[mainFiltersActive];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const parseFiltersFromQuery = (query: string): Record<string,string> => {
    const params = qs.parse(query.substring(1));
    return {
      p: params.p?.toString() || '',
      category: params.category?.toString() || '',
      sortBy: params.sortBy?.toString() || '',
      search: '',
      order: params.order?.toString() || ''
    };
  };

  //dispatch filters from url
  useEffect(() => {
    if (window.location.search) {
      const params = parseFiltersFromQuery(window.location.search);
      dispatch(setFilters(params));
    }
  }, []);
  //set filters total products
  useEffect(() => {
    if (!isMounting) {
      dispatch(setCurrentPage(1));
    }
    appDispatch(fetchTotalProducts({ currentCategory, searchValue }));
  }, [currentCategory, searchValue]);
  //set filtr in url
  useEffect(() => {
    if (!isMounting) {
      const queryString = {
        category: currentCategory,
        sortBy: currentFilter,
        search: searchValue,
        order: orderFilter,
        p: currentPage
      };
      navigate(`?${qs.stringify(queryString)}`);
    }
    dispatch(setIsMounting(false));
    appDispatch(fetchData({ currentCategory, searchValue, currentFilter, orderFilter, currentPage, limit }));
  }, [currentCategory, currentFilter, orderFilter, currentPage, searchValue]);
  //scroll to wrapper on currentPage change
  useMemo(()=>{
    if(containerRef.current)
      containerRef.current.scrollIntoView();
  },[currentPage])

  const skeletons = new Array(limit).fill(null).map((_, i) => { return <ProductSkeleton key={i} /> });
  const products = data.map(obj => {
    return <Link to={`/info/${obj.id}`} key={obj.id} className={s.productLink}>
      <Product {...obj}/>
    </Link>
  });
  return (
    <div className={s.wrapper} ref={containerRef}>
      {(searchValue && total !== 0) && <h1>Seacrh for {searchValue}</h1>}
      {(searchValue && total === 0) && <h1>Not found for {searchValue}</h1>}
      <div className={s.products} >
        {status === Status.LOADING ? skeletons : products}
      </div >
      <Pagination total={total} currentPage={currentPage} limit={limit}/>

    </div>

  );
}

export default Products;