import React from "react";
import SearchIcon from "../assets/Search.svg";


interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    onSubmit,
    loading,
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!loading) onSubmit();
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <span className="search__icon">
                <img src={SearchIcon} alt="" />
            </span>
            <input
                className="search__input"
                type="text"
                placeholder="username"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-label="GitHub username"
            />
        </form>
    );
};

export default SearchBar;
