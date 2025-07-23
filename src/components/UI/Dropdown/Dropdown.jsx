'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import { FaChevronDown } from 'react-icons/fa';

export default function Dropdown({ options = [], value, onChange, placeholder = 'Seleccionar...' }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        onChange(option.value);
        setIsOpen(false);
    };

    // Cerrar dropdown si el click es fuera del componente
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.button}
                type="button"
            >
                {selectedOption ? selectedOption.label : placeholder}
                <span className={styles.arrow}><FaChevronDown /></span>
            </button>

            {isOpen && (
                <ul className={styles.menu}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className={styles.item}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
