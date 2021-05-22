import Head from 'next/head';
import Container from "../components/Container";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="https://computing.psu.ac.th/th/wp-content/uploads/2018/09/FavIcon.jpg"></link>
        <title>HOME - College of Computing PSU Phuket</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Navbar/>
      <div>
        <h1>Welcome to CoC PSU Phuket</h1>
      </div>
    </Container>
  )
}
