'use client';
import { getUsersBySearch } from '@/app/api/userApi';
import { useEffect, useState } from 'react';
// import ExampleUseEffect from '../useEffect/useEffect';

interface Items {
  items: any[];
}
export default function Home() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Items | null>(null);
  useEffect(() => {
    getUsersBySearch({ q: search }).then((res) => {
      setData(res);
    });
  }, [search]);
  console.log(data);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Введите пользователя"
      />
      <ul>
        {data?.items
          ? data.items.map((el) => <li key={el}>{el.login}</li>)
          : search === ''}
      </ul>
    </div>
  );
}
