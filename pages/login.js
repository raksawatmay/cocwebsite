import React, { useState } from "react";
import firebaseClient from "../AuthFirebase/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Head from 'next/head';
import {useAuth} from '../AuthFirebase/auth';
import styles from "../styles/login.module.css";
import {BiEnvelope, BiKey} from "react-icons/bi";

export default function Login({ props }) {
  firebaseClient();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {user} = useAuth();

  const loginForm = () => (
    <div className={styles.form}>
      <center>
      <div className={styles.icon}><b><BiEnvelope/> Email address:</b>
      <div>
        <input 
        className={styles.inputtext}
         name="emailAddress"
         placeholder="username@email.com"
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
      </div></div>
      <div className={styles.icon}><b><BiKey/> Password:</b>
      <div>
        <input
         className={styles.inputtext}
         name="password"
         placeholder="password"
         type="password"
         value={pass}
         onChange={(e) => setPass(e.target.value)}
        />
      </div>
      </div>
      <br/>
      <div>   
          <button
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function () {
                  window.location.href = "/admin";
                })
                .catch(function (error) {
                  return error.message;
                });
            }}
          >
            Log in
          </button>
      </div>
      <div className={styles.btnnewaccount}><br/><div><b><ins><i>Don't have an account?</i></ins></b><br/>
      <button
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, pass)
                .then(function () {
                  window.location.href = "/admin";
                })
                .catch(function (error) {
                  return error.message;
                });
            }}
          >
            Create account
          </button>
          </div></div>
          </center>
    </div>
  );

  return (
    <Container>
    <Head>
      <link rel="shortcut icon" href="https://computing.psu.ac.th/th/wp-content/uploads/2018/09/FavIcon.jpg"></link>
      <title>LOGIN - College of Computing PSU Phuket</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <Navbar/>
    <div className={styles.Container}>
    <div className={styles.user}><p>{`User ID: ${user ? user.uid : "No user singed in"}`}</p></div>
    <div ><center>
    <img src="https://cdn.iconscout.com/icon/free/png-256/administrator-2166550-1836773.png" alt="QRCode-bot" width={120} height={120}></img>
      <h1><ins>Admin Login</ins></h1>
      </center>
      <div>
    {loginForm()}
    </div>  
    </div>
    </div>
  </Container>
  );
}