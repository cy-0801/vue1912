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