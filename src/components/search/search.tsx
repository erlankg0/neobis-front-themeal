import {Button, Input, Typography} from "antd";
import {SearchProps} from "antd/es/input";
import styles from './search.module.css'
import {searchMeal} from "../../utils/network.ts";
import {useNavigate} from "react-router-dom";

const {Search} = Input;

const SearchMeal = () => {
    const navigate = useNavigate();// hook для переадресации
    const handleOnSearch: SearchProps['onSearch'] = (value) => {
        if (value.trim().length > 1) {
            searchMeal(value).then(r => {
                if (r.data) {
                    navigate(`/detail/${r.data.meals[0].idMeal}`)
                }
            }).catch(() => alert('Ошибка нету такого Блюда'))
        }


    };

    return (
        <div className={styles.content}>
            <Typography.Title>Find your Meal</Typography.Title>
            <Search className={`${styles.input} ${styles.antInput}`} placeholder={'Поиск...'} onSearch={handleOnSearch} size={'middle'}
                    enterButton={<Button
                        style={{backgroundColor: '#d49726', borderColor: '#d49726', color: 'black'}}>Поиск</Button>}/>
        </div>
    )
}

export default SearchMeal