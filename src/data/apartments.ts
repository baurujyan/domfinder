export interface Apartment {
    id: number;
    name: string;
    price: number;
    area: number;
    rooms: number;
    district: string;
  }
  
  export const apartments: Apartment[] = [
    { id: 1, name: "ЖК Солнечный", price: 5000000, area: 45, rooms: 2, district: "Центр" },
    { id: 2, name: "ЖК Лунный", price: 7000000, area: 65, rooms: 3, district: "Западный" },
    { id: 3, name: "ЖК Звездный", price: 6000000, area: 50, rooms: 2, district: "Восточный" },
    { id: 4, name: "ЖК Городской", price: 8000000, area: 80, rooms: 4, district: "Северный" },
  ];
  