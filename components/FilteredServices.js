import { useState } from 'react';
import Image from 'next/image';

const FilterServices = ({ onFilterChange }) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  };

  return (
    <div className="mb-8">
      <h3 className="text-center text-2xl font-semibold mb-4">Discover our Services</h3>
      <div className="flex justify-center gap-4">
        <label>
          <input
            type="checkbox"
            name="service1"
            onChange={handleCheckboxChange}
          />
          Show Service 1
        </label>
        <label>
          <input
            type="checkbox"
            name="service2"
            onChange={handleCheckboxChange}
          />
          Show Service 2
        </label>
        <label>
          <input
            type="checkbox"
            name="service3"
            onChange={handleCheckboxChange}
          />
          Show Service 3
        </label>
      </div>
    </div>
  );
};

const FilteredServices = ({ services }) => {
  const [visibleServices, setVisibleServices] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleFilterChange = (serviceKey, isChecked) => {
    if (isChecked) {
      setVisibleServices((prev) => [...prev, serviceKey]);
    } else {
      setVisibleServices((prev) => prev.filter((key) => key !== serviceKey));
    }
    setShowResults(false); // Reset results visibility when checkbox changes
  };

  const handleShowResultsClick = () => {
    setShowResults(true);
  };

  const serviceDetails = {
    service1: {
      description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
      imageSrc: "/card1.jpg", 
    },
    service2: {
      description: "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues.",
      imageSrc: "/card2.jpg", 
    },
    service3: {
      description: "Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.",
      imageSrc: "/card3.jpg", 
    },
  };

  return (
    <section className="py-4 sm:py-24 px-8 my-8 container">
      {/* FilterServices component */}
      <FilterServices onFilterChange={handleFilterChange} />

      {/* Show Results Button */}
      <div className="flex justify-center mb-8">
        <button
          className={`bg-blue-500 text-white border-none py-2 px-6 rounded-md cursor-pointer shadow-md transition-colors duration-300 hover:bg-blue-700 ${visibleServices.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={visibleServices.length === 0} // Disable if no services are selected
          onClick={handleShowResultsClick}
        >
          Show Results
        </button>
      </div>

      {/* Display Services when Show Results is clicked */}
      {showResults && visibleServices.length > 0 && (
        <div className="mt-8">
          {visibleServices.map((serviceKey, index) => (
            <div key={index} className="mb-8">
              
              {/* Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={serviceDetails[serviceKey].imageSrc}
                  alt={`Image for ${serviceKey}`}
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center mb-4">
                <button className="bg-blue-500 text-white border-none py-2 px-6 rounded-md cursor-pointer shadow-md transition-colors duration-300 hover:bg-blue-700">
                  Learn More
                </button>
              </div>

              {/* Description */}
              <p className="text-lg text-center">{serviceDetails[serviceKey].description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FilteredServices;
