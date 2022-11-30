import Head from 'next/head'; // adds metadata for a page
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from "next/link";
import styled from 'styled-components';
import { SubTitle } from '../components/Titles';

const StyledLink = styled(Link)`
  display: block;
  width: 150px;
  padding: 8px 0;
  margin: 20px auto;
  background: #4979ff;
  border-radius: 4px;
  color: white;
  text-align: center;
  text-decoration: none;
`;


export default function Home() {
  return (
    <>
    <Head>
      <title>My App | Home</title>
      <meta name="keywords" content="my app content"/>
    </Head>
    <div>
      <SubTitle>Homepage</SubTitle>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos possimus inventore maxime repellendus nostrum quasi ipsam, fuga temporibus maiores?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo minus id sit delectus inv</p>

      <StyledLink href="/posts">See posts</StyledLink>
    </div>
    </>
  )
}
