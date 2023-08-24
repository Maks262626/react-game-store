import Header from './components/Header/Header';
import './App.scss';
import Catalog from './pages/Catalog/Catalog';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import NotFound from './components/NotFound/NotFound';
import Orders from './pages/Orders/Orders';
import Favourites from './pages/Favourites/Favourites';
import Profile from './pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePath } from './redux/menu/slice';
import { useEffect } from 'react';
import { selectMenu } from './redux/menu/selectors';

function App(): JSX.Element{
  const location = useLocation();
  const dispatch = useDispatch();
  const isNotFound = location.pathname === '/not-found';
  const {data} = useSelector(selectMenu);
  const activeMenu = data.find(item => item.path === location.pathname);

  useEffect(() => {
      if (activeMenu) {
          dispatch(setActivePath(activeMenu.path));
      }
  }, [activeMenu]);
  return <div className="wrapper">
      {!isNotFound && <Header/>}
      <main className="main"> 
        <Routes>
          <Route path="/" element={<Catalog/>} />
          <Route path="/info/:id" element={<ProductInfo/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/favourites" element={<Favourites/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>

  
}

export default App
