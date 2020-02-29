const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//파스칼케이스, 케이블케이스
const path = require('path'); //node.js의 기본모듈
// CommonJS 스텍의 모듈 전체를 배포하는방법. require할 때 이 안의 리스트를 갖고옴
// => es6에서 module로 변경
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js", //default가 main.js
    path: path.resolve(__dirname, 'dist') //__dirname은 현재 디렉토리를 기준으로 build라는 폴더를 만들고 out.js에 저장을 하라
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader', 'eslint-loader',
         ]

      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },//module에 여러가지 모듈을 정의. test라는 키가 어떤 조건을 만족하는 지 체크해서 만족하면 true,틀리면 false .css로 끝나면 true
  //true이면 밑에 모듈을 사용. css파일을 가져와서 자바스크립트 변수를 실행.
  //자바스크립트에서 꺼내고 style태그로 복원까지 가능
  //import할때마다 css-loader, style-loader 순서로
  plugins: [new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ]
}