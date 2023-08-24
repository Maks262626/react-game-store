import { Link } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { useSelector } from 'react-redux';
import s from './Favourites.module.scss';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { selectFavourites } from '../../redux/favourites/selectors';
const Favourites:React.FC = () => {
  const { favourites } = useSelector(selectFavourites);
  return (

    <div className={s.products}>
      {favourites.length === 0 ? <EmptyCart title='You dont have favourites ):'/> : 
      <>
        <h1>Your Favoutites</h1>
        <div className={s.favourites}>
          {favourites.map(obj => {
            return <Link to={`/info/${obj.id}`} key={obj.id} className={s.productLink}>
              <Product {...obj} />
            </Link>
          })}
        </div>
      </>}
     
    </div>
  );
}

export default Favourites;