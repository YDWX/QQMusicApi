/* eslint-disable no-undef */
const uri = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

const data = {
  cid: 205361747,
  songmid: '',
  filename: '',
  guid: 3655047200
}
module.exports = (songmid)=>{
  if (!songmid) {
    return null
  }
  const filename = `C400${songmid}.m4a`
  Object.assign(data, {songmid, filename})
  return RequestC('GET', uri, {}, data)
}