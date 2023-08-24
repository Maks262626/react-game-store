import { Link } from "react-router-dom";
import s from './BackLink.module.scss';
const BackLink:React.FC = () => {
    return (
        <Link to="/" className={s.back} >
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.375 10L0.625 0.624999L0.624999 19.375L19.375 10Z" fill="#8A8A8A" />
            </svg>
            <span>Back</span>
        </Link>
    );
}
 
export default BackLink;