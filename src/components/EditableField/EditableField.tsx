import { ChangeEvent, useState } from 'react';
import s from './EditableField.module.scss';
interface EditableFieldProps{
    initialValue: string,
    className: string,
    onSave: (value: string) => void
}
const EditableField:React.FC<EditableFieldProps> = ({ initialValue, onSave,className }) => {
    const [value, setValue] = useState<string>(initialValue);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const handleDoubleClickName = () => {
        setIsEditing(true)
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    const validation = (value:string):boolean =>{
        if(value.length < 3){
            setError('must be at least 4 characters long.');
            return false;
        }  
        if(value.trim().length < 3){
            setError('No spaces in corners (:');
            return false;
        }
        return true;
    }
    const handleInputBlur = () => {
        setIsEditing(false);
        if (value !== initialValue) {
            if(validation(value)){
                setError('');
                onSave(value);
            }
        }
    };
    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setIsEditing(false);
            if (value !== initialValue) {
                if(validation(value)){
                    setError('');
                    onSave(value)
                }
            }
        }
    };
    return (
        <div className={className} onDoubleClick={handleDoubleClickName}>
            {!isEditing && <div>{initialValue}</div>}
            {isEditing && <input className={s.changeInput}
                type="text"
                value={value}
                autoFocus
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
            />}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default EditableField;
