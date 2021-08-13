import request from '@/utils/request'
// 获取 推荐
export function getHotRecommend() {
  return request({
    url: '/personalized',
    method: 'get',
    params: {
      limit: 8,
    },
  })
}

// 获取banner
export function getTopBanner() {
  return request({
    url: '/banner',
    method: 'get',
  })
}

// 获取NewAlbum
export function getNewAlbum(data) {
  return request({
    url: '/top/album',
    method: 'get',
    params: data,
  })
}
