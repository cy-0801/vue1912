import http from "@utils/http.js"
//轮播图接口
export const homelunboApi = () => http({
    method:"get",
    url:"/api/home/index/slide?token=1ec949a15fb709370f"
})
//首页导航接口
export const homeNav = ()=>http({
    method:"get",
    url:"/api/home/index/nav?token=1ec949a15fb709370f"
})
//首页产品接口
export const getGoods = ()=>http({
    method:"get",
    url:"/api/home/index/goodsLevel?token=1ec949a15fb709370f"
})
//首页推荐接口
export const tuijian = ()=>http({
    method:"get",
    url:"/api/home/index/recom?token=1ec949a15fb709370f"
})
//详情接口
export const goodsdetail = (gid)=>http({
    method:"get",
    url:"/api/home/goods/info?gid="+gid+"&type=details&token=1ec949a15fb709370f"
})        
//产品规格
export const goodsSize = (gid)=>http({
    method:"get",
    url:"/api/home/goods/info?gid="+gid+"&type=spec&token=1ec949a15fb709370f"
})
//商品评价接口 
export const comment = (gid)=>http({
    method:"get",
    url:"/api/home/reviews/index?gid="+gid+"&token=1ec949a15fb709370f&page=1"
})
//产品分类页面左侧菜单
export const leftmenu = ()=>http({
    method:"get",
    url:"/api/home/category/menu?token=1ec949a15fb709370f"
})
//产品分类页面右侧菜单
export const rightmenu = (cid=493)=>http({
    method:"get",
    url:"/api/home/category/show?cid="+cid+"&token=1ec949a15fb709370f"
})

//是否注册过会员 
export const isVIP = (username)=>{
    let formdata = new FormData();
    formdata.append("username",19577664433)
    return http({
        method:"post",
        url:"/api/home/user/isreg?token=1ec949a15fb709370f",
        data:formdata
    })
}

//热门搜索
export const hotSearch = ()=>http({
    method:"get",
    url:"/api/home/public/hotwords?token=1ec949a15fb709370f"
})

//产品搜索页面的结果

export const goodsSearch = (kwords)=>http({
    method:"get",
    url:"/api/home/goods/param?kwords="+kwords+"&token=1ec949a15fb709370f"
})

