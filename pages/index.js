import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="https://sv1.picz.in.th/images/2021/06/12/sNJRED.png" ></link>
        <title>HOME - College of Computing PSU Phuket</title>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.boxleft}>
          <center><h1><ins><b>Welcome to CoC PSU Phuket</b></ins></h1></center>
          <iframe src='https://www.youtube.com/embed/RlNIS4ez9mg?autoplay=1&mute=1'
            width="750" 
            height="400"
            frameBorder='0'
            allowFullScreen="1"/><br /><br />
        </div>
        <div className={styles.boxright}>
          <div className={styles.boxright1}>
            <div className={styles.text}><h1><ins>Chat with Cocy</ins></h1></div>
            <div className={styles.qrcode}><img src="https://sv1.picz.in.th/images/2021/06/12/sNG8fD.png" alt="QRCode-bot" width={300} height={400}></img></div>
          </div>
        </div>
      </div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <div className={styles.df}>
        <df-messenger
        intent="Welcome"
        chat-icon="https://sv1.picz.in.th/images/2021/07/16/2WMFEe.png"
        chat-title="Cocy Bot"
        agent-id="7c9f26d7-dba5-493e-9d07-1c4403d833f7"
        language-code="th"
        wait-open="false"
        expand="false"
      ></df-messenger></div>
      <Footer />
    </Container>
  )
}
