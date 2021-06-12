import React, { useState } from "react";
import firebaseClient from "../AuthFirebase/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Head from 'next/head';
import styles from "../styles/login.module.css";
import {BiEnvelope, BiKey} from "react-icons/bi";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login({ props }) {
  firebaseClient();
  toast.configure();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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
          className={styles.btn}
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function () {
                  toast.success('Login Success!!',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:1000})
                  window.location.href = "/admin";
                })
                .catch(function (error) {
                  toast.warn('Login Fail',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:3000})
                  return error.message;
                });
            }}
          >
            Log in
          </button>
      </div>
      <div className={styles.btnnewaccount}><br/><div className={styles.text}><b><ins><i>Don't have an account?</i></ins></b><br/>
      <button
            className={styles.btn1}
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, pass)
                .then(function () {
                  toast.success('Register Success!!',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:1000})
                  window.location.href = "/admin";
                })
                .catch(function (error) {
                  toast.error('Register Please',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:3000})
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
      <link rel="shortcut icon" href="https://sv1.picz.in.th/images/2021/06/12/sNJRED.png"></link>
      <title>LOGIN - College of Computing PSU Phuket</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <Navbar/>
    <div className={styles.Container}>
    <center>
    <img src="https://cdn.iconscout.com/icon/free/png-256/administrator-2166550-1836773.png" alt="QRCode-bot" width={120} height={120}></img>
      <h1><ins>Admin Login</ins></h1>
      </center>
      <div>
    {loginForm()}
    </div>  
    </div>
  </Container>
  );
}