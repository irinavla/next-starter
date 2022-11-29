import Link from "next/link";
import { Title } from "./Titles";
import styled from "styled-components";

const StyledNav = styled.nav`
    margin: 10px auto;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 12px;
  color: var(--text);
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-comtent: space-between;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
`;

const Navbar = () => {
    return (
        <StyledContainer>
            <Title>Posts List</Title>
            <StyledNav>
                <StyledLink href="/">home</StyledLink>
                <StyledLink href="/about">about</StyledLink>
                <StyledLink href="/posts">posts list</StyledLink>
            </StyledNav>
        </StyledContainer>
    
    );
}
 
export default Navbar;