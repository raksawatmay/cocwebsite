import React, { useState } from "react";
import firebaseClient from "../pages/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import Container from "../components/Container";
import Navbar from "../components/navbar";
import Head from 'next/head';
import {useAuth} from '../pages/auth';

export default function Login({ props }) {
  firebaseClient();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {user} = useAuth();

  const loginForm = () => (
    <div>
      <div><b>Email address:</b></div>
      <div>
        <input
         name="emailAddress"
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div><b>Password:</b></div>
      <div>
        <input
         name="password"
         type="password"
         value={pass}
         onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div>   <button
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
    <div>
      <h1>Admin Login</h1>
      <p>{`User ID: ${user ? user.uid : "No user singed in"}`}</p>
      <div>
    {loginForm()}
    </div>  
    </div>
  </Container>
  );
}