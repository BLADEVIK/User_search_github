import ListUsers from './components/listUsers/listUsers';

export default function Home() {
  return (
    <div>
      <h1 className=" pl-10 text-lg text-black font-semibold">
        Поиск в GitHub:
      </h1>
      <ListUsers />
    </div>
  );
}
