import {NavLink} from "react-router-dom";
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to={'/'} className={styles.link}>
                The Meal
            </NavLink>
        </header>
    )
}

export default Header;