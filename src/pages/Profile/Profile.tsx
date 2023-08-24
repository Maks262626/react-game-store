import { useDispatch, useSelector } from 'react-redux';
import s from './Profile.module.scss'
import { setAvatar, setBg, setName, setStatus } from '../../redux/profile/slice';
import EditableField from '../../components/EditableField/EditableField';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { selectProfile } from '../../redux/profile/selectors';
const Profile:React.FC = () => {
    const { avatar, name, bg, status } = useSelector(selectProfile);
    const dispatch = useDispatch();
    const handleAvatarSave = (url: string) => {
        dispatch(setAvatar(url));
    };
    const handleBgSave = (url: string) => {
        dispatch(setBg(url));
    };
    const handleNameSave = (value: string) =>{
        dispatch(setName(value));
    }
    const handleStatusSave = (value: string) =>{
        dispatch(setStatus(value));
    }
    return (
        <div className={s.profile}>
            <ImageUpload className={s.pageBg} avatar={bg} onSave={handleBgSave}/>
            <div className={s.mainInfo}>
                <ImageUpload className={s.avatar} avatar={avatar} onSave={handleAvatarSave}/>
                <EditableField className={s.name} initialValue={name} onSave={handleNameSave}/>
                <EditableField className={s.status} initialValue={status} onSave={handleStatusSave}/>
            </div>
        </div>
    );
}

export default Profile;