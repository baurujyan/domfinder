import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@site.com" && password === "123456") {
      login(email);
      navigate("/profile");
    } else {
      alert("Неверные данные");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Вход</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded" 
            required 
          />
          <input 
            type="password" 
            placeholder="Пароль" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded" 
            required 
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;