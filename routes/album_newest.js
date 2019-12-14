// 最新专辑
// TODO: 这个借口有问题，不是最新专辑，过时了
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/v8/fcg-bin/album_library'
  const data = {
    cmd: 'firstpage',
    sort: 2,
    genre: 0,
    year: 1,
    pay: 0,
    type: -1,
    company: -1,
    page: 0,
    pagesize: 20
  }
  router.get('/', (req, res, next) => {
    let {page, pagesize} = req.query
    page = page>=0? page:0
    pagesize = pagesize>=20? pagesize:20
    Object.assign(data, {page, pagesize})
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter