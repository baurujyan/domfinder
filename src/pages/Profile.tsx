import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Личный кабинет</h1>
      <p className="mb-4">Добро пожаловать, {user || 'застройщик'}!</p>
      <button 
        onClick={handleLogout} 
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Выйти
      </button>
    </div>
  );
};

export default Profile;