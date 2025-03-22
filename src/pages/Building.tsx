import React from "react";
import { useParams } from "react-router-dom";
import { apartments } from "../data/apartments";

const Building: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID из URL
  const apartment = apartments.find((a) => a.id.toString() === id);

  if (!apartment) {
    return <h2>Квартира не найдена</h2>;
  }

  return (
    <div>
      <h1>{apartment.name}</h1>
      <p>Цена: {apartment.price} ₽</p>
      <p>Площадь: {apartment.area} м²</p>
      <p>Комнат: {apartment.rooms}</p>
      <p>Район: {apartment.district}</p>
      <p>Описание: {apartment.description}</p>
    </div>
  );
};

export default Building;
