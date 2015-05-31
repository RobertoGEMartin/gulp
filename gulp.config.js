/**
 * Created by Rober on 31/05/15.
 */
module.exports = function() {
    var client = './src/client/';
    var config = {
        temp: './.temp',

        //all vet js
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        less: client + 'styles/styles.less'
    };
    return config;
};
