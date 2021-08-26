import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/contact.module.css";
import { BiEnvelope } from "react-icons/bi";
import { FcPhone, FcGlobe, FcPrint } from "react-icons/fc";

export default function Contact() {
    return (
        <Container>
            <Head>
                <link rel="shortcut icon" href="https://sv1.picz.in.th/images/2021/06/12/sNJRED.png" ></link>
                <title>CONTACT- College of Computing PSU Phuket</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.texthead}><h1><ins>CONTACT</ins></h1></div>
                <div className={styles.text}>
                    <h2>&nbsp;&nbsp;&nbsp;วิทยาลัยการคอมพิวเตอร์ (COLLEGE OF COMPUTING)</h2>
                    <p>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต 80 หมู่ 1 ถ.วิชิตสงคราม ต.กะทู้ อ.กะทู้ จ.ภูเก็ต 83120</p>
                    <p>Prince of Songkla University Phuket Campus 80 M.1 Vichitsongkram Road Kathu, Phuket 83120</p>
                </div>
                <div className={styles.context}>
                    <p><FcPhone /> โทร 076-276-000 ต่อ 6471 , 076-276-000 ต่อ 6562</p>
                    <p><BiEnvelope /> coc@phuket.psu.ac.th</p>
                    <p><FcGlobe /> www.computing.psu.ac.th</p>
                    <p><FcPrint /> Fax 076-276-046</p>
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
                //wait-open="true"
                //expand="true"
            ></df-messenger>
        </Container>
    )
}
