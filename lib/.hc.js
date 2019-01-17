module.exports = {
    exclude: (filename, path) => {
        console.log('filename', filename);
        console.log('path', path);
        if (filename === 'configuration') return true;
        return false;
    }
    // exclude: /configuration/
};