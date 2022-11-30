import { SubTitle } from '../components/Titles';
import Head from 'next/head'; 

const About = () => {
    return (
        <>
            <Head>
                <title>My App | About</title>
                <meta name="keywords" content="about page"/>
            </Head>
        <div>
            <SubTitle>About</SubTitle>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos possimus inventore maxime repellendus nostrum quasi ipsam, fuga temporibus maiores?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo minus id sit delectus inventore?</p>
        </div>
        </>
    );
}
 
export default About;