import React from "react";
import "../App.css";

const CreateCar = () => {
  return (
    <div className="create-car">
      <label htmlFor="">
        <input type="checkbox" id="isconvertible" />
        Convertible
      </label>
      <div className="create-car-options">
        <div id="customization-options" className="car-options">
          <div className="car-options">
            <button>Exterior</button>
          </div>
          <div className="car-options">
            <button>Roof</button>
          </div>
          <div className="car-options">
            <button>Wheels</button>
          </div>
          <div className="car-options">
            <button>Interior</button>
          </div>
        </div>
      </div>
      <div className="create-car-price">$65000</div>
      <div className="create-car-name">
        <input type="text" id="name" name="name" placeholder="My New Car" />
        <input type="submit" class="create-car-button" value="Create" />
      </div>
    </div>
  );
};

export default CreateCar;
