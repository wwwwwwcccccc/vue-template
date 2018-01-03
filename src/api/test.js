import fetch from '@/utils/fetch'

export function get(data) {
  return fetch({
    url: '/get',
    method: 'get',
    params: { data }
  })
}

export function post(data) {
  return fetch({
    url: '/post',
    method: 'post',
    data: {
      data
    }
  })
}

