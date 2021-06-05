import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import styles from "../styles/New.module.css";
import {BiCaretDownCircle} from "react-icons/bi";

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
                    <center><div className={styles.text}><h2><ins>หลักสูตร (PROGRAM) </ins></h2></div></center>
                    <div className={styles.text1}>&nbsp;<BiCaretDownCircle/> <b>ปริญญาตรี (Bachelor Degree)</b></div><br/>
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-eng-digital-engineer-international-program/">สาขาวิชาวิศวกรรมดิจิทัล (หลักสูตรนานาชาติ)<br/>DIGITAL ENGINEERING INTERNATIONAL</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-digital-business-international-program/">สาขาวิชาธุรกิจดิจิทัล (หลักสูตรนานาชาติ)<br/>DIGITAL BUSINESS INTERNATIONAL</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-computing/">สาขาวิชาการคอมพิวเตอร์</a><br/>COMPUTING</div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-information-technology/">สาขาวิชาเทคโนโลยีสารสนเทศ<br/>INFORMATION TECHNOLOGY</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-software-engineering/">สาขาวิชาวิศวกรรมซอฟต์แวร์<br/>SOFTWARE ENGINEERING</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-electronic-business/">สาขาวิชาธุรกิจอิเล็กทรอนิกส์<br/>ELECTRONIC BUSINESS</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-eng-computer-engineering/">สาขาวิชาวิศวกรรมคอมพิวเตอร์<br/>COMPUTER ENGINEERING</a></div><br />
                    <div className={styles.text2}>&nbsp;<BiCaretDownCircle/> <b>ปริญญาโท (Master Degree)</b></div><br/>
                    <div className={styles.fakeimg2}><a href="https://computing.psu.ac.th/th/ms-computing/">สาขาวิชาการคอมพิวเตอร์ (หลักสูตรนานาชาติ)<br/>COMPUTING INTERNATIONAL</a></div><br/>
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