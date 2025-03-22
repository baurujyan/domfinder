import React from "react";
import { useParams } from "react-router-dom";
import { apartments } from "../data/apartments";

const BuildingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apartment = apartments.find((apt) => apt.id === Number(id));

  if (!apartment) {
    return <h1>Квартира не найдена</h1>;
  }

  return (
    <div>
      <h1>{apartment.name}</h1>
      <p>Цена: {apartment.price} ₽</p>
      <p>Площадь: {apartment.area} м²</p>
      <p>Комнат: {apartment.rooms}</p>
      <p>Район: {apartment.district}</p>
    </div>
  );
};

export default BuildingDetails;
