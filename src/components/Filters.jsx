import styles from "./Filters.module.css"

const Filters = ({
    titles,
    title,
    name,
    handleChange,
    handleSearch,
    handleClick,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.dropdown}>
                <label htmlFor="title" className={styles.label}>
                    Select a title: 
                </label>
                <select
                    id="title"
                    onChange={handleChange}
                    value={title}
                    className={styles.select}
                >
                    <option value="">All</option>
                    {titles.map((title) => (
                        <option key={title} value={title}>
                            {title}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.search}>
                <label htmlFor="search" className={styles.label}>
                    Search a name: 
                </label>
                <input
                    id="search"
                    onChange={handleSearch}
                    value={name}
                    className={styles.input}
                />
            </div>

            <button className={styles.button} onClick={handleClick}>
                Clear
            </button>
        </div>
    );
};

export default Filters;