const htmlwebpackplugin=require('html-webpack-plugin');

module.exports=()=>{
    return{
        output:{
            filename:"buldle.js"
        },
        module:{
            rules:[
                {
                    test:/\.css$/,
                    use:["style-loader","css-loader"]
                }
            ]
        },
        plugins:[
            new htmlwebpackplugin()
        ]
    }
}