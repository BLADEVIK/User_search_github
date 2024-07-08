import { Params } from './interfaces';

export const getUsersBySearch = ({ q }: Params) => {
  return fetch(`https://api.github.com/search/users?q=${q}`).then((res) => {
    console.log(res);
    return res.json();
  });
};
