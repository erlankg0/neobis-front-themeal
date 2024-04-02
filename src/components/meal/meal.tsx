import {NavLink} from "react-router-dom";
import React from "react";
import {Title} from "../title/title.tsx";
import styles from './meal.module.css';

interface IMealText {
    title: string,
    text: string,
    paragraph: string
}

const MealText: React.FC<IMealText> = ({title, text, paragraph}) => {
    return (
        <div className={styles.content}>
            <Title value={title}/>
            <NavLink className={styles.navLink} to={'/'}>{text}</NavLink>
            <p className={styles.paragraph}>{paragraph}</p>
        </div>
    )
}


export default MealText;