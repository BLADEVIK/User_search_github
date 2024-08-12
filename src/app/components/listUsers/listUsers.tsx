'use client';
import { getUsersBySearch } from '@/app/api/userApi';
import { Container } from 'postcss';
import { useEffect, useState } from 'react';
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
        className="pl-50 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Введите пользователя"
      />

      <ul>
        {data?.items
          ? data.items.map((el) => (
              <li key={el}>
                {el.login}{' '}
                <img key={el} height={50} width={50} src={el.avatar_url} />{' '}
              </li>
            ))
          : search === ''}
      </ul>
    </div>
  );
}
