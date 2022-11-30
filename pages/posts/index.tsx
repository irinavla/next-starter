import { SubTitle } from '../../components/Titles';
import * as React from 'react';
import Head from 'next/head'; 
import Link from "next/link";
import { collection } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../api/firebase';
import styled from 'styled-components';


const StyledPost = styled(Link)`
    padding: 8px 16px;
    background: var(--background-muted);
    display: block;
    margin: 20px 10px;
    border-left: 8px solid #fff;
    text-decoration: none;
`;

const Posts = () => {
    const colRef = collection(db, 'books');
    const [books] = useCollection(colRef, {});
    let displayedBooks;

    if (books) {
        displayedBooks = books.docs.map((doc) => {
           return {
            ...doc.data(),
            id: doc.id,
           }
        });
      }

    return (
        <>
        <Head>
            <title>My App | Posts list</title>
            <meta name="keywords" content="posts"/>
        </Head>

        <div>
        <SubTitle>Post list</SubTitle>

        { displayedBooks && displayedBooks.map((book) => (
            <StyledPost key={book.id} href={`/posts/${book.id}`}>
                <div>{book.title}</div>
                <div>{book.author}</div>
            </StyledPost>
        ))
    }  
        </div>
        </>

    );
}
 
export default Posts;