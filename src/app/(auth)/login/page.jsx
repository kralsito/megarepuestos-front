"use client";

import { useState } from "react";
import { loginAction } from "@/actions/auth";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginAction({ email, password });
      window.location.href = "/admin"; // Redirige después del login
    } catch (err) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen"
    style={{ backgroundImage: "url('/images/fondoquienessomos.jpg')" }}>
      <img 
        src="/images/login.png" 
        alt="Admin Icon" 
        className="max-w-[350px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => router.push('/')}
      />
      <h2 className="text-xl font-semibold text-white mb-12"
          style={{ fontFamily: "'oktah', sans-serif" }}>
        ADMIN
      </h2>

      <div className="max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4"
            style={{ fontFamily: "'oktah', sans-serif" }}>
          Iniciar sesión
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-yellow text-black py-2 rounded-lg hover:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
