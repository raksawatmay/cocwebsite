import styles from "../styles/narbar.module.css";

const Navbar = () => (
    <div className={styles.topbar}>
    <ol className={styles.navbar}>
        <li className={styles.text}><a href="/"><b>Home</b></a></li>
        <li className={styles.text4}><a href="/login"><b>Admin</b></a></li>
    </ol>
    </div>
)

export default Navbar