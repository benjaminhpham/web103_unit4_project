import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import carsAPI from "../services/carsAPI";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCarById = async () => {
      const data = await carsAPI.getCarById(id);
      setCar(data);
    };

    fetchCarById();
  }, [id]);

  return (
    <article className="car-full-details">
      <header>
        <img src="" alt="" />
        {car?.name}
      </header>
      <div className="details-content">
        <div className="car-details-price">
          <p>${car?.price}</p>
        </div>
      </div>
    </article>
  );
};

export default CarDetails;
