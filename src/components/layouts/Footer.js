import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from './Footer.module.css';

function Footer() { 

    return (
        <footer className={styles.footer}>
            <ul>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p><span>Costs</span> &copy; 2022</p>
        </footer>
    )

}

export default Footer