import styled from "styled-components";

const StyledFooter = styled.div`
    display: block;
    text-align: center;
    padding: 30px 0;
    margin-top: 60px;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright 2022</p>
        </StyledFooter>
    );
}
 
export default Footer;