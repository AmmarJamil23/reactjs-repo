import { useState } from "react";
import styles from "./styles.module.css";

export default function SearchBar({ onSearch }){
    const [query, setQuery] = useState("");

    function handleChange(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!query.trim()) return;
        onSearch(query.trim());
    }

    return (
        <>
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            aria-label="Search"
             />

             <button type="submit" className={styles.button}>
                Search
             </button>

        </form>
        </>
    )
}