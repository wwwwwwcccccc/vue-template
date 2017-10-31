import fetch from '../utils/fetch';

export function getList() {
  return fetch({
    url: '/movie/top250',
    method: 'get'
  });
}


