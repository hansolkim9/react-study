import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {

    // bump 애니메이션을 제어하는 상태변수
    const [isBump, setIsBump] = useState(false);

    const { button, icon, badge, bump } = styles;

    // 장바구니 배열
    const { cartItems } = useContext(CartContext);

    const totalAmount = cartItems.reduce((acc, item) => acc + (+item.amount), 0);

    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        console.log('useEffect 실행!');
        setIsBump(true);

        const timer = setTimeout(() => {
            setIsBump(false);
        }, 300);

        return () => clearTimeout(timer);

    }, [cartItems]); // 종속성 배열 추가


    return (
        <button className={`${button} ${isBump ? bump : ''}`} onClick={onShow}>
            <span className={icon}>
                <CartIcon />
            </span>
            <span>My Cart</span>
            <span className={badge}>{totalAmount}</span>
        </button>
    );
};

export default HeaderCartButton;
