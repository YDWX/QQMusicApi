// 获取歌曲文件地址
const vkey_service = require('../service/vkey')
const consRouter = (router, request) => {

  router.get('/', (req, res, next) => {
    let {songmid} = req.query
    if (!songmid) {
      res.status(400).json({code: 400, data: null, msg: 'no keyword albummid'})
    }
    const filename = `C400${songmid}.m4a`
    vkey_service(songmid).then((data)=>{
      let file_resp = null
      if (!data.body.data.items[0].vkey){
        file_resp = {
          code: 500,
          data: {
            url: null
          },
          msg: 'get fail'
        }
      } else {
        file_resp = {
          code: 200,
          data: {
            url: `http://dl.stream.qqmusic.qq.com/${filename}?vkey=${data.body.data.items[0].vkey}&guid=${data.guid}&fromtag=66`
          },
          msg: 'get success'
        }
      }
      res.status(200).json(file_resp)
    }).catch((err)=>{
      console.log(err)
      res.status(500).json(err)
    })

  })
  return router
}

module.exports = consRouter