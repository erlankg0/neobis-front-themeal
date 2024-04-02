import React from "react";
import {Image} from "antd";
import styles from './image.module.css'

interface IImage {
    url: string
}

const MealImage: React.FC<IImage> = ({url}) => {
    return (
        <Image className={styles.image} width={'70%'} src={url}/>
    )
}
export default MealImage