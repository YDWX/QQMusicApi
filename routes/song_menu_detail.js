// 歌曲详情
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = {
    g_tk: 5381,
    disstid: null
  }
  router.get('/', (req, res, next) => {
    let {disstid} = req.query
    if (!disstid) {
      res.status(400).json({code: 400, data: null, msg: 'no keyword disstid'})
      return
    }
    Object.assign(data, {disstid})
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter