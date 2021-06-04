import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import styles from "../styles/New.module.css";

export default function About() {
    return (
        <Container>
            <Head>
                <link rel="shortcut icon" href="https://computing.psu.ac.th/th/wp-content/uploads/2018/03/COC_logo.png" ></link>
                <title>ABOUT - College of Computing PSU Phuket</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div className={styles.row}>
                <div className={styles.side}>
                    <center><h2><ins>หลักสูตร (PROGRAM) </ins></h2></center>
                    <h3>ปริญญาตรี (Bachelor Degree)</h3>
                    <div className={styles.fakeimg1}>สาขาวิชาวิศวกรรมดิจิทัล (หลักสูตรนานาชาติ)</div><br />
                    <div className={styles.fakeimg1}>สาขาวิชาธุรกิจดิจิทัล (หลักสูตรนานาชาติ)</div><br />
                    <div className={styles.fakeimg1}>สาขาวิชาการคอมพิวเตอร์</div><br />
                    <div className={styles.fakeimg1}>สาขาวิชาเทคโนโลยีสารสนเทศ</div><br />
                    <div className={styles.fakeimg1}>สาขาวิชาวิศวกรรมซอฟต์แวร์</div><br />
                    <div className={styles.fakeimg1}>สาขาวิชาธุรกิจอิเล็กทรอนิกส์</div><br />
                    <div className={styles.fakeimg1}>สาขาวิชาวิศวกรรมคอมพิวเตอร์</div><br />
                    <h3>ปริญญาโท (Master Degree)</h3>
                    <div className={styles.fakeimg2}>สาขาวิชาการคอมพิวเตอร์ (หลักสูตรนานาชาติ)</div><br/>
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