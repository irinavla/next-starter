import { SubTitle } from "../../components/Titles";
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../api/firebase';

export const getStaticPaths = async () => {
    const colRef = collection(db, 'books');
    const snapshot = await getDocs(colRef);

    const paths = snapshot.docs.map(doc => {
        return {
            params: { 
                id: doc.id.toString() 
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const docRef = doc(db, "books", id);
    const docSnap = await getDoc(docRef);
     
    return {
        props: { 
            bookDetails: JSON.parse(JSON.stringify(docSnap.data())) || null 
        }
    }
}

const PostDetails = ({ bookDetails }) => {
    const { title, author } = bookDetails;
    return (
        <>
            <SubTitle>Post details for {title}</SubTitle>
            <p>Author: {author}</p>
        </>
    );
}
 
export default PostDetails;