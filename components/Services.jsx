import Image from 'next/image';

const Services = () => {
  return (
    <section className="our-services" id="our-services">
      <h2 className="service-title">Our Services</h2>
      <div className="cards container">
        <div className="card">
          <a href="#" className="card-link">
            <div>
              <Image
                src="/card1.jpg"
                alt="card1"
                className="card-img"
                width={300}
                height={200}
              />
            </div>
            <h3>Service 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="card-button">Show service 1</button>
          </a>
        </div>
        <div className="card">
          <a href="#" className="card-link">
            <div>
              <Image
                src="/card2.jpg"
                alt="card2"
                className="card-img"
                width={300}
                height={200}
              />
            </div>
            <h3>Service 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="card-button">Show service 2</button>
          </a>
        </div>
        <div className="card">
          <a href="#" className="card-link">
            <div>
              <Image
                src="/card3.jpg"
                alt="card3"
                className="card-img"
                width={300}
                height={200}
              />
            </div>
            <h3>Service 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="card-button">Show service 3</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;