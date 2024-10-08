import React, { useState } from 'react';

const Filter = () => {
  const data = [
    { id: 1, title: 'Image 1', category: 'Service 1', imgSrc: '/img1.jpg' },
    { id: 2, title: 'Image 2', category: 'Service 2', imgSrc: '/img2.jpg' },
    { id: 3, title: 'Image 3', category: 'Service 1', imgSrc: '/img3.jpg' },
    { id: 4, title: 'Image 4', category: 'Service 3', imgSrc: '/img4.jpg' },
    { id: 5, title: 'Image 5', category: 'Service 2', imgSrc: '/abstract.jpg' },
    { id: 6, title: 'Image 6', category: 'Service 3', imgSrc: '/card1.jpg' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">What We Provide in Each Service:</label>
        <select id="filter" onChange={handleFilterChange} className="p-2 border rounded">
          <option value="All">All</option>
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
          <option value="Service 3">Service 3</option>
        </select>
      </div>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredData.map(item => (
          <div key={item.id} className="border p-4 flex flex-col items-center">
            <div className="w-full h-48">
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
