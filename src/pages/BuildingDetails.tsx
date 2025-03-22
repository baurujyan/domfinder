import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { apartments } from "../data/apartments";

const BuildingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apartment = apartments.find((apt) => apt.id === Number(id));
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'developer' | 'location'>('description');
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  if (!apartment) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Объект не найден</h1>
        <p className="mb-4">К сожалению, запрашиваемый вами объект недвижимости не найден.</p>
        <Link to="/apartments" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Вернуться к списку квартир
        </Link>
      </div>
    );
  }
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы API запрос
    alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setShowCallbackForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long'
    });
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link to="/apartments" className="text-blue-600 hover:underline">
          ← Назад к списку
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Основная информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="md:col-span-2">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">{apartment.name}</h1>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {apartment.status}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{apartment.district}, {apartment.address}</p>
          </div>
          
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for image gallery */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              Фотогалерея ЖК
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-4">{formatPrice(apartment.price)} ₽</div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-gray-600 text-sm">Площадь</div>
                <div className="font-semibold">{apartment.area} м²</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Комнат</div>
                <div className="font-semibold">{apartment.rooms}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Статус</div>
                <div className="font-semibold">{apartment.status}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Сдача</div>
                <div className="font-semibold">{formatDate(apartment.completionDate)}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => setShowCallbackForm(true)}
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Оставить заявку
              </button>
              <button className="w-full bg-white border border-blue-600 text-blue-600 py-3 rounded hover:bg-blue-50 transition">
                Скачать презентацию
              </button>
              <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded hover:bg-gray-50 transition">
                Записаться на просмотр
              </button>
            </div>
          </div>
        </div>
        
        {/* Табы с детальной информацией */}
        <div className="border-t">
          <div className="flex border-b">
            <button 
              className={`px-4 py-3 text-center ${activeTab === 'description' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
              onClick={() => setActiveTab('description')}
            >
              Описание
            </button>
            <button 
              className={`px-4 py-3 text-center ${activeTab === 'features' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
              onClick={() => setActiveTab('features')}
            >
              Характеристики
            </button>
            <button 
              className={`px-4 py-3 text-center ${activeTab === 'developer' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
              onClick={() => setActiveTab('developer')}
            >
              Застройщик
            </button>
            <button 
              className={`px-4 py-3 text-center ${activeTab === 'location' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
              onClick={() => setActiveTab('location')}
            >
              Расположение
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">О жилом комплексе</h2>
                <p className="mb-4">{apartment.description}</p>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Особенности</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {apartment.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'features' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Характеристики</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Статус</td>
                          <td className="py-3 font-medium">{apartment.status}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Срок сдачи</td>
                          <td className="py-3 font-medium">{formatDate(apartment.completionDate)}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Этажность</td>
                          <td className="py-3 font-medium">{apartment.floors}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Количество квартир</td>
                          <td className="py-3 font-medium">{apartment.units}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Высота потолков</td>
                          <td className="py-3 font-medium">{apartment.ceilingHeight} м</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Паркинг</td>
                          <td className="py-3 font-medium">{apartment.parkingAvailable ? 'Да' : 'Нет'}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Район</td>
                          <td className="py-3 font-medium">{apartment.district}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-gray-600">Адрес</td>
                          <td className="py-3 font-medium">{apartment.address}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'developer' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Застройщик</h2>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-lg">{apartment.developer}</h3>
                    <p className="text-gray-600">Надежный застройщик с опытом работы на рынке более 10 лет</p>
                  </div>
                </div>
                <p className="mb-4">
                  Компания {apartment.developer} специализируется на строительстве современных жилых комплексов комфорт и бизнес-класса. 
                  За время работы компания реализовала более 20 успешных проектов общей площадью более 500 000 кв.м.
                </p>
                <p>
                  Все проекты компании отличаются уникальной архитектурой, продуманными планировками и высоким качеством строительства.
                </p>
              </div>
            )}
            
            {activeTab === 'location' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Расположение</h2>
                <div className="h-96 bg-gray-200 mb-6 flex items-center justify-center">
                  {/* Placeholder for map */}
                  <div className="text-gray-500">Карта расположения</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Объекты инфраструктуры рядом</h3>
                  <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {apartment.nearbyInfrastructure.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Форма обратного звонка */}
      {showCallbackForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Оставить заявку</h2>
              <button 
                onClick={() => setShowCallbackForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
          </div>
        );
      };

      export default BuildingDetails;