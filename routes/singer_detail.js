// 歌手详情
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = {
    singermid: null,
    order: 'listen',
    begin: 0,
    num: 0,
    songstatus: 1,
  }
  router.get('/', (req, res, next) => {
    let {page, singermid, num} = req.query
    if (!singermid||!num||!page) {
      res.status(400).json({code: 400, data: null, msg: 'no keyword albummid'})
    }
    Object.assign(data, {begin: (page-1)*num, singermid, num})
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter