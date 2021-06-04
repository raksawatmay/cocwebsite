import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import styles from "../styles/New.module.css";

export default function New() {
    return (
        <Container>
            <Head>
                <link rel="shortcut icon" href="https://computing.psu.ac.th/th/wp-content/uploads/2018/03/COC_logo.png" ></link>
                <title>New - College of Computing PSU Phuket</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div className={styles.row}>
                <div className={styles.side}>
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div className={styles.fakeimg}>Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>More Text</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <div className={styles.fakeimg1}>Image</div><br />
                    <div className={styles.fakeimg1}>Image</div><br />
                    <div className={styles.fakeimg1}>Image</div>
                </div>
                <div className={styles.main}>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className={styles.fakeimg}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className={styles.fakeimg}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div className={styles.footer}>
                <h4>© 2021-2022 by Siriluck Raksawat CoE PSU Phuket.</h4>
            </div>
        </Container>
    )
}