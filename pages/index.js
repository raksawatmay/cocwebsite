import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Index.module.css";
import YouTube from 'react-youtube-embed';


export default function Home() {
  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="https://computing.psu.ac.th/th/wp-content/uploads/2018/03/COC_logo.png" ></link>
        <title>HOME - College of Computing PSU Phuket</title>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.boxleft}>
          <center><h1><ins><b>Welcome to CoC PSU Phuket</b></ins></h1></center>
          <YouTube id='pHcJi6AuxEE'></YouTube> <br/><br/></div>
        <div className={styles.boxright}>
          <div className={styles.boxright1}>
            <div className={styles.text}><h1><ins>Chat with Cocy</ins></h1></div>
            <div className={styles.qrcode}><img src="https://sv1.picz.in.th/images/2021/06/03/PGSz79.png" alt="QRCode-bot" width={420} height={500}></img></div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )

}