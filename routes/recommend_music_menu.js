// 推荐歌单
const consRouter = (router, request) => {
  const uri = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  const data = {
    g_tk: 1278911659,
    data: JSON.stringify({'comm':{'ct':24},'category':{'method':'get_hot_category','param':{'qq':''},'module':'music.web_category_svr'},'recomPlaylist':{'method':'get_hot_recommend','param':{'async':1,'cmd':2},'module':'playlist.HotRecommendServer'},'playlist':{'method':'get_playlist_by_category','param':{'id':8,'curPage':1,'size':40,'order':5,'titleid':8},'module':'playlist.PlayListPlazaServer'},'new_song':{'module':'QQMusic.MusichallServer','method':'GetNewSong','param':{'type':0}},'new_album':{'module':'QQMusic.MusichallServer','method':'GetNewAlbum','param':{'type':0,'category':'-1','genre':0,'year':1,'company':-1,'sort':1,'start':0,'end':39}},'toplist':{'module':'music.web_toplist_svr','method':'get_toplist_index','param':{}},'focus':{'module':'QQMusic.MusichallServer','method':'GetFocus','param':{}}})
  }
  router.get('/', (req, res, next)=>{
    request('GET', uri, req.header, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter