import { Link } from "react-router-dom";

const apartments = [
  { id: 1, name: "ЖК Солнечный", price: 5000000, area: 45, rooms: 2, district: "Центр" },
  { id: 2, name: "ЖК Лунный", price: 7000000, area: 65, rooms: 3, district: "Западный" },
  { id: 3, name: "ЖК Звёздный", price: 6000000, area: 50, rooms: 2, district: "Восточный" },
];

const Apartments: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Список квартир</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {apartments.map((apartment) => (
          <div key={apartment.id} className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold">{apartment.name}</h2>
            <p>Цена: {apartment.price} ₽</p>
            <p>Площадь: {apartment.area} м²</p>
            <p>Комнат: {apartment.rooms}</p>
            <p>Район: {apartment.district}</p>
            <Link to={`/building/${apartment.id}`} className="text-blue-600 mt-2 inline-block">
              Подробнее →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartments;
