/**
 * Created by Rober on 31/05/15.
 */
module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.temp/';

    var config = {
        temp: temp,

        //all vet js
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        index: client + 'index.html',
        css: temp + 'styles.css',
        js:[
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.module.js',
        ],
        less: client + 'styles/styles.less',

        //Bower and NPM locations
        bower:{
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'

        }
    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;

    };
    return config;
};
