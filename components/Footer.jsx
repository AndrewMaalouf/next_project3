import Image from 'next/image';

const Footer = () => {
    return (
        <div className="bg-gray-700 py-4 w-full">
            <footer className="container mx-auto flex justify-between items-center text-white px-4">
                <span>&copy; 2024 My Website</span>

                <div className="flex items-center">
                    <p className="mr-2">Follow Us: </p>
                    <a href="#">
                        <Image
                            width={48}
                            height={48}
                            src="/facebook.svg"
                            alt="facebook"
                            className="ml-2 hover:opacity-80 transition-opacity"
                        />
                    </a>
                    <a href="#">
                        <Image
                            width={48}
                            height={48}
                            src="/insta.svg"
                            alt="instagram"
                            className="ml-2 hover:opacity-80 transition-opacity"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
