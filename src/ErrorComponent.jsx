import React from 'react';
import styles from './App.module.css';
export function ErrorComponent () {
    return (
        <>
            <div className={styles.error}>Введенное значение должно содержать минимум 3 символа</div>
        </>
    );
}

