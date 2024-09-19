import Image from 'next/image';

const Services = () => {
  return (
    <section className="py-4 sm:py-24 px-8 my-8" id="our-services">
      <h2 className="text-center text-3xl font-bold">Our Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container justify-around items-stretch mb-16">
        <div className="max-w-full my-4 md:my-0 bg-gray-100 border border-gray-300 p-4 m-4 flex-1 shadow-md text-center group">
          <a href="#" className="block text-inherit no-underline">
            <div className="relative flex justify-center items-center">
              <Image
                src="/card1.jpg"
                alt="card1"
                className="rounded-sm transition-transform duration-300 group-hover:scale-105"
                width={300}
                height={200}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">Service 1</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 text-white border-none py-3 px-6 mt-4 rounded-md cursor-pointer text-base shadow-md transition-colors duration-300 hover:bg-blue-700">
              Show service 1
            </button>
          </a>
        </div>
        <div className="max-w-full my-4 md:max-w-[100%] md:my-0 bg-gray-100 border border-gray-300 p-4 m-4 flex-1 shadow-md text-center group">
          <a href="#" className="block text-inherit no-underline">
            <div className="relative flex justify-center items-center">
              <Image
                src="/card2.jpg"
                alt="card2"
                className="rounded-sm transition-transform duration-300 group-hover:scale-105"
                width={300}
                height={200}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">Service 2</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 text-white border-none py-3 px-6 mt-4 rounded-md cursor-pointer text-base shadow-md transition-colors duration-300 hover:bg-blue-700">
              Show service 2
            </button>
          </a>
        </div>
        <div className="max-w-full my-4 md:max-w-[100%] md:my-0 bg-gray-100 border border-gray-300 p-4 m-4 flex-1 shadow-md text-center group">
          <a href="#" className="block text-inherit no-underline">
            <div className="relative flex justify-center items-center">
              <Image
                src="/card3.jpg"
                alt="card3"
                className="rounded-sm transition-transform duration-300 group-hover:scale-105"
                width={300}
                height={200}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">Service 3</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 text-white border-none py-3 px-6 mt-4 rounded-md cursor-pointer text-base shadow-md transition-colors duration-300 hover:bg-blue-700">
              Show service 3
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
