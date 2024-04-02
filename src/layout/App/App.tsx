import './App.module.css'
import {BrowserRouter} from "react-router-dom";
import Header from "../../components/header/header.tsx";
import Meal from "../Meal/Meal.tsx";
import styles from './App.module.css'
import SearchMeal from "../../components/search/search.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <Header/>
                <Meal text={'The Meal'} title={'Text'} paragraph={'text'}
                      imageUrl={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}/>
                <SearchMeal/>
            </div>
        </BrowserRouter>
    )
}

export default App
