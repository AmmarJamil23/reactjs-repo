import React from 'react'
import { useState } from 'react';
import styles from "./styles.module.css"

const Dropdown = ({ options = []}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select an option");

    function toggle() {
        setOpen(prev => !prev);
    }

    function handleSelect(option) {
        setSelected(option);
        setOpen(false);
    }
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggle}>
        {selected}
      </button>

      {open && (
        <div className={styles.menu}>
          {options.length === 0 && <p>No options found</p>}

          {options.map((opt, index) => (
            <div
              key={index}
              className={styles.option}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;