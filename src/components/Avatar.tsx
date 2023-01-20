import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: Boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    console.log(props)

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
           {...props}
        />
    );  
}