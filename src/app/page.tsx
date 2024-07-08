'use client';
import { useEffect, useState } from 'react';
import { getUsersBySearch } from './api/userApi';
interface Items {
  items: any[];
}
export default function Home() {
  const [search, setSearch] = useState('555');
  const [data, setData] = useState<Items | null>(null);
  useEffect(() => {
    getUsersBySearch({ q: search }).then((res) => {
      setData(res);
    });
  }, [search]);
  console.log(data);
  return (
    <div>
      <h1>Главная</h1>
      <ul>{data && data.items.map((el)=>(
      <li key={el}>{el.login}</li>
      ))}</ul>
    </div>
  );
}
