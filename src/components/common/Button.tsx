import styles from './Button.module.css'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'secondaryWithDecoration';
}

export default function Button({children, variant = 'primary', ...props}: ButtonProps) {
    return (
        <button className={`${styles.btn} ${styles[`btn_${variant}`]}`} {...props}>
            {children}
        </button>
    )
}