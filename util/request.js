/* eslint-disable no-prototype-builtins */
/* 这是对request-promise进行封装
 * 该系统自定义接口参数与QQ音乐API文档参数做转换
 * 默认参数不需要用户设定，自动带上
 * 默认参数有：loginUin=0 hostUin=0 inCharset=utf8 
 * outCharset=utf-8 platform=yqq needNewCode=0
*/
const rp = require('request-promise')
// 预设参数(为GET请求设置)
let preParams = {
  loginUin: 0,
  hostUin: 0,
  inCharset: 'utf8',
  outCharset: 'utf-8',
  platform: 'yqq',
  needNewCode: 0,
  format: 'json'
}

const UAGenerator = () => {
  const userAgentList = [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89;GameHelper',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1',
    'Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586'
  ]
  return userAgentList[Math.round(Math.random()*13)]
}
const methods = (()=>{
  const arr = ['GET', 'POST', 'HEAD', 'PUT', 'OPTIONS', 'DELETE', 'CONNECT', 'TRACE', 'PATCH']
  const res = {}
  arr.forEach((method)=>{
    res[method] = 1
  })
  return res
})()

/**
 *
 *
 * @param {*} method 方法
 * @param {*} url 请求路径
 * @param {*} headers 包含header信息
 * @param {*} data 请求参数数据
 */
const createRequest = (method, uri, headers, data) => {
  method = method.toUpperCase()
  method = methods.hasOwnProperty(method)? method:'GET'
  // headers 中包含较重要的头信息例如User-Agent、Referer、Cookie
  if (!headers['User-Agent']){
    headers['User-Agent'] = UAGenerator()
  }
  headers['Referer'] = 'https://c.y.qq.com/'


  const options = {
    method,
    uri,
    headers,
    // json: true
  }
  Object.assign(data, preParams)
  if (method==='GET') {
    options['qs'] = data
  }else {
    options['body'] = data
  }
  const resp = {
    header: {},
    body: {code: 200, data: {}, msg: null}
  }
  return new Promise((resolve, reject) => {
    rp(options).then((res)=>{
      resp.body = {code: 200, data: res, msg: 'get success'}
      resolve(resp)
    }).catch((err)=>{
      resp.body = {code: 500, data: null, msg: err}
      reject(resp)
    })
  })
}
module.exports = createRequest