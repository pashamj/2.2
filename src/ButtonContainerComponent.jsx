import React, {useState} from 'react';
import styles from './App.module.css';
export function ButtonContainerComponent () {
    const [value, getValue] = useState('')
    const onClick = (props) => {
       getValue(prompt('123'))

    }


    return (
        <>
            <div className={styles.buttonsContainer}>
                <button onClick={onClick}>Ввести новое</button>
                <button className="button" disabled>Добавить в список</button>
            </div>
        </>
    );
}

