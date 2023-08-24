import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './ProductSkeleton.module.scss';
const ProductSkeleton:React.FC = () => {
    return (
        <SkeletonTheme baseColor="#DA00FE" highlightColor="#A100ED">
            <div className={s.product}>
                <div className={s.image}>
                    <Skeleton  height={300} />
                </div>
                <div className={s.title}>
                    <Skeleton />
                </div>
                <div className={s.category}>
                    <Skeleton />
                </div>
                <div className={s.price}>
                    <Skeleton />
                </div>
                <div className={s.button}>
                    <Skeleton height={70}/>
                </div>
            </div>
        </SkeletonTheme>
    );
}
export default ProductSkeleton