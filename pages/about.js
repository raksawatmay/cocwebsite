import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/about.module.css";
import { BiCaretDownCircle } from "react-icons/bi";

export default function About() {
    return (
        <Container>
            <Head>
                <link rel="shortcut icon" href="https://sv1.picz.in.th/images/2021/06/12/sNJRED.png" ></link>
                <title>ABOUT - College of Computing PSU Phuket</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div className={styles.row}>
                <div className={styles.side}>
                    <center><div className={styles.text}><h2><ins>หลักสูตร (PROGRAM) </ins></h2></div></center>
                    <div className={styles.text1}>&nbsp;<BiCaretDownCircle /> <b>ปริญญาตรี (Bachelor Degree)</b></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-eng-digital-engineer-international-program/">สาขาวิชาวิศวกรรมดิจิทัล (หลักสูตรนานาชาติ)<br />DIGITAL ENGINEERING INTERNATIONAL</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-digital-business-international-program/">สาขาวิชาธุรกิจดิจิทัล (หลักสูตรนานาชาติ)<br />DIGITAL BUSINESS INTERNATIONAL</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-computing/">สาขาวิชาการคอมพิวเตอร์</a><br />COMPUTING</div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-information-technology/">สาขาวิชาเทคโนโลยีสารสนเทศ<br />INFORMATION TECHNOLOGY</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-software-engineering/">สาขาวิชาวิศวกรรมซอฟต์แวร์<br />SOFTWARE ENGINEERING</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-sc-electronic-business/">สาขาวิชาธุรกิจอิเล็กทรอนิกส์<br />ELECTRONIC BUSINESS</a></div><br />
                    <div className={styles.fakeimg1}><a href="https://computing.psu.ac.th/th/b-eng-computer-engineering/">สาขาวิชาวิศวกรรมคอมพิวเตอร์<br />COMPUTER ENGINEERING</a></div><br />
                    <div className={styles.text2}>&nbsp;<BiCaretDownCircle /> <b>ปริญญาโท (Master Degree)</b></div><br />
                    <div className={styles.fakeimg2}><a href="https://computing.psu.ac.th/th/ms-computing/">สาขาวิชาการคอมพิวเตอร์ (หลักสูตรนานาชาติ)<br />COMPUTING INTERNATIONAL</a></div><br />
                    <div className={styles.psu}><img src="https://sv1.picz.in.th/images/2021/06/12/sNvbrf.jpg" alt="PSU Phuket" width={415} height={300}></img></div>
                </div>
                <div className={styles.main}>
                    <h2>HISTORY (ประวัติคณะ)</h2>
                    <div className={styles.fakeimg}>สภามหาวิทยาลัยสงขลานครินทร์ เห็นชอบให้มีการจัดตั้งวิทยาลัยการคอมพิวเตอร์ (College of Computing) ณ วิทยาเขตภูเก็ต เมื่อวันที่ 20 สิงหาคม พ.ศ. 2560 โดยรวมหน่วยงานที่มีการจัดการศึกษาด้านคอมพิวเตอร์ 2 หน่วยเข้าด้วยกัน คือ <br />(1) ภาควิชาวิศวกรรมคอมพิวเตอร์ วิทยาเขตภูเก็ต คณะวิศวกรรมศาสตร์ ภายใต้โครงการการผลิตบัณฑิตวิศวกรรมคอมพิวเตอร์ ระยะเวลา 15 ปี (พ.ศ. 2545- พ.ศ. 2560) มีนักศึกษาภายใต้โครงการ 16 รุ่น โดยบัณฑิตที่จบมีคุณวุฒิ วศ.บ (วิศวกรรมคอมพิวเตอร์)  <br />
                        (2) สาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร คณะเทคโนโลยีและสิ่งแวดล้อม จัดตั้งปี พ.ศ. 2548 ผลิตบัณฑิตคุณวุฒิ วท.บ. จำนวน 3 สาขาวิชา (เทคโนโลยีสารสนเทศ วิศวกรรมซอฟแวร์ ธุรกิจอิเล็กทรอนิกส์) และระดับบัณฑิตศึกษา จำนวน 15 รุ่น เพื่อให้แนวทางการจัดการศาสตร์ด้านคอมพิวเตอร์มีความเป็นเลิศ
                        <br />ดังนั้นการตั้งวิทยาลัยการคอมพิวเตอร์มีเป้าหมายเพื่อบริหารการจัดการศึกษา วิจัย และบริการวิชาการในศาสตร์ด้านระบบดิจิทัลและคอมพิวเตอร์
                        <br />โดยตอบสนองยุทธศาสตร์ชาติ ระยะ 20 ปี มุ่งเน้นงานวิชาการและวิจัยการคำนวณและประมวลผลในเทคโนโลยีดิจิทัล การพัฒนานวัตกรรมและธุรกิจดิจิทัล การวิเคราะห์ข้อมูลขนาดใหญ่ ส่งเสริมผู้ประกอบการใหม่ และการพัฒนาเมืองภูเก็ตอัจฉริยะ พร้อมทั้งการจัดการเรียนการสอนด้านคอมพิวเตอร์ ภายในวิทยาเขตภูเก็ต</div>
                    <div className={styles.pic1}>
                        <img src="https://sv1.picz.in.th/images/2020/05/04/Us0MSn.png" alt="Color" width={600} height={300}></img>
                    </div>
                    <h2>VISION & MISSION (วิสัยทัศน์ & พันธกิจ)</h2>
                    <div className={styles.pic}>
                        <img src="https://sv1.picz.in.th/images/2020/05/03/UPHviP.png" alt="Vision&Mission" width={450} height={600}></img>
                    </div>
                </div>
            </div>
            <Footer />
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            <df-messenger
                intent="Talkwithcocy"
                chat-icon="https://sv1.picz.in.th/images/2021/07/16/2WMFEe.png"
                chat-title="CoC_Chatbot"
                agent-id="7c9f26d7-dba5-493e-9d07-1c4403d833f7"
                language-code="th"
                wait-open="true"
                //expand="true"
            ></df-messenger>
        </Container>
    )
}
