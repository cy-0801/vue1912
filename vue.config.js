const path = require("path")
module.exports = {
    //跨域的配置
    devServer:{
        proxy:{
            "/api":{
                target:"http://vueshop.glbuys.com",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@views":path.join(__dirname,"./src/views"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils")
            }
        }
    }
}

