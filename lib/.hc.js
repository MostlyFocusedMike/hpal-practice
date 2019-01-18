module.exports = {
    recursive: true,
    add: [ // this is for the cli make command
        require('./.hc/add/routes'),
    ],
    // exclude: (filename, path) => {
    //     console.log('filename', filename);
    //     console.log('path', path);
    //     if (filename === 'configuration') return true;
    //     return false;
    // },
    exclude: /(config)|(spec)/ // if anything in the path or filename match, it's ignored

};