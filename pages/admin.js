import React from "react";
import nookies from "nookies";
import { verifyIdToken } from "../AuthFirebase/firebaseAdmin";
import firebaseClient from "../AuthFirebase/firebaseClient";
import firebase from "firebase/app";
import Container from "../components/Container";
import Footer from "../components/footer";
import Head from 'next/head';
import { FaUserCircle } from "react-icons/fa";
import { BsFolderPlus, BsFolderFill, BsCloudDownload } from "react-icons/bs";
import styles from "../styles/admin.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewAccount({ session }) {
  firebaseClient();
  toast.configure();

  const btncreate = async () => {
    let answer = window.confirm("Do you want to Create Intent?")
    if (answer === true) {
      window.location.href = "/create";
    }
    else if (answer === false) {
      toast.warn(`Cancel Create`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }
  }

  const btnDownload = async () => {
    let answer = window.confirm("Do you want to Download?")
    if (answer === true) {
      window.location.href = "/download";
    }
    else if (answer === false) {
      toast.warn(`Cancel Download`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }
  }

  const btnIntent = async () => {
    let answer = window.confirm("Do you want to see Intent?")
    if (answer === true) {
      window.location.href = "/intent";
    }
    else if (answer === false) {
      toast.warn(`Cancel Intent`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }
  }

  if (session) {
    return (
      <Container>
        <Head>
          <link rel="shortcut icon" href="https://sv1.picz.in.th/images/2021/06/12/sNJRED.png"></link>
          <title>Admin - College of Computing PSU Phuket</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <div className={styles.row}>
          <div className={styles.tabbar}>
            <div className={styles.btnlogout}>
              <button
                className={styles.btn}
                onClick={async () => {
                  await firebase.auth().signOut();
                  window.location.href = "/login";
                }}>Sing Out</button>
            </div>
            <div className={styles.icon}><FaUserCircle /></div>
            <center><h1>Login By</h1></center>
            <div className={styles.sec}><p>Your E-mail is <b>{session}</b></p></div>
            <center>
              <div><button className={styles.btncreate} onClick={btncreate}><BsFolderPlus />  Create Intent</button></div>
              <div><button className={styles.btnintent} onClick={btnIntent}><BsFolderFill />  See All Intent</button></div>
              <div><button className={styles.btndownload} onClick={btnDownload}><BsCloudDownload />  Download</button></div>
            </center>

          </div>
          <div className={styles.main}>
            <div className={styles.title}><h1>Welcome Admin Mode </h1></div>
          </div>
        </div>
        <Footer />
      </Container>
    );

  } else {
    return (
      <div><h1>Loading</h1></div>
    );
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: { session: `${email} ${uid}` },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }
}