import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../assets/Search.svg";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const DEBOUNCE_MS = 500;

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    // stato interno per digitazione fluida
    const [innerValue, setInnerValue] = useState(value);

    // per non richiamare onChange se il valore è già stato emesso
    const lastEmittedRef = useRef<string>("");

    useEffect(() => {
        if (value !== innerValue) {
            setInnerValue(value);
        }
    }, [value]);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            const trimmed = innerValue.trim();

            if (trimmed === lastEmittedRef.current) return;

            lastEmittedRef.current = trimmed;
            onChange(trimmed);
        }, DEBOUNCE_MS);

        return () => {
            window.clearTimeout(timer);
        };
    }, [innerValue, onChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
    };

    return (
        <div className="search">
            <span className="search__icon">
                <img src={SearchIcon} alt="" />
            </span>

            <input
                className="search__input"
                type="text"
                placeholder="username"
                value={innerValue}
                onChange={handleChange}
                aria-label="GitHub username"
            />
        </div>
    );
};

export default SearchBar;
