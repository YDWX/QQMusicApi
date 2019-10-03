// 最新专辑
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/v8/fcg-bin/album_library'
  const data = {
    g_tk: 1278911659,
    cmd: 'firstpage',
    sort: 1,
    genre: 0,
    year: 1,
    pay: 0,
    type: -1,
    company: -1,
    page: 0,
    pagesize: 20
  }
  router.get('/', (req, res, next) => {
    let {pageNum, pagesize} = req.query
    pageNum = pageNum>=0? pageNum:0
    pagesize = pagesize>=20? pagesize:20

    data.page = pageNum
    data.pagesize = pagesize
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter