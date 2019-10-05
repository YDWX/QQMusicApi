// 排行榜
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = {
    g_tk: 5381
  }
  router.get('/', (req, res, next) => {
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter