import React, { useState } from "react";

import styles from "./NameList.module.css";

const NameList = () => {
  const [inputValue, setInputValue] = useState("");
  const [names, setNames] = useState([]);

  const handleAddName = () => {
    if (inputValue.trim()) {
      setNames([...names, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleUpdateName = (index) => {
    if (inputValue.trim()) {
      const updatedNames = [...names];
      updatedNames[index] = inputValue.trim();
      setNames(updatedNames);
      setInputValue("");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Список </h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите имя"
          className={styles.input}
        />
        <button
          onClick={handleAddName}
          disabled={!inputValue.trim()}
          className={styles.addButton}
        >
          Добавить
        </button>
      </div>
      <div className={styles.listContainer}>
        {names.length === 0 ? (
          <p>Список пуст</p>
        ) : (
          <ul className={styles.nameList}>
            {names.map((name, index) => (
              <li key={index} className={styles.nameItem}>
                {name}
                <button
                  onClick={() => handleUpdateName(index)}
                  disabled={!inputValue.trim()}
                  className={styles.updateButton}
                >
                  Поменять
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NameList;
