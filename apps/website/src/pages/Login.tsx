import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  function handleLogin() {
    login({
      id: "1",
      email: "user@yjdgi.com",
      role: "user",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-white text-black rounded-lg"
      >
        Login
      </button>
    </div>
  );
}
