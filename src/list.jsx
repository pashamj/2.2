import React, {useState} from 'react';
import styles from './App.module.css';
import ButtonContainerComponent from './ButtonContainerComponent'
export function List () {
    let mass = []
    let [valueFrom, getValueFrom] = useState(ButtonContainerComponent.value)
    mass.push(valueFrom)
    console.log(mass)
    return (

        <>
            <h2 className={styles.listHeading}>Список:</h2>
            <p className={styles.listContainer}>Нет добавленных элементов</p>
            <ul className="list">
                <li className="list-item">Первый элемент</li>
            </ul>
        </>
    );
};

