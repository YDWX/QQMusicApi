// 歌手列表
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 0,
    pagenum: 0,
  }
  router.get('/', (req, res, next) => {
    let {pagesize, pagenum} = req.query
    if (!pagesize||!pagenum) {
      res.status(400).json({code: 400, data: null, msg: 'no keyword albummid'})
    }
    Object.assign(data, {pagesize, pagenum})
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter