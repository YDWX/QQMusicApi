# QQ音乐API
> 所有api  jsonp格式都是可选的，jsonpCallback format等参数根据是否是jsonp而不同
> _表示时间戳
### **推荐歌单**
> GET https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=1278911659&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8¬ice=0&platform=yqq&needNewCode=0&format=json&data={"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":0}},"new_album":{"module":"QQMusic.MusichallServer","method":"GetNewAlbum","param":{"type":0,"category":"-1","genre":0,"year":1,"company":-1,"sort":1,"start":0,"end":39}},"toplist":{"module":"music.web_toplist_svr","method":"get_toplist_index","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}


使用`JSONP`形式还要加上以下`query`：`callback=recom3477297233556247`、`jsonpCallback=recom3477297233556247`，`format=json`改为`format=jsonp`

#### 参数
|参数名|说明|
|--|--|
|format|数据格式|
|jsonpCallback|jsonp回调函数名|

### **歌曲详情**
> GET https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&format=jsonp&g_tk=5381&jsonpCallback=playlistinfoCallback&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&disstid=3602407677

#### 参数
|参数名|说明|
|--|--|
|disstid|歌单id|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|

注：该参数需要referer请求头参数设置为https://c.y.qq.com/，需要使用代理


### **移动web端推荐页面接口**
> GET https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=701075963&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1512548815061

#### 参数
|参数名|说明|
|--|--|
|disstid|歌单id|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|

注：该接口从QQ音乐移动web端推荐页面抓取的，最后一个**_**参数代表时间戳

### **最新专辑**
> GET https://c.y.qq.com/v8/fcg-bin/album_library?g_tk=1278911659&hostUin=0&format=jsonp&jsonpCallback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cmd=firstpage&page=0&pagesize=20&sort=1&language=-1&genre=0&year=1&pay=0&type=-1&company=-1

#### 参数
|参数名|说明|
|--|--|
|page|当前页|
|pagesize|每页专辑数量|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|


### **最新专辑（新）**
> GET https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=5381&loginUin=0&hostUin=0&format=jsonp&callback=calback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"albumlib":{"method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":20,"click_albumid":0},"module":"music.web_album_library"}}


#### 参数
|参数名|说明|
|--|--|
|sin|当前页|
|num|每页专辑数量|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|

### **专辑详情**
> GET https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=001IskfD3Vncxo&g_tk=1278911659&hostUin=0&format=jsonp&jsonpCallback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0


#### 参数
|参数名|说明|
|--|--|
|albummid|专辑id|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|



### **歌手列表**
> GET https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&jsonpCallback=callback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0



#### 参数
|参数名|说明|
|--|--|
|pagenum|当前页|
|pagesize|每页数量|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|


### **歌手详情**
> GET https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&jsonpCallback=callback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=004aRKga0CXIPm&order=listen&begin=0&num=30&songstatus=1


#### 参数
|参数名|说明|
|--|--|
|singermid|歌手mid，从歌手列表获取|
|begin|当前页|
|num|每页歌曲数量|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|

### **排行榜**
> GET https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1512554796112

#### 参数
|参数名|说明|
|--|--|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|

### **排行榜详情**
> GET https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1512563984096



#### 参数
|参数名|说明|
|--|--|
|topid|排行榜id|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|

### **热搜**
> GET https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1513317614040



#### 参数
|参数名|说明|
|--|--|
|format|数据格式（可选）|
|jsonpCallback|jsonp回调函数名（可选）|


### **搜索**
> GET https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E6%AC%A7%E9%98%B3%E6%9C%B5&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1512564562121

#### 参数
|参数名|说明|
|--|--|
|w|搜索关键字|
|p|当前页|
|n|每页歌曲数量|
|format|数据格式|
|jsonpCallback|jsonp回调函数|

注：在返回数据中有一个zhida字段里面有一个type字段，其中0表示歌曲、2表示歌手、3表示专辑，其它值还未知
该接口不支持跨域

### **搜索(跨域)**
> GET hhttps://c.y.qq.com/soso/fcgi-bin/client_search_cp?g_tk=5381&p=1&n=20&w=%E6%AC%A7%E9%98%B3%E6%9C%B5&format=jsonp&jsonpCallback=callback&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&remoteplace=txt.yqq.song&t=0&aggr=1&cr=1&catZhida=1&flag_qc=0


#### 参数
|参数名|说明|
|--|--|
|w|搜索关键字|
|p|当前页|
|n|每页歌曲数量|
|format|数据格式|
|jsonpCallback|jsonp回调函数|

注：在返回数据中有一个zhida字段里面有一个type字段，其中0表示歌曲、2表示歌手、3表示专辑，其它值还未知
该接口不支持跨域

### **获取歌曲文件**

#### **获取歌曲vkey**
> GET https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=jsonp&callback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&songmid=000OFXjz0Nljbh&filename=C400000OFXjz0Nljbh.m4a&guid=3655047200

##### 参数
|参数名|说明|
|--|--|
|songmid|歌曲mid|
|filename|C400+songmid+.m4a|
|format|数据格式|
|jsonpCallback|jsonp回调函数|


#### **获取歌曲文件**
> GET http://dl.stream.qqmusic.qq.com/C400000OFXjz0Nljbh.m4a?vkey=33E6799DB60508E9561F3DDAA6ED69488988B51DE791617A2E34B02A3A48E9CCBD43595DC00D796EB6768D26134AAB1C3AD192C7044DE1A1&guid=3655047200&fromtag=66


##### 参数
|参数名|说明|
|--|--|
|vkey|通过上一个接口获取|

### **歌词**
> GET https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?g_tk=5381&uin=0&format=jsonp&jsonpCallback=callback&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&nobase64=1&musicid=201773975&songtype=0&_=1513437581324

##### 参数
|参数名|说明|
|--|--|
|musicid|歌曲id|
|nobase64|不需要base64格式|
|format|数据格式|
|jsonpCallback|jsonp回调函数|

