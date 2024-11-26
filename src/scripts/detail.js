// import axios from 'axios';

// const fetchRestaurantDetail = async (restaurantId) => {
//   try {
//     const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`);
//     const restaurant = response.data.restaurant;
//     console.log(restaurant); // Object containing restaurant details
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchRestaurantDetail('rqdv5juczeskfw1e867'); // Example restaurant ID

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantDetail = ({ restaurantId }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`);
        setRestaurant(response.data.restaurant);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [restaurantId]);

  if (isLoading) {
    return <p>Loading restaurant details...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!restaurant) {
    return <p>No restaurant details found.</p>;
  }

  // Render restaurant details here using restaurant object
  return (
    <div>
      <h2>{restaurant.name}</h2>
      {/* Display other restaurant details */}
    </div>
  );
};

export default RestaurantDetail;

import React from 'react';

function Detail() {
  // ... your component code using JSX
}