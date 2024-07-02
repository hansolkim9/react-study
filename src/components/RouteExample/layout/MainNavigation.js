import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

const MainNavigation = () => {

    const activeFn = ({ isActive }) => {
        // NavLink 컴포넌트에 className 프롭스에 함수를 전달하면
        // 첫번째 파라미터에 객체정보를 제공한다.
        // 이 객체에는 isActive 속성이 포함되어 있다.
        return isActive ? styles.active : undefined;
    }

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink to='' className={activeFn} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='products' className={activeFn}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
