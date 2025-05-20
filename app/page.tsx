'use client'
import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '', birthdate: '', birthtime: '', birthplace: '', contact: '', message: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md shadow-lg border border-yellow-500">
        <h1 className="text-2xl text-center mb-4 text-yellow-400 font-bold">LariNum Flow</h1>
        <p className="text-sm text-center mb-6 text-yellow-300">Выберите свой магический пакет и заполните форму.</p>
        <form className="space-y-3">
          {['name', 'birthdate', 'birthtime', 'birthplace', 'contact', 'message'].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={{
                name: 'Имя и фамилия',
                birthdate: 'Дата рождения (ДД.ММ.ГГГГ)',
                birthtime: 'Время рождения (если известно)',
                birthplace: 'Место рождения',
                contact: 'Ваш Telegram или Email',
                message: 'Комментарий или вопрос клиента'
              }[field]}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
            />
          ))}
          <button type="submit" className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300 transition">
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
}
