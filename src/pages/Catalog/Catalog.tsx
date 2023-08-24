import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";
import ProfileAction from "../../components/ProfileAction/ProfileAction";
import Search from "../../components/Search/Search";
import SliderCarousel from "../../components/SliderCarousel/SliderCarousel";
import s from './Catalog.module.scss';
const Catalog:React.FC = () => {
    return (
        <div className={s.catalog}>
            <div className={s.pageTop}>
                <Search/>
                <ProfileAction/>
            </div>
            <SliderCarousel/>
            <Filters/>
            <Products/>
        </div>
    );
}
 
export default Catalog;