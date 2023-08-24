import s from './NotFound.module.scss';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const NotFound:React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/not-found');
      }, []);
      
    return (
        <div className={s.content}>
            <div className={s.info}>
                <h1>404</h1>
                <p>Sorry, we were unable to find that page</p>
                <Link to="/" className={`btn ${s.back}`}>Back to Home</Link>
            </div>
        </div>
    );
}

export default NotFound;