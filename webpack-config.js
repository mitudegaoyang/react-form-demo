const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let plu = [];
plu.push(
  new HtmlWebpackPlugin({
    template: './public/index.html',
    chunks: ['vendor', 'index.js', 'utils']  //  引入需要的chunk
  }),
  // 拆分后会把css文件放到dist目录下的css/style.css
  new ExtractTextWebpackPlugin('css/style.css'),
  new ExtractTextWebpackPlugin('css/reset.css'),
  new webpack.HotModuleReplacementPlugin(),  // 热更新，热更新不是刷新
)
module.exports={
  entry: {
    index: './src/index.js',
  },    // 入口文件
  output: {
    filename: '[name].js',      // 打包后的文件名称
    path: path.resolve('dist'),  // 打包后的目录，必须是绝对路径
    publicPath: "/"
  },
  devServer:{
    contentBase:"./public"
  },
  resolve: {
    // 省略后缀
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
        include: /src/,          // 只转化src目录下的js
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /node_modules/  // 排除掉node_modules，优化打包速度
      },
      {
        test: /\.less$/,     // 解析less
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
        })
      },
      {
        test: /\.scss$/,     // 解析scss
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'sass-loader'] // 从右向左解析
        })
      },
      {
        test: /\.css$/,     // 解析css
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'   // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader' // 打包页面img引用图片
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,  //  打包字体图片和svg图片
        use: 'file-loader'
      }
    ]
  },
  plugins: plu
}