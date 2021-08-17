import request from '@/utils/request'
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    method: 'get',
    params: {
      ids,
    },
  })
}
