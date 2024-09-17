import Image from 'next/image';

const Footer = () => {
    return (
        <div className="footer-background">
        <footer className="footer container">
            <span>&copy; 2024 My Website</span>

            <div className="footer-social">
                <p>Follow Us: </p>
                <a href="#"><Image width={48} height={48} src="/facebook.svg" alt="facebook" className="footer-icons" /></a>
                <a href="#"><Image width={48} height={48} src="/insta.svg" alt="instagram" className="footer-icons" /></a>
            </div>
        </footer>
    </div>
    );
}
 
export default Footer;