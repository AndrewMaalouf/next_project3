import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter(); 

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const getLinkClasses = (path) =>
        router.pathname === path
            ? 'text-white bg-gray-600 px-3 py-2'
            : 'text-white hover:bg-gray-600 px-3 py-2';

    return (
        <div className="bg-gray-700">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6 w-full">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
                </Link>


                <ul className="hidden md:flex space-x-8">
                    <li>
                        <Link href="/services" className={getLinkClasses('/services')}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={getLinkClasses('/contact')}>
                            Contact
                        </Link>
                    </li>
                </ul>


                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <Image src="/menu.svg" alt="menu icon" width={40} height={40} />
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col justify-center items-center text-white z-50">
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-6 text-3xl font-bold"
                        onClick={toggleMobileMenu}
                    >
                        &times;
                    </button>

                    <ul className="space-y-8 text-center text-xl">
                        <li>
                            <Link href="/services" onClick={toggleMobileMenu} className={getLinkClasses('/services')}>
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={toggleMobileMenu} className={getLinkClasses('/contact')}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
