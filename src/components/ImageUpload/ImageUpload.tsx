import { ChangeEvent, useRef } from 'react';
// import s from './ImageUpload.module.scss';
interface ImageUploadProps{
    avatar: string,
    className:string,
    onSave: (utl:string) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({avatar,className,onSave}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const url = URL.createObjectURL(selectedFile);
            onSave(url);
        }
    };
    const handleAvatarClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <div className={className}>
            <img src={avatar} alt="avatar" onClick={handleAvatarClick} />
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default ImageUpload;