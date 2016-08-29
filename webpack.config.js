const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool:'cheap-module-source-map',
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	output:{
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve:{
		modulesDirectories:['node_modules','src'],
		extensions:[ '', '.js','map', '.jsx']
	},
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
        		exclude: /(node_modules)/,
        		loaders: ['react-hot','babel']
			},
			{
		        test: /\.css$/,
		        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
		    },
		    {
		        test: /\.sass/,
		        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
		    },
		    {
		        test: /\.scss/,
		        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader?outputStyle=expanded'
		    }
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
	      $: "jquery",
	      jQuery: "jquery"
	    })
	],
	devServer: {
		host: 'localhost',
    	port: 8080,
	    proxy: {
	      '/api/*' : 'http://localhost:3000',
	    }
  	}
}