import styles from './title.module.css'
import React from "react";

interface ITitle {
    value: string
}

const Title: React.FC<ITitle> = ({value}) => {
    return (
        <h2 className={styles.title}>{value}</h2>
    )
}


export {Title}