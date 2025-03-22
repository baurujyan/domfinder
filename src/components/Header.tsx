import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Новостройки</Link>
        <div className="flex gap-4">
          <Link to="/apartments" className="hover:text-gray-300">Квартиры</Link>
          <Link to="/about" className="hover:text-gray-300">О компании</Link>
          <Link to="/blog" className="hover:text-gray-300">Блог</Link>
          <Link to="/login" className="hover:text-gray-300">Вход</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
