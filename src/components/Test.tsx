import React, { useState, FormEvent } from 'react';
import 'tailwindcss/tailwind.css';
import { User } from "../types/User";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Test: React.FC = () => {
  const [email, setEmail]       = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate                = useNavigate();
  
  // フォームのサブミット時に実行される関数
  const handleSubmit = async () => {
    await axios.get('/sanctum/csrf-cookie').then((res) => {
      console.log(res)
      axios
        .post<User>("http://127.0.0.1:8000/api/tokens/create", {
          email: email,
          password,
        })
        .then(() => navigate("/home"))
        .catch((error) => {
          navigate("/fail_login");
        });
    })
    // フォームのデータを使用してログインを実行するなどの処理をここに追加する
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('Password:', authStatus);
  };
  
  const login = () => {
    axios.get('/sanctum/csrf-cookie').then((res) => {
      axios.post('/api/login', {email, password}).then((res) => {
        console.log(res);
      })
    })
  }
  
  // const onClickLogin = async () => {
  //   const authStatus = await axios
  //     .post<User>("http://127.0.0.1:8000/api/tokens/create", {
  //       email: userId,
  //       password,
  //     })
  //     .then(() => navigate("/home"))
  //     .catch((error) => {
  //       navigate("/fail_login");
  //     });
  //   console.log("authStatus: ", authStatus);
  // };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >Login</button>
      </form>
    </div>
  );
}
