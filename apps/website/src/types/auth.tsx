import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  async function handleSubmit() {
    const { error } = isLogin
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) alert(error.message);
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 p-8 rounded-xl w-[350px] backdrop-blur">
        <h1 className="text-2xl mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <input
          className="w-full mb-3 p-3 rounded bg-black/40"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-3 rounded bg-black/40"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-white text-black rounded-lg"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          className="text-sm mt-4 cursor-pointer underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create account" : "Already have an account?"}
        </p>
      </div>
    </section>
  );
}

export interface User {
  id: string;
  email: string;
  role: "user" | "admin";
}
