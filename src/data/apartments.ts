export interface Apartment {
  id: number;
  name: string;
  price: number;
  area: number;
  rooms: number;
  district: string;
  address: string;
  description: string;
  features: string[];
  status: 'Строится' | 'Сдан' | 'Скоро сдача';
  completionDate: string;
  developer: string;
  images: string[];
  floors: number;
  units: number;
  ceilingHeight: number;
  parkingAvailable: boolean;
  nearbyInfrastructure: string[];
}

export const apartments: Apartment[] = [
  { 
    id: 1, 
    name: "ЖК Солнечный", 
    price: 5000000, 
    area: 45, 
    rooms: 2, 
    district: "Центр",
    address: "ул. Центральная, 10",
    description: "Жилой комплекс «Солнечный» – это современный проект в самом центре города. Комплекс включает в себя 5 монолитных домов с панорамными окнами, подземный паркинг и благоустроенную территорию.",
    features: ["Панорамные окна", "Подземный паркинг", "Детская площадка", "Видеонаблюдение"],
    status: "Строится",
    completionDate: "2026-09-30",
    developer: "ГК Строитель",
    images: ["/placeholder/building1.jpg", "/placeholder/apartment1-1.jpg", "/placeholder/apartment1-2.jpg"],
    floors: 20,
    units: 240,
    ceilingHeight: 2.8,
    parkingAvailable: true,
    nearbyInfrastructure: ["Школа", "Детский сад", "Парк", "Торговый центр"]
  },
  { 
    id: 2, 
    name: "ЖК Лунный", 
    price: 7000000, 
    area: 65, 
    rooms: 3, 
    district: "Западный",
    address: "ул. Западная, 42",
    description: "«Лунный» – уникальный жилой комплекс в экологически чистом районе города. Состоит из 3 башен переменной этажности. Квартиры с чистовой отделкой, высокими потолками и просторными планировками.",
    features: ["Чистовая отделка", "Высокие потолки", "Закрытая территория", "Собственный парк"],
    status: "Сдан",
    completionDate: "2024-12-15",
    developer: "СтройИнвест",
    images: ["/placeholder/building2.jpg", "/placeholder/apartment2-1.jpg", "/placeholder/apartment2-2.jpg"],
    floors: 25,
    units: 300,
    ceilingHeight: 3.2,
    parkingAvailable: true,
    nearbyInfrastructure: ["Супермаркет", "Фитнес-центр", "Медицинский центр", "Станция метро"]
  },
  { 
    id: 3, 
    name: "ЖК Звездный", 
    price: 6000000, 
    area: 50, 
    rooms: 2, 
    district: "Восточный",
    address: "ул. Восточная, 15",
    description: "Жилой комплекс «Звездный» – проект бизнес-класса с авторской архитектурой. Территория комплекса включает зоны отдыха, детские площадки и собственный сквер.",
    features: ["Авторская архитектура", "Собственный сквер", "Умный дом", "Консьерж-сервис"],
    status: "Скоро сдача",
    completionDate: "2025-06-20",
    developer: "Арт-Строй",
    images: ["/placeholder/building3.jpg", "/placeholder/apartment3-1.jpg", "/placeholder/apartment3-2.jpg"],
    floors: 18,
    units: 180,
    ceilingHeight: 3.0,
    parkingAvailable: true,
    nearbyInfrastructure: ["Школа искусств", "Парк", "Рестораны", "Торговый центр"]
  },
  { 
    id: 4, 
    name: "ЖК Городской", 
    price: 8000000, 
    area: 80, 
    rooms: 4, 
    district: "Северный",
    address: "ул. Северная, 101",
    description: "«Городской» – премиальный жилой комплекс с собственной инфраструктурой. В комплексе предусмотрены квартиры с террасами, двухуровневые пентхаусы и отдельные коммерческие помещения.",
    features: ["Квартиры с террасами", "Пентхаусы", "Фитнес-клуб", "Ресторан на территории"],
    status: "Строится",
    completionDate: "2026-03-15",
    developer: "ПремиумСтрой",
    images: ["/placeholder/building4.jpg", "/placeholder/apartment4-1.jpg", "/placeholder/apartment4-2.jpg"],
    floors: 30,
    units: 350,
    ceilingHeight: 3.5,
    parkingAvailable: true,
    nearbyInfrastructure: ["Бизнес-центр", "Гольф-клуб", "Частная школа", "Вертолетная площадка"]
  },
  { 
    id: 5, 
    name: "ЖК Речной", 
    price: 5500000, 
    area: 55, 
    rooms: 2, 
    district: "Южный",
    address: "Набережная, 28",
    description: "Жилой комплекс «Речной» расположен на берегу реки с прекрасным видом на воду. Проект включает собственную набережную и пристань для яхт.",
    features: ["Вид на реку", "Собственная набережная", "Пристань для яхт", "Панорамное остекление"],
    status: "Строится",
    completionDate: "2025-08-10",
    developer: "РивьераСтрой",
    images: ["/placeholder/building5.jpg", "/placeholder/apartment5-1.jpg", "/placeholder/apartment5-2.jpg"],
    floors: 15,
    units: 180,
    ceilingHeight: 3.0,
    parkingAvailable: true,
    nearbyInfrastructure: ["Пляж", "Яхт-клуб", "Ресторан", "Спа-центр"]
  },
  { 
    id: 6, 
    name: "ЖК Парковый", 
    price: 4800000, 
    area: 60, 
    rooms: 3, 
    district: "Центр",
    address: "ул. Парковая, 5",
    description: "Жилой комплекс «Парковый» находится рядом с центральным городским парком. Это экологичный проект с использованием энергосберегающих технологий.",
    features: ["Рядом с парком", "Энергосберегающие технологии", "Зеленая крыша", "Велопарковки"],
    status: "Сдан",
    completionDate: "2024-05-20",
    developer: "ЭкоСтрой",
    images: ["/placeholder/building6.jpg", "/placeholder/apartment6-1.jpg", "/placeholder/apartment6-2.jpg"],
    floors: 12,
    units: 120,
    ceilingHeight: 2.9,
    parkingAvailable: true,
    nearbyInfrastructure: ["Городской парк", "Велодорожки", "Органический супермаркет", "Экологический центр"]
  }
];