import styles from './FilterBadge.module.css'
import React from "react";

interface FilterBadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    onClick?: () => void
    isActive?: boolean
    variant?: 'classic' | 'informational' | 'active'
}

export default function FilterBadge({children, onClick, isActive, variant = 'classic', ...props}: FilterBadgeProps) {

    return (
        <button onClick={onClick} {...props}
            className={`${styles.filterBadge} ${styles[`filterBadge_${variant}`]} ${isActive ? styles.filterBadge_active : ''}`}>
            {children}
        </button>
    )
}