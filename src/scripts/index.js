import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "../public/main.js";
import "../styles/tambah.css";
import "../scripts/detail.js"

import data from "../public/data/DATA.json";

// Fungsi untuk merender restoran ke DOM
// function renderRestaurants() {
//   const restaurantList = document.getElementById("restaurantList");
//   if (!restaurantList) {
//     console.error('Element with ID "restaurant-list" not found.');
//     return;
//   }

  // Akses ke array DAT.json
  // const restaurants = data.restaurants;

  // restaurants.forEach((restaurant) => {
  //   const div = document.createElement("div");
  //   div.classList.add("restaurant-item");
  //   div.innerHTML = `
  //           <h2>${restaurant.name}</h2>
  //           <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
  //           <p>${restaurant.description}</p>
  //           <p>City: ${restaurant.city}</p>
  //           <p>Rating: ${restaurant.rating}</p>
  //       `;
  //   restaurantList.appendChild(div);
  // });
// }

// document.addEventListener("DOMContentLoaded", renderRestaurants);
import axios from 'axios';

const fetchRestaurants = async () => {
  try {
    const response = await axios.get('https://restaurant-api.dicoding.dev/list');
    const restaurants = response.data.restaurants;
    console.log(restaurants); // Array of restaurant objects
  } catch (error) {
    console.error(error);
  }
};

fetchRestaurants();

import React, { useState, useEffect } from 'react';
// import axios from 'axios';

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