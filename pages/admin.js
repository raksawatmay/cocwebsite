import React from "react";
import nookies from "nookies";
import {verifyIdToken} from "../AuthFirebase/firebaseAdmin";
import firebaseClient from "../AuthFirebase/firebaseClient";
import firebase from "firebase/app";
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Head from 'next/head';

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
        <Navbar/>
        <div>
          <h1>Welcome Admin Mode </h1>          
        <div>
        {session}
        <p>You do anything now you are Authenticated</p>
        <div>
            <button
            onClick={async () => {
                await firebase.auth().signOut();
                window.location.href = "/login";
              }}>Sing Out</button>
        </div>
        </div>  
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
        props: { session: `Your email is ${email} and your UID is ${uid}.` },
      };
    } catch (err) {
      context.res.writeHead(302, { Location: "/login" });
      context.res.end();
      return { props: {} };
    }
  }