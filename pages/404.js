import { SubTitle } from "../components/Titles";
import styled from "styled-components";
import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/router";


const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NotFound = () => {
    // access to the Router object
    const router = useRouter();

    // runs when the component first mounts
    useEffect(() => {
        setTimeout(() => {
            router.push('/'); // redirect to homepage
        }, 3000);
        console.log('use effect run...');
    }, [router]);


    return (
        <div className="not-found">
            <SubTitle>Ooops...</SubTitle>
            <p>Page not found</p>
            <p>Go back to the <StyledLink href="/">Homepage</StyledLink></p>
        </div>
    );
}
 
export default NotFound;