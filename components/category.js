import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ currentSlug }) => {
  const [category, setCategory] = useState([]);
  const API_CATEGORY = '/api/category';
  useEffect(() => {
    axios
      .get(API_CATEGORY)
      .then(function ({ data }) {
        setCategory(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
      {category.length > 0 &&
        category.map((item, index) => (
          <a
            key={index}
            href={'/category/' + item.slug}
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">{item.title}</p>
            </div>
          </a>
        ))}
    </div>
  );
};
