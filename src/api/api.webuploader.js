import {
  axiosGet
} from './axios'
import * as codeMessage from './codeMessage'
import baseUrl from './baseUrl'
const preUrl = baseUrl.url + '/webupload/file'

/**
 * @method checkMD5 校验MD5
 */
export const checkMD5 = data => {
  const httpConfig = {
    url: `${preUrl}/checkFileMD5`,
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