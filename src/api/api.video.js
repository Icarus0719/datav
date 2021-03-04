import {
  axiosGet
} from './axios'
import * as codeMessage from './codeMessage'
import baseUrl from './baseUrl'
const preUrl = baseUrl.url + '/ip37/file'

/**
 * @method getVideoKey 获取视频加密的key
 */
export const getVideoKey = data => {
  const httpConfig = {
    url: `${preUrl}/getHlsFileUrl`,
    config: {
      loading: false,
      params: data
    }
  }
  return axiosGet(httpConfig.url, httpConfig.config).then(res => {
    codeMessage.dealAPIResponse(res)
    return res
  })
}