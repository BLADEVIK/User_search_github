'use client';
import { getUsersBySearch } from '@/app/api/userApi';
import { useEffect, useState } from 'react';
// import ExampleUseEffect from '../useEffect/useEffect';


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
      {/* <ExampleUseEffect /> */}
      <input  placeholder="Введите пользователя" />
      <ul>{data && data.items.map((el) => <li key={el}>{el.login}</li>)}</ul>
    </div>
  );
}
