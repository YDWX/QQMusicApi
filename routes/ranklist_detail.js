// 排行榜详情
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = {
    g_tk: 5381,
    topid: null,
    page: 'detail',
    type: 'top'
  }
  router.get('/', (req, res, next) => {
    let {topid} = req.query
    data.topid = topid
    if (!topid) {
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