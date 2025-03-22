import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apartments, Apartment } from "../data/apartments";

const Apartments: React.FC = () => {
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>(apartments);
  const [filters, setFilters] = useState({
    district: "",
    minPrice: "",
    maxPrice: "",
    rooms: "",
    status: ""
  });
  
  const districts = [...new Set(apartments.map(apt => apt.district))];
  const statuses = [...new Set(apartments.map(apt => apt.status))];
  
  useEffect(() => {
    let result = [...apartments];
    
    if (filters.district) {
      result = result.filter(apt => apt.district === filters.district);
    }
    
    if (filters.minPrice) {
      result = result.filter(apt => apt.price >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      result = result.filter(apt => apt.price <= parseInt(filters.maxPrice));
    }
    
    if (filters.rooms) {
      result = result.filter(apt => apt.rooms === parseInt(filters.rooms));
    }
    
    if (filters.status) {
      result = result.filter(apt => apt.status === filters.status);
    }
    
    setFilteredApartments(result);
  }, [filters]);
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      district: "",
      minPrice: "",
      maxPrice: "",
      rooms: "",
      status: ""
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Найдите квартиру своей мечты</h1>
      
      {/* Фильтры */}
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Фильтры</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Район</label>
            <select 
              name="district" 
              value={filters.district} 
              onChange={handleFilterChange}
              className="w-full border rounded-md p-2"
            >
              <option value="">Все районы</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Цена от</label>
            <input 
              type="number" 
              name="minPrice" 
              value={filters.minPrice} 
              onChange={handleFilterChange}
              placeholder="От"
              className="w-full border rounded-md p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Цена до</label>
            <input 
              type="number" 
              name="maxPrice" 
              value={filters.maxPrice} 
              onChange={handleFilterChange}
              placeholder="До"
              className="w-full border rounded-md p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Комнат</label>
            <select 
              name="rooms" 
              value={filters.rooms} 
              onChange={handleFilterChange}
              className="w-full border rounded-md p-2"
            >
              <option value="">Любое количество</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Статус</label>
            <select 
              name="status" 
              value={filters.status} 
              onChange={handleFilterChange}
              className="w-full border rounded-md p-2"
            >
              <option value="">Любой</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button 
            onClick={clearFilters}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Сбросить
          </button>
        </div>
      </div>
      
      {/* Результаты */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApartments.length > 0 ? (
          filteredApartments.map((apartment) => (
            <div key={apartment.id} className="bg-white p-4 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gray-200 mb-4 overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  Фото ЖК
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">{apartment.name}</h2>
                <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {apartment.status}
                </span>
              </div>
              <p className="text-gray-600">{apartment.district}, {apartment.address}</p>
              <p className="text-2xl font-bold text-blue-600 my-2">{formatPrice(apartment.price)} ₽</p>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <span>{apartment.area} м²</span>
                <span>{apartment.rooms} {apartment.rooms === 1 ? 'комната' : apartment.rooms < 5 ? 'комнаты' : 'комнат'}</span>
                <span>Сдача: {new Date(apartment.completionDate).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long'})}</span>
              </div>
              <Link 
                to={`/building/${apartment.id}`} 
                className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Подробнее
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p className="text-xl text-gray-500">По вашему запросу ничего не найдено</p>
            <button 
              onClick={clearFilters}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apartments;