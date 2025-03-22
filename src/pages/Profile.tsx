import React from "react";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <h1>Личный кабинет</h1>
      <p>Добро пожаловать, застройщик!</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Profile;
