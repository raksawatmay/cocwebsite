import styles from "../styles/narbar.module.css";
import {FcServices} from "react-icons/fc";

const Navbar = () => (
    <div className={styles.topbar}>
    <ol className={styles.navbar}>
        <li className={styles.left}><a href="/"><img src="https://sv1.picz.in.th/images/2021/06/03/PvpvGf.png" alt="logo"></img></a></li>
        <li className={styles.title}><h2>CoC PSU Phuket</h2></li>
        <div className={styles.col} >
        <li className={styles.right}><a href="/login">&nbsp;&nbsp;<FcServices/>&nbsp;<b>Admin</b></a></li>
        <li className={styles.text3}><a href="/contact"><b>Contact</b></a></li>
        <li className={styles.text2}><a href="/about"><b>About</b></a></li>
        <li className={styles.text}><a href="/"><b>Home</b></a></li>
        </div>
    </ol>
    </div>
)

export default Navbar
