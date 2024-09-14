import React, {useState} from 'react';
import styles from './App.module.css';
import {ButtonContainerComponent} from './ButtonContainerComponent'
export function ListContainerComponent () {
    let mass = []
    // let [valueFrom, getValueFrom] = useState(ButtonContainerComponent.value)
    mass.push(ButtonContainerComponent.props)
    console.log(mass)//тут не выводится в консоль
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
