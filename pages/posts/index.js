import { SubTitle } from '../../components/Titles';
import Head from 'next/head'; 
import { collection } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../api/firebase';
import styled from 'styled-components';


const StyledPost = styled.div`
    padding: 8px 16px;
    background: var(--background-muted);
    display: block;
    margin: 20px 10px;
    border-left: 8px solid #fff;
`;

const Posts = () => {
    const colRef = collection(db, 'books');
    const [books] = useCollection(colRef, {});
    let displayedBooks;

    if (books) {
        displayedBooks = books.docs.map((doc) => doc.data());
      }

    return (
        <>
        <Head>
            <title>My App | Posts list</title>
            <meta name="keywords" content="posts"/>
        </Head>

        <div>
        <SubTitle>Post list</SubTitle>

        { displayedBooks && displayedBooks.map((book, index) => (
            <StyledPost key={index}>
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