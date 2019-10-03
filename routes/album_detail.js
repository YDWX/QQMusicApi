// 专辑详情
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg'
  const data = {
    g_tk: 1278911659,
    albummid: null
  }
  router.get('/', (req, res, next) => {
    let {albummid} = req.query
    data.albummid = albummid
    if (!albummid) {
      res.status(400).json({code: 400, data: null, msg: 'no keyword albummid'})
    }
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter