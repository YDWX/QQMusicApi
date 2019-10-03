// 搜索
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = {
    g_tk: 5381,
    uin: 0,
    notice: 0,
    w: '', // 关键词
    n: '', // 每页数量
    p: '', // 当前页
    zhidaqu: 1,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all',
    _: (new Date()).getTime()
  }
  router.get('/', (req, res, next)=>{
    let {word, pageNum, pagesize} = req.query
    pageNum = pageNum>=0? pageNum:0
    pagesize = pagesize>=20? pagesize:20
    if (!word) {
      res.status(400).json({code: 400, body:null, msg: 'no keyword word'})
    }
    data['w'] = word
    data['p'] = parseInt(pageNum)
    data['n'] = parseInt(pagesize)
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter