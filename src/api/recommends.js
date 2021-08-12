import request from '@/utils/request'

export function getHotRecommend () {
  return request({
    url: "/personalized"
  })
}