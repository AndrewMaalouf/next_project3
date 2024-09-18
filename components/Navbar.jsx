// import Link from 'next/link'
// import Image from 'next/image';

// const Navbar = () => {
//     return (
//         <div className="nav-bar">
//             <nav className="container">
//                 <Link href="/"><Image src="/logo.svg" alt="logo" width={50} height={50} priority /></Link>

//                 <ul>
//                     <li><Link href="#our-services">Services</Link></li>
//                     <li><Link href="#form">Contact</Link></li>
//                 </ul>

//             </nav>
//         </div>
//     );
// }

// export default Navbar;

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="bg-gray-700">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6 flex flex-row w-full">
                <Link href="/"><Image src="/logo.svg" alt="logo" width={50} height={50} priority /></Link>

                <ul className="flex space-x-8 flex-row">
                    <li><Link href="#our-services" className="text-white hover:bg-gray-600 px-3 py-2">Services</Link></li>
                    <li><Link href="#form" className="text-white hover:bg-gray-600 px-3 py-2">Contact</Link></li>
                    <li><Link href="#" className="text-white hover:bg-gray-600 px-3 py-2">Menu</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
