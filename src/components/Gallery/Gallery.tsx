import { useState } from 'react';
import s from './Gallery.module.scss';
const Gallery:React.FC<{images: string[]}> = ({images}) => {
    const [currentImage,setCurrentImage] = useState<string>(images[0]);
    const handleClick = (index: number) =>{
        setCurrentImage(images[index]);
    }
    return (
        <div className={s.gallery}>
            <div className={s.miniImages}>
                {images.map((src,index) =>{
                    return (
                        <div key={index} onClick={()=>{handleClick(index)}} className={s.miniImg}>
                            <img src={src} alt="miniImg" />
                        </div>
                    );
                })}
            </div>
            <div className={s.mainImage}>
                <img src={currentImage} alt="currentImage" />
            </div>
        </div>
    );
}
 
export default Gallery;