import React from "react";
import nookies from "nookies";
import {verifyIdToken} from "../AuthFirebase/firebaseAdmin";
import firebaseClient from "../AuthFirebase/firebaseClient";
import firebase from "firebase/app";
import Container from "../components/Container";
import Head from 'next/head';
import {FaUserCircle} from "react-icons/fa";
import styles from "../styles/admin.module.css";

export default function NewAccount({session}) {
  firebaseClient();
  if(session){
    return (
        <Container>
        <Head>
          <link rel="shortcut icon" href="https://computing.psu.ac.th/th/wp-content/uploads/2018/09/FavIcon.jpg"></link>
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
          <div className={styles.icon}><FaUserCircle/></div>
          <div className={styles.sec}><p>Your E-mail is <b>{session}</b></p></div>
        </div>
        <div className={styles.main}>
          <div className={styles.title}><h1>Welcome Admin Mode </h1></div>
        </div>
        </div>
        <div className={styles.footer}>
                <h4>© 2021-2022 by Siriluck Raksawat CoE PSU Phuket.</h4>
            </div>
      </Container>
      );

  }else{
      return(
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