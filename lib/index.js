const HauteCouture = require('haute-couture');
const Package = require('../package.json');

exports.plugin = {
    pkg: Package,
    register: async (server, options) => {

        server.app.override = 'http://comments'; // eslint-disable-line no-param-reassign
        // Custom plugin code can go here
        await HauteCouture.using()(server, options);
        /*
        HauteCouture brief explanation:
        hapi pal's directory and file structure is governed by a tool called
        haute-couture, which you can see is used in your project at lib/index.js.
        When you place a file in the routes/ directory, as hpal did for us here,
        it will automatically be added to your application plugin because
        haute-couture will make the call to server.route() for you!
        The same can be said for other plugin functionality—you'll find that
        models go in models/, authentication strategies go in auth/strategies/,
        etc.
        https://github.com/hapipal/haute-couture
        */
    }
};
