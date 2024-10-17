import React, { useEffect, useState } from "react";
import "../App.css";
import carsAPI from "../services/carsAPI";
import { Link } from "react-router-dom";

const ViewCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await carsAPI.getAllCars();
      setCars(data);
    };

    fetchCars();
  });
  return (
    <main>
      {cars.map((car) => (
        <article key={car.id}>
          <header>
            <h3>
              {/* <img src={car.image} alt="car-image" /> */}
              {car.name}
            </h3>
          </header>
          <div className="car-card">
            <div className="card-summary">
              <p>
                <strong>Exteriors</strong> {car.exterior}
              </p>
              <p>
                <strong>Roof:</strong> {car.roof}
              </p>
            </div>
            <div className="card-summary">
              <p>
                <strong>Wheels:</strong> {car.wheels}
              </p>
              <p>
                <strong>Interior:</strong> {car.interior}
              </p>
            </div>
            <div className="car-price">
              <p>${car.price}</p>
              <Link to={`/customcars/${car.id}`}>Details</Link>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};

export default ViewCars;
