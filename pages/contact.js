import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";
import styles from "../styles/contact.module.css";

export default function New() {
    return (
        <Container>
            <Head>
                <link rel="shortcut icon" href="https://computing.psu.ac.th/th/wp-content/uploads/2018/03/COC_logo.png" ></link>
                <title>NEW - College of Computing PSU Phuket</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div>
                <div></div>
            </div>
            <div className={styles.footer}>
                <h4>© 2021-2022 by Siriluck Raksawat CoE PSU Phuket.</h4>
            </div>
        </Container>
    )
}