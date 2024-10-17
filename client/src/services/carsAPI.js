import { request } from "../utilities/api";

const URL = "http://localhost:3000/api/cars";

const getAllCars = async () => {
  try {
    return await request(URL);
  } catch (err) {
    console.error(`Failed to fetch data: ${err.message}`);
  }
};

const getCarById = async (id) => {
  try {
    return await request(`${URL}/${id}`);
  } catch (err) {
    console.error(`Failed to fetch data: ${err.message}`);
  }
};

const createCar = async (car) => {
  try {
    return await request(URL, "POST", car);
  } catch (err) {
    console.error(`Failed to create data: ${err.message}`);
  }
};

const updateCar = async (id, car) => {
  try {
    return await request(`${URL}/${id}`, "PATCH", car);
  } catch (err) {
    console.error(`Failed to update data: ${err.message}`);
  }
};

const deleteCar = async (id) => {
  try {
    return await request(`${URL}/${id}`, "DELETE");
  } catch (err) {
    console.error(`Failed to delete data: ${err.message}`);
  }
};

export default { getAllCars, getCarById, createCar, updateCar, deleteCar };
