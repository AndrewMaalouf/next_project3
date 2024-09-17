import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav className="container">
                <Link href="/"><Image src="/logo.svg" alt="logo" width={50} height={50} priority /></Link>

                <ul>
                    <li><Link href="#our-services">Services</Link></li>
                    <li><Link href="#form">Contact</Link></li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;